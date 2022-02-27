import TableItem from '../TableItem/TableItem';
import { IRandomData } from '../../interfaces/IRandomData';
import { useState } from 'react';

const TableRootItem: React.FC<IRandomData> = (props) => {
  const { title, items } = props;
  const [show, setShow] = useState(false);
  console.log(items);

  const handleShowToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className='table-root-item-wrapper'>
        <div className='table-root-title' onClick={handleShowToggle}>
          {title}
        </div>
        <div
          className={show ? `table-root-item` : `table-root-item display-none`}
        >
          {items?.map((el) => (
            <TableItem items={el.items} title={el.title} key={el.title} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TableRootItem;
