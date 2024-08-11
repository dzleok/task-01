import { render, screen, waitFor } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { StarWarsCharacter } from '../types/types';
import '@testing-library/jest-dom/vitest';
import CardDetails from '../components/CardDetails/CardDetails';

const character: StarWarsCharacter = {
  name: 'Owen Lars',
  height: '178',
  mass: '120',
  hair_color: 'brown, grey',
  skin_color: 'light',
  eye_color: 'blue',
  birth_year: '52BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:52:14.024000Z',
  edited: '2014-12-20T21:17:50.317000Z',
  url: 'https://swapi.dev/api/people/6/',
};

describe('CardDetails', () => {
  it('should render Loading...', () => {
    render(<CardDetails character={character} onCloseDetails={() => {}} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

describe('CardDetails', () => {
  it('should render the correct name', async () => {
    render(<CardDetails character={character} onCloseDetails={() => {}} />);

    const nameElement = await waitFor(() => screen.getByText(character.name));
    expect(nameElement).toBeInTheDocument();
  });
});
