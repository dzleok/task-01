import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Search from './components/Search/Search';

import { ErrorBoundary } from './components/ErrorBoundary';
import { ThrowError } from './components/throwError';
import { ErrorPage } from './components/ErrorPage';
import { Box } from './components/Box';

export default function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Search />
          <ThrowError />

          <Routes>
            <Route path="search/:id" element={<Box />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}
