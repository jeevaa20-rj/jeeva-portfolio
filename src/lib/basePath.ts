/**
 * Resolves the deployment base path for GitHub Pages and subpath deployments.
 * If NEXT_PUBLIC_BASE_PATH is set (e.g., '/portfolio'), it returns that path without a trailing slash.
 * Otherwise returns an empty string.
 */
export function getBasePath(): string {
  const envPath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (!envPath || envPath === '/') {
    return '';
  }
  // Remove trailing slash if present
  return envPath.endsWith('/') ? envPath.slice(0, -1) : envPath;
}

/**
 * Prefixes a relative public path with the application base path.
 * Example: withBasePath('/cv/Jeevaa_CV.pdf') => '/portfolio/cv/Jeevaa_CV.pdf' (if basePath is '/portfolio')
 */
export function withBasePath(path: string): string {
  const base = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
