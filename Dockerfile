# ==========================================
# Stage 1: Build static site with Node 20
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies required for system builds
RUN apk add --no-cache libc6-compat

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install exact dependencies
RUN npm ci

# Copy project source
COPY . .

# Set environment variables for production build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build static export (generates /app/out)
RUN npm run build

# ==========================================
# Stage 2: Serve static files with Nginx Alpine
# ==========================================
FROM nginx:alpine AS runner

# Remove default nginx configuration and html
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copy custom production nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy static build output from builder stage
COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html

# Prepare temporary and cache directories for non-root execution
RUN touch /tmp/nginx.pid && \
    chown -R nginx:nginx /tmp/nginx.pid /var/cache/nginx /var/log/nginx /usr/share/nginx/html

# Run as unprivileged nginx user
USER nginx

# Expose internal port
EXPOSE 8080

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/ || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
