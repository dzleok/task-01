const data: StarWarsRequest = {
  count: 3,
  next: null,
  previous: null,
  detail: null,
  results: [
    {
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
    },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '47BBY',
      gender: 'female',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:53:41.121000Z',
      edited: '2014-12-20T21:17:50.319000Z',
      url: 'https://swapi.dev/api/people/7/',
    },
    {
      name: 'Cliegg Lars',
      height: '183',
      mass: 'unknown',
      hair_color: 'brown',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '82BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/5/'],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-20T15:59:03.958000Z',
      edited: '2014-12-20T21:17:50.451000Z',
      url: 'https://swapi.dev/api/people/62/',
    },
  ],
};

import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import CardList from '../components/CardList/CardList';
import { StarWarsRequest } from '../types/types';
import '@testing-library/jest-dom/vitest';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = { selected: { selected: data.results } };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('CardList', () => {
  it('should render correct name', () => {
    render(
      <Provider store={store}>
        <CardList data={data} setData={() => {}} selectedType={null} />
      </Provider>,
    );

    const response = screen.getByText(data.results[0].name);
    expect(response).toHaveTextContent(data.results[0].name);
  });
});

describe('CardList', () => {
  it('should render correct count', () => {
    render(
      <Provider store={store}>
        <CardList data={data} setData={() => {}} selectedType={null} />
      </Provider>,
    );
    const cards = screen.getAllByRole('card');
    expect(cards).toHaveLength(data.count);
  });
});

describe('CardList', () => {
  it('should render Not found', () => {
    data.count = 0;
    render(
      <Provider store={store}>
        <CardList data={data} setData={() => {}} selectedType={null} />
      </Provider>,
    );
    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
