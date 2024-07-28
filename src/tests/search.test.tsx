import { render, screen } from '@testing-library/react';
import { it, expect, describe, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Search from '../components/Search/Search';
import '@testing-library/jest-dom/vitest';

vi.mock('../../hooks/useQuery', () => ({
  useQuery: () => ({
    query: '',
    setQuery: vi.fn(),
  }),
}));

vi.mock('../../hooks/useSelectedType', () => ({
  useSelectedType: () => ({
    selectedType: 'people',
    setSelectedType: vi.fn(),
  }),
}));

describe('Search Component', () => {
  it('should render search input with placeholder "Search ..."', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const inputElement = screen.getByPlaceholderText('Search ...');
    expect(inputElement).toBeInTheDocument();
  });
});
