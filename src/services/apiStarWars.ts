import { StarWarsRequest } from '../types/types';
export async function fetchSearchData(
  selectedType: string,
  query: string,
): Promise<StarWarsRequest> {
  const res = await fetch(
    `https://swapi.dev/api/${selectedType}/?search=${query}`,
  );
  return await res.json();
}
