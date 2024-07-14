import { useState } from 'react';
import {
  ResultsProps,
  StarWarsCharacter,
  StarWarsRequest,
} from '../../types/types';
import './CardList.css';
import { fetchSearchData } from '../../services/apiStarWars';
// import { Link } from 'react-router-dom';

export default function CardList({
  data,
  setData,
  // selectedType,
}: ResultsProps): JSX.Element {
  const { next, previous }: StarWarsRequest = data;

  const [isShowCardDetails, setIsShowCardDetails] = useState<boolean>(false);
  const [character, setCharacter] = useState<StarWarsCharacter>();

  function showCardDetails(newCharacter: StarWarsCharacter) {
    if (newCharacter === character) {
      setIsShowCardDetails(false);
      return;
    }

    setIsShowCardDetails(true);
    setCharacter(newCharacter);
  }

  function handleCloseDetails() {
    setIsShowCardDetails(false);
  }

  async function handleNext(next: number) {
    data = await fetchSearchData('people', 'a', next);
    setData(data);
  }

  async function handlePrevious(previous: number) {
    data = await fetchSearchData('people', 'a', previous);
    setData(data);
  }

  return (
    <div className="card-list">
      <div className="card-items">
        {previous && (
          <button
            onClick={() => {
              handlePrevious(Number(previous?.slice(-1)));
            }}
          >
            {' '}
            &larr;{' '}
          </button>
        )}
        {next && (
          <button
            onClick={() => {
              handleNext(Number(next?.slice(-1)));
            }}
          >
            &rarr;
          </button>
        )}
        {data.results?.map((el, i) => (
          <Card key={i} character={el} showCardDetails={showCardDetails} />
        ))}
      </div>
      {isShowCardDetails && (
        <CardDetails
          character={character}
          onCloseDetails={handleCloseDetails}
        />
      )}
    </div>
  );
}

function CardDetails({
  character,
  onCloseDetails,
}: {
  character: StarWarsCharacter | undefined;
  onCloseDetails: () => void;
}): JSX.Element {
  return (
    <div className="card-details">
      <button className="btn-close" onClick={onCloseDetails}>
        X
      </button>
      <h2>{character?.name}</h2>
      <span>height: {character?.height}cm</span>
      <span>&nbsp;</span>
      <span>mass: {character?.mass} kg</span>
      <p>hair color: {character?.hair_color}</p>
      <p>skin color: {character?.hair_color}</p>
      <p>eye color: {character?.skin_color}</p>
      <p>birth year: {character?.birth_year} </p>
      <p>gender: {character?.gender}</p>
      <p>homeworld: Earth</p>
    </div>
  );
}

function Card({
  character,
  showCardDetails,
}: {
  character: StarWarsCharacter;
  showCardDetails: (n: StarWarsCharacter) => void;
}): JSX.Element {
  return (
    <div className="card" onClick={() => showCardDetails(character)}>
      {character.name}
    </div>
  );
}
