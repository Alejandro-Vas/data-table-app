import { useState } from 'react';
import { IRandomData } from '../../interfaces/IRandomData';

import SearchField from '../SearchField/SearchField';
import TableRootItem from '../TableRootItem/TableRootItem';

interface IProps {
  data: IRandomData[];
}

const App: React.FC<IProps> = (props) => {
  const { data } = props;
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data?.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase().trim()),
  );

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className='app'>
        <div className='app-container'>
          <div className='container'>
            {filteredData.map((el) => (
              <div key={el.title}>
                <TableRootItem items={el.items} title={el.title} />
              </div>
            ))}
          </div>
          <div className='search-field'>
            <SearchField
              handleSearchValueChange={handleSearchValueChange}
              searchValue={searchValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
