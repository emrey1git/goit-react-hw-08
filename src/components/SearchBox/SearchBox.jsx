import { useDispatch } from 'react-redux';
import { setFilter } from "../../redux/filters/slice";
  // Bu da varsa
import css from './SearchBox.module.css';

export default function SearchBox({ filter, onChange }) {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    } else {
      dispatch(setFilter(e.target.value));
    }
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Search contacts
      </label>
      <input
        id="search"
        className={css.input}
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Type a name..."
        aria-label="Search contacts"
      />
    </div>
  );
}
