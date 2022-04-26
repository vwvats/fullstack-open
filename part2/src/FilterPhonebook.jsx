const FilterPhoneBook = ({ value, onQuery }) => {
  return (
    <div>
      Filter By Name
      <br />
      <input onChange={onQuery} value={value} />
    </div>
  );
};

export default FilterPhoneBook;
