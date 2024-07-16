import { useEffect, useState } from 'react';
import './Box.css';

import { StarWarsRequest } from '../types/types';
import CardList from './CardList/CardList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchSearchData } from '../services/apiStarWars';

export function Box(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<StarWarsRequest>();

  const { id } = useParams();
  const [page, setPage] = useState<number>(Number(id));
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const selectedType = searchParams.get('s');

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedData = await fetchSearchData('people', query ?? '', page);
      setData(fetchedData);
      setIsLoading(false);
    }
    fetchData();
  }, [id, query, selectedType]);

  async function handleNext() {
    if ((data?.count ?? 0) / 10 < page) return;
    const currentPage = page + 1;
    setPage(currentPage);
    navigate(`/search/${currentPage}?q=${query}&s=${selectedType}`, {
      replace: true,
    });
  }

  async function handlePrevious() {
    if (page <= 1) return;
    const currentPage = page - 1;
    setPage(currentPage);
    navigate(`/search/${currentPage}?q=${query}&s=${selectedType}`, {
      replace: true,
    });
  }

  function Loader() {
    return <p>Loading...</p>;
  }
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <div>
            {data?.previous && (
              <button
                onClick={() => {
                  handlePrevious();
                }}
              >
                {' '}
                &larr;{' '}
              </button>
            )}
            {data?.next && (
              <button
                onClick={() => {
                  handleNext();
                }}
              >
                &rarr;
              </button>
            )}
          </div>
          {data && (
            <CardList
              data={data}
              selectedType={selectedType}
              setData={setData}
            />
          )}
        </div>
      )}
    </>
  );
}
