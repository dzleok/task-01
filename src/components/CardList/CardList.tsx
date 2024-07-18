import { useState } from 'react';
import { ResultsProps, StarWarsCharacter } from '../../types/types';
import './CardList.css';
import { CardDetails } from '../CardDetails/CardDetails';
import { Card } from '../Card/Card';

export default function CardList({ data }: ResultsProps): JSX.Element {
  const [isShowCardDetails, setIsShowCardDetails] = useState<boolean>(false);
  const [character, setCharacter] = useState<StarWarsCharacter>();
  console.log(data);
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
        {data.detail === 'Not found' ||
          (data.count === 0 && <h3>Not found</h3>)}
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
