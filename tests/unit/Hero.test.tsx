import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { profileData } from '@/data/profile';

describe('Hero Component', () => {
  it('renders the owner name and preferred name correctly', () => {
    render(<Hero />);
    expect(screen.getByText(profileData.name)).toBeInTheDocument();
    expect(screen.getByText(profileData.preferredName)).toBeInTheDocument();
  });

  it('displays the full-stack developer and ML engineer tagline', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Full-Stack Developer and ML Engineer/i })
    ).toBeInTheDocument();
  });

  it('renders the primary call-to-action buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /Hire Me/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Download CV/i })).toBeInTheDocument();
  });
});
