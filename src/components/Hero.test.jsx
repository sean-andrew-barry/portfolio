/* global describe, it, expect */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero component', () => {
  it('renders the hero heading', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Sean Andrew Barry/i })).toBeInTheDocument();
  });
});