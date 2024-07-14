import { ReactNode } from 'react';

export type ResultsProps = {
  data: StarWarsRequest;
  setData: (n: StarWarsRequest) => void;
  selectedType: string | null;
};

export type StarWarsRequest = {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[];
  // selectedType: string | null;
  // character: StarWarsCharacter;
};

export type StarWarsCharacter = {
  name: string | null;
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
  // planet
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  // films
  characters: string[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  title: string;
  // species
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  language: string;
  people: string[];
  skin_colors: string;
  // vehicle
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
  // starships
  MGLT: string;
  hyperdrive_rating: string;
  starship_class: string;
};

export type SearchProps = {
  setIsLoading: (n: boolean) => void;
  setData: (n: StarWarsRequest) => void;
  selectedType: string;
  setSelectedType: (n: string) => void;
  // page: number;
  // setPage: (n: number) => void;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type ErrorBoundaryProps = {
  children?: ReactNode;
  fallback?: ReactNode;
};
