import { fetchSearchData } from '../../services/apiStarWars';
import { SearchProps } from '../../types/types';

import './Search.css';
import { useQuery } from '../../hooks/useQuery';
import { useEffect } from 'react';
export default function Search({
  setIsLoading,
  setData,
  selectedType,
  setSelectedType,
}: SearchProps): JSX.Element {
  const { query, setQuery } = useQuery();
  const page: number = 1;

  async function handleSearch() {
    setIsLoading(true);
    const data = await fetchSearchData(selectedType, query, page);
    setData(data);
    setIsLoading(false);
  }

  useEffect(function () {
    handleSearch();
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="people">people</option>
        <option value="planets" disabled>
          planets
        </option>
        <option value="films" disabled>
          films
        </option>
        <option value="species" disabled>
          species
        </option>
        <option value="vehicles" disabled>
          vehicles
        </option>
        <option value="starships" disabled>
          starships
        </option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
