import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders the hero heading', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Sean Barry/i })).toBeInTheDocument();
  });
});