import { StarWarsCharacter } from '../../types/types';

export function CardDetails({
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
