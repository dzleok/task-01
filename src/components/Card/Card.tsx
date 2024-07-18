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
      {character.name}
    </div>
  );
}
