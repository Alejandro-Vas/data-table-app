interface IProps {
  searchValue: string;
  handleSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<IProps> = (props) => {
  const { handleSearchValueChange, searchValue } = props;
  return (
    <>
      <input
        type='search'
        value={searchValue}
        onChange={handleSearchValueChange}
      />
    </>
  );
};
export default SearchField;
