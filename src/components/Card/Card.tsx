import { StarWarsCharacter } from '../../types/types';

export function Card({
  character,
  showCardDetails,
}: {
  character: StarWarsCharacter;
  showCardDetails: (n: StarWarsCharacter) => void;
}): JSX.Element {
  return (
    <div
      className="card"
      role="card"
      onClick={() => showCardDetails(character)}
    >
      <input type="checkbox"></input>
      {character.name}
    </div>
  );
}
