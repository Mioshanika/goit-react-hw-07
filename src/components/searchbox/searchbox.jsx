import s from './searchbox.module.css';
import { changeFilter, selectFilter } from '../../redux/filtersslice';
import { useSelector, useDispatch } from 'react-redux';

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.search_box}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
