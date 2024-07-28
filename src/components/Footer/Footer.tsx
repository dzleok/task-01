import { useDispatch, useSelector } from 'react-redux';
import { unselectAll } from '../../features/selectedSlice';
import { RootState } from '../../app/store';
import './Footer.css';

export default function Footer() {
  const dispatch = useDispatch();

  const selectSelectedCharacters = (state: RootState) =>
    state.selected.selected;
  const selectedCharacters = useSelector(selectSelectedCharacters);

  return (
    <>
      {selectedCharacters.length > 0 && (
        <div className="footer">
          {selectedCharacters.length} items are selected
          <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
          <button onClick={() => alert('DOESNT WORK')}>Download</button>
        </div>
      )}
    </>
  );
}
