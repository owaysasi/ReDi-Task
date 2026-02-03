import styles from "./SearchField.module.css";

const SearchField = ({searchText, setSearchText}) => {

  const onChangeSearchText = (e) => {
    e.preventDefault()
    setSearchText(e.target.value);
  }
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text" 
        onChange={onChangeSearchText}
        value={searchText}   
      />
    </div>
  );
};

export default SearchField;
