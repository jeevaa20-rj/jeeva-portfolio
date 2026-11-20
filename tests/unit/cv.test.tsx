import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getBasePath } from '@/lib/basePath';

describe('CV Links & Download Attributes', () => {
  it('Hero "Download CV" button has the correct href and download attribute', () => {
    render(<Hero />);
    const downloadLink = screen.getByRole('link', { name: /Download CV/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('download', 'Jeevaa_CV.pdf');

    const expectedHref = `${getBasePath()}/cv/Jeevaa_CV.pdf`;
    expect(downloadLink.getAttribute('href')).toBe(expectedHref);
  });

  it('Hero "View CV" link opens in a new tab with noopener noreferrer', () => {
    render(<Hero />);
    const viewLink = screen.getByRole('link', { name: /View CV in new tab/i });
    expect(viewLink).toBeInTheDocument();
    expect(viewLink).toHaveAttribute('target', '_blank');
    expect(viewLink).toHaveAttribute('rel', 'noopener noreferrer');

    const expectedHref = `${getBasePath()}/cv/Jeevaa_CV.pdf`;
    expect(viewLink.getAttribute('href')).toBe(expectedHref);
  });

  it('Navbar quick CV link points to correct CV URL and opens in new tab', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    const navCvLink = screen.getByTitle('View CV in new tab');
    expect(navCvLink).toBeInTheDocument();
    expect(navCvLink).toHaveAttribute('target', '_blank');
    expect(navCvLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
