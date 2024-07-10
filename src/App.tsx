//TODO: refactoring needed

import { Component, ReactNode } from 'react';
import './App.css';

interface AppState {
  selectedType: string;
  searchValue: string;
  data: StarWarsRequest | undefined;
}

export default class App extends Component<AppState> {
  storedValue: string | null = localStorage.getItem('data');
  localStorageData = this.storedValue
    ? JSON.parse(this.storedValue)
    : undefined;

  state: AppState = {
    selectedType: this.storedValue
      ? this.localStorageData.selectedType
      : 'people',
    searchValue: this.localStorageData?.searchValue,
    data: this.localStorageData,
  };

  setSelectedType = (newType: string) => {
    this.setState({ selectedType: newType });
  };

  setSearchValue = (newValue: string) => {
    this.setState({ searchValue: newValue });
  };

  setData = (newData: Partial<AppState['data']>) => {
    this.setState((prevState) => ({
      data: { ...prevState, ...newData },
    }));
  };

  handleSearch = async () => {
    const { searchValue, selectedType } = this.state;

    const res = await fetch(
      `https://swapi.dev/api/${selectedType}/?search=${searchValue}`,
    );
    const newData = await res.json();

    this.setData(newData);
  };

  render() {
    const { selectedType, searchValue, data } = this.state;

    return (
      <>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Search
            selectedType={selectedType}
            setSelectedType={this.setSelectedType}
            searchValue={searchValue}
            setSearchValue={this.setSearchValue}
            setData={this.setData}
            onSearch={this.handleSearch}
          />
          {data && <Results data={data} />}
          <ThrowError />
        </ErrorBoundary>
      </>
    );
  }
}

interface SearchProps {
  selectedType: string;
  searchValue: string;

  setSelectedType: (newType: string) => void;
  setSearchValue: (newValue: string) => void;
  onSearch: (searchValue: string, selectedType: string) => void;
  setData: (newData: Partial<{ [key: string]: string }>) => void;
}

class Search extends Component<SearchProps> {
  render() {
    const {
      selectedType,
      searchValue,
      setSelectedType,
      setSearchValue,
      onSearch,
    } = this.props;

    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search ..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="films">films</option>
          <option value="species">species</option>
          <option value="vehicles">vehicles</option>
          <option value="starships">starships</option>
        </select>
        <button onClick={() => onSearch(searchValue, selectedType)}>
          Search
        </button>
      </div>
    );
  }
}

interface StarWarsRequest {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[] | null;
  selectedType: string | null;
}

interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  //planets
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  //films
  characters: string[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  title: string;
  //spices
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  language: string;
  people: string[];
  skin_colors: string;
  //vehicle
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  passengers: string;
  pilots: string[];
  vehicle_class: string;
  //starships
  MGLT: string;
  hyperdrive_rating: string;
  starship_class: string;
}

interface ResultsProps {
  data: StarWarsRequest;
}

class Results extends Component<ResultsProps> {
  render() {
    const { data } = this.props;
    localStorage.setItem('data', JSON.stringify(data));
    return (
      <>
        <ul>
          {data.selectedType === 'people' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.name} has height {el.height}cm, mass {el.mass} kg and{' '}
                {el.hair_color} hair
              </li>
            ))}
          {data.selectedType === 'planets' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.name} has diameter {el.diameter}km, population{' '}
                {el.population} people and {el.terrain}
              </li>
            ))}
          {data.selectedType === 'films' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.title} was produced by {el.producer}, director {el.director}{' '}
                and released {el.release_date}
              </li>
            ))}
          {data.selectedType === 'species' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.name} is {el.designation}, average height{' '}
                {el.average_height}cm and language {el.language}
              </li>
            ))}
          {data.selectedType === 'vehicles' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.name} is {el.length}m, has crew {el.crew} person and cost{' '}
                {el.cost_in_credits} credits
              </li>
            ))}
          {data.selectedType === 'starships' &&
            data.results?.map((el, i) => (
              <li key={i}>
                {el.name} is {el.length}m, has crew {el.crew} person and cost{' '}
                {el.cost_in_credits} credits
              </li>
            ))}
        </ul>
      </>
    );
  }
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('An error occurred:', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
interface ThrowErrorState {
  hasError: boolean;
}

interface ThrowErrorProps {
  children?: ReactNode;
}

class ThrowError extends Component<ThrowErrorProps, ThrowErrorState> {
  constructor(props: ThrowErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  triggerError = () => {
    this.setState({ hasError: true });
  };

  componentDidUpdate(prevProps: ThrowErrorProps, prevState: ThrowErrorState) {
    if (this.state.hasError && !prevState.hasError) {
      throw new Error('INDEED Everything went wrong.  RELOAD the page!');
    }
  }

  render() {
    return (
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          marginLeft: '100px',
        }}
        onClick={this.triggerError}
      >
        Throw error
      </button>
    );
  }
}
