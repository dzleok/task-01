// FIX:
// import image from './img.png' // `image` will be '/assets/img.2d8efhg.png' in production

// export default function App() {
//   return <img src={image} />
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThrowError } from './components/throwError';
import { ErrorPage } from './components/ErrorPage';
import { Box } from './components/Box';
import ButtonTheme from './components/ButtonTheme/ButtonTheme';

export default function App(): JSX.Element {
  return (
    <section>
      <ButtonTheme />
      <BrowserRouter>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Search />
          <ThrowError />
          <Routes>
            <Route path="search/:id" element={<Box />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </section>
  );
}
