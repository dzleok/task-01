import { useEffect, useState } from 'react';
import { StarWarsCharacter } from '../../types/types';

export default function CardDetails({
  character,
  onCloseDetails,
}: {
  character: StarWarsCharacter | undefined;
  onCloseDetails: () => void;
}): JSX.Element {
  const [isLoadingDetails, setIsLoadindDetails] = useState<boolean>(false);
  const [homeWorldFetched, sethomeWorldFetched] = useState<string>('');

  useEffect(
    function () {
      async function getDetails() {
        if (character === undefined) return;
        setIsLoadindDetails(true);

        const res = await fetch(character.homeworld);
        const data = await res.json();
        sethomeWorldFetched(data.name);
        setIsLoadindDetails(false);
      }
      getDetails();
    },
    [character],
  );

  return (
    <div className="card-details">
      {isLoadingDetails && <div>Loading...</div>}
      {!isLoadingDetails && (
        <div>
          <button className="btn-close" onClick={onCloseDetails}>
            X
          </button>
          <h2>{character?.name}</h2>
          <span>height: {character?.height}cm</span>
          <span>&nbsp;</span>
          <span>mass: {character?.mass} kg</span>
          <p>hair color: {character?.hair_color}</p>
          <p>skin color: {character?.hair_color}</p>
          <p>eye color: {character?.eye_color}</p>
          <p>birth year: {character?.birth_year} </p>
          <p>gender: {character?.gender}</p>
          <p>homeworld: {homeWorldFetched}</p>
        </div>
      )}
    </div>
  );
}
