import { useState } from 'react';
interface IProps {
  searchValue: string;
  handleSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<IProps> = (props) => {
  const { handleSearchValueChange, searchValue } = props;
  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <form action=''>
        <input
          placeholder='search...'
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <i className='fa fa-search' onClick={handleShowToggle} />
      </form>
    </>
  );
};
export default SearchField;
