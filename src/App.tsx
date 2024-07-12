import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThrowError } from './components/throwError';

import { StarWarsRequest } from './types/types';
import { useSelectedType } from './hooks/useSelectedType';

export default function App(): JSX.Element {
  const { selectedType, setSelectedType } = useSelectedType();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<StarWarsRequest>();

  function Loader() {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Search
          setIsLoading={setIsLoading}
          setData={setData}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        {isLoading && <Loader />}
        {data && !isLoading && (
          <Results data={data} selectedType={selectedType} />
        )}
        <ThrowError />
      </ErrorBoundary>
    </>
  );
}

// TOFIX:
// useEffect(
//   function () {
//     const controller = new AbortController();

//     async function handleSearch() {
//       try {
//         setIsLoadind(true);
//         setError('');
//         const res = await fetch(
//           `https://swapi.dev/api/${selectedType}/?search=${query}
//       `,
//           { signal: controller.signal },
//         );

//         if (!res.ok) throw new Error('Smth wrong fetching');

//         const data = await res.json();
//         if (data.Response === 'False') throw new Error('Not found');

//         setData(data.Search);
//         setError('');
//         // console.log(data.Search);
//       } catch (err) {
//         console.error(err.message);
//         if (err.name !== 'AbortError') {
//           setError(err.message);
//         }
//       } finally {
//         setIsLoadind(false);
//       }
//     }

//     // if (query.length < 3) {
//     //   setMovies([]);
//     //   setError("");
//     //  return;
//     // }
//     //   handleCloseMovie();
//     handleSearch();

//     return function () {
//       controller.abort();
//     };
//   },
//   [query],

// const [error, setError] = useState<string>('');

// const storedValue = localStorage.getItem('data');
// const localStorageData = storedValue ? JSON.parse(storedValue) : undefined;

// const [selectedType, setSelectedType] = useState<string>(
//   localStorageData?.selectedType || 'people',
// );

// const [searchValue, setSearchValue] = useState<string>(
//   localStorageData?.searchValue || '',
// );
// );
