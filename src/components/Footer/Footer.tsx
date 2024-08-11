import { useDispatch, useSelector } from 'react-redux';
import { unselectAll } from '../../features/selectedSlice';
import { RootState } from '../../app/store';
import './Footer.css';
import { StarWarsCharacter } from '../../types/types';

export default function Footer() {
  const dispatch = useDispatch();

  const selectSelectedCharacters = (state: RootState) =>
    state.selected.selected;
  const selectedCharacters = useSelector(selectSelectedCharacters);

  const downloadCSV = () => {
    if (selectedCharacters.length === 0) return;

    const headers = [
      'Name',
      'Height',
      'Mass',
      'Hair Color',
      'Skin Color',
      'Eye Color',
      'Birth Year',
      'Gender',
      'Homeworld',
    ];
    const csvRows = [
      headers.join(','),
      ...selectedCharacters.map((character: StarWarsCharacter) =>
        [
          character.name,
          character.height,
          character.mass,
          character.hair_color,
          character.skin_color,
          character.eye_color,
          character.birth_year,
          character.gender,
          character.homeworld,
        ].join(','),
      ),
    ];

    const csvContent = `data:text/csv;charset=utf-8,${csvRows.join('\n')}`;

    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute(
      'download',
      `${selectedCharacters.length} selected_character.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {selectedCharacters.length > 0 && (
        <div className="footer">
          {selectedCharacters.length} items are selected
          <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
          <button onClick={() => downloadCSV()}>Download</button>
        </div>
      )}
    </>
  );
}
