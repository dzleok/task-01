import { useState } from 'react';
import { ResultsProps, StarWarsCharacter } from '../../types/types';
import './CardList.css';

export default function CardList({ data }: ResultsProps): JSX.Element {
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

  return (
    <div className="card-list">
      <div className="card-items">
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
