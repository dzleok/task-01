import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import selectedReducer from '../features/selectedSlice';
import Footer from '../components/Footer/Footer';
import '@testing-library/jest-dom/vitest';
// import { StarWarsCharacter } from '../types/types';
// import { RootState } from '../app/store';

// const createStoreWithState = configureStore({
//     reducer: {
//         selected: selectedReducer,
//   },
// });

// const store = createStoreWithState({
//   selected: {
//     selected: [],
//   },
// });
describe('Footer Component', () => {
  const initialState = { selected: { selected: [] } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should not render the footer when no items are selected', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    expect(screen.queryByText(/items are selected/)).not.toBeInTheDocument();
  });

  it('should render the correct number of selected items', () => {
    const store = mockStore({
      selected: {
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
      },
    });

    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    expect(screen.getByText('1 items are selected')).toBeInTheDocument();
  });
});

//   it('should dispatch unselectAll action when button is clicked', () => {
//     const store = createStoreWithState({
//       selected: {
//         selected: [
//           {
//             name: 'Luke Skywalker',
//             height: '172',
//             mass: '77',
//             hair_color: 'blond',
//             skin_color: 'fair',
//             eye_color: 'blue',
//             birth_year: '19BBY',
//             gender: 'male',
//             homeworld: 'https://swapi.dev/api/planets/1/',
//             films: [
//               'https://swapi.dev/api/films/1/',
//               'https://swapi.dev/api/films/2/',
//               'https://swapi.dev/api/films/3/',
//               'https://swapi.dev/api/films/6/',
//             ],
//             species: [],
//             vehicles: [
//               'https://swapi.dev/api/vehicles/14/',
//               'https://swapi.dev/api/vehicles/30/',
//             ],
//             starships: [
//               'https://swapi.dev/api/starships/12/',
//               'https://swapi.dev/api/starships/22/',
//             ],
//             created: '2014-12-09T13:50:51.644000Z',
//             edited: '2014-12-20T21:17:56.891000Z',
//             url: 'https://swapi.dev/api/people/1/',
//           },
//         ],
//       },
//     });

//     render(
//       <Provider store={store}>
//         <Footer />
//       </Provider>,
//     );

//     const buttonElement = screen.getByText('Unselect all');
//     fireEvent.click(buttonElement);

//     expect(store.getState().selected.selected).toHaveLength(0);
//   });
