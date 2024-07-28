import './Search.css';
import { useQuery } from '../../hooks/useQuery';

import { useNavigate } from 'react-router-dom';
import { useSelectedType } from '../../hooks/useSelectedType';
import { useEffect } from 'react';

export default function Search(): JSX.Element {
  const { query, setQuery } = useQuery();
  const navigate = useNavigate();
  const { selectedType, setSelectedType } = useSelectedType();

  async function handleSearch() {
    navigate(`/search/1?q=${query}&s=${selectedType}`, { replace: true });
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
