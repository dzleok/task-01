import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import './App.css';

import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThrowError } from './components/throwError';
import { ErrorPage } from './components/ErrorPage';

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
      <BrowserRouter>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Search
            setIsLoading={setIsLoading}
            setData={setData}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <ThrowError />
          {isLoading && <Loader />}
          <Routes>
            {data && !isLoading && (
              <Route
                path="search/:ID"
                element={
                  <CardList
                    data={data}
                    selectedType={selectedType}
                    setData={setData}
                  />
                }
              />
            )}
            {!isLoading && <Route path="*" element={<ErrorPage />} />}
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
