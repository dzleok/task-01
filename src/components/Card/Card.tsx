import { ChangeEvent } from 'react';
import { StarWarsCharacter } from '../../types/types';

import { useDispatch, useSelector } from 'react-redux';
import { addSelected, removeSelected } from '../../features/selectedSlice';
import { RootState } from '../../app/store';

export function Card({
  character,
  showCardDetails,
}: {
  character: StarWarsCharacter;
  showCardDetails: (n: StarWarsCharacter) => void;
}): JSX.Element {
  const isCharacterSelected = (state: RootState, name: string) =>
    state.selected.selected.some((character) => character.name === name);

  const isChecked = useSelector((state: RootState) =>
    isCharacterSelected(state, character.name),
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      handleChecked();
    } else {
      handleUnchecked();
    }
  };

  const handleChecked = () => {
    dispatch(addSelected(character));
  };

  const handleUnchecked = () => {
    dispatch(removeSelected(character));
  };

  const dispatch = useDispatch();

  return (
    <div
      className="card"
      role="card"
      onClick={() => showCardDetails(character)}
    >
      <input type="checkbox" checked={isChecked} onChange={handleChange} />

      {character.name}
    </div>
  );
}
