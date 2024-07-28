import { StarWarsRequest } from '../types/types';
export async function fetchSearchData(
  selectedType: string,
  query: string,
  page: number,
): Promise<StarWarsRequest> {
  const res = await fetch(
    `https://swapi.dev/api/${selectedType}/?search=${query}&page=${page}`,
  );

  return await res.json();
}
