import { SearchProps } from '../types/types';

export default function Search({
  query,
  setQuery,
  selectedType,
  setSelectedType,
  onSearch,
}: SearchProps): JSX.Element {
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
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
