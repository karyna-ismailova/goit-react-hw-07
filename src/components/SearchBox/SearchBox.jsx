import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const handleChangeQuery = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.formWrapper}>
      <span>Find contacts by name</span>

      <input
        className={s.input}
        value={filter}
        onChange={handleChangeQuery}
        type="text"
      />
    </div>
  );
};
export default SearchBox;
