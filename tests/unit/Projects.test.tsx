import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Projects } from '@/components/Projects';
import { projectsData } from '@/data/projects';

describe('Projects Component & Filter Tabs', () => {
  it('renders all projects initially', () => {
    render(<Projects />);

    projectsData.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('filters by Web Development projects correctly', () => {
    render(<Projects />);

    const webTab = screen.getByRole('tab', { name: /Web Development/i });
    fireEvent.click(webTab);

    const webProjects = projectsData.filter(p => p.category === 'web');
    const mlProjects = projectsData.filter(p => p.category === 'ml');

    webProjects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });

    mlProjects.forEach(p => {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    });
  });

  it('filters by Machine Learning projects correctly', () => {
    render(<Projects />);

    const mlTab = screen.getByRole('tab', { name: /Machine Learning/i });
    fireEvent.click(mlTab);

    const webProjects = projectsData.filter(p => p.category === 'web');
    const mlProjects = projectsData.filter(p => p.category === 'ml');

    mlProjects.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });

    webProjects.forEach(p => {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    });
  });

  it('restores all projects when All Projects tab is selected', () => {
    render(<Projects />);

    // Click ML first
    const mlTab = screen.getByRole('tab', { name: /Machine Learning/i });
    fireEvent.click(mlTab);

    // Click All
    const allTab = screen.getByRole('tab', { name: /All Projects/i });
    fireEvent.click(allTab);

    projectsData.forEach(p => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });
});
