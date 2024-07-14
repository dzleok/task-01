import { useState } from 'react';
import './App.css';

import Search from './components/Search/Search';
import CardList from './components/Results/CardList';
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
          <CardList data={data} selectedType={selectedType} />
        )}
        <ThrowError />
      </ErrorBoundary>
    </>
  );
}
