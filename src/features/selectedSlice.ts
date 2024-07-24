import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarWarsCharacter } from '../types/types';

const initialState: {
  selected: StarWarsCharacter[];
} = {
  selected: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/30/',
      ],
      starships: [
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    },
  ],
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    addSelected(state, action: PayloadAction<StarWarsCharacter>) {
      state.selected.push(action.payload);
    },
    removeSelected(state, action: PayloadAction<StarWarsCharacter>) {
      state.selected = state.selected.filter(
        (character) => character.name !== action.payload.name,
      );
    },
    unselectAll(state) {
      state.selected = [];
    },
  },
});

export const { addSelected, removeSelected, unselectAll } =
  selectedSlice.actions;
export default selectedSlice.reducer;
