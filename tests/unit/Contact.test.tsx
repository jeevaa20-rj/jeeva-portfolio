import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact } from '@/components/Contact';
import { profileData } from '@/data/profile';

describe('Contact Component', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('renders valid WhatsApp contact link', () => {
    render(<Contact />);
    const whatsappLinks = screen.getAllByRole('link', { name: /WhatsApp/i });
    expect(whatsappLinks.length).toBeGreaterThan(0);
    expect(whatsappLinks[0]).toHaveAttribute('href', profileData.whatsappUrl);
    expect(profileData.whatsappUrl).toMatch(/^https:\/\/wa\.me\//);
  });

  it('renders valid mailto link with owner email', () => {
    render(<Contact />);
    const mailLink = screen.getByRole('link', { name: /Send Mail/i });
    expect(mailLink).toHaveAttribute('href');
    const href = mailLink.getAttribute('href');
    expect(href).toContain(`mailto:${profileData.email}`);
  });

  it('renders valid LinkedIn and GitHub profile links', () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole('link', { name: /Jeevaa on LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', profileData.linkedinUrl);
    expect(profileData.linkedinUrl).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);

    const githubLink = screen.getByRole('link', { name: /Jeevaa on GitHub/i });
    expect(githubLink).toHaveAttribute('href', profileData.githubUrl);
    expect(profileData.githubUrl).toMatch(/^https:\/\/github\.com\//);
  });

  it('copies email to clipboard on copy button click', async () => {
    render(<Contact />);
    const copyBtn = screen.getByTitle('Copy email to clipboard');
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(profileData.email);
    expect(await screen.findByText('Copied!')).toBeInTheDocument();
  });
});
