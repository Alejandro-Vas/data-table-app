import TableGridItems from '../TableGridItems/TableGridItems';

import { ItemsEntity1 } from '../../interfaces/IRandomData';
import { useState } from 'react';
interface IProps {
  items: ItemsEntity1[] | null | undefined;
  title: string;
}

const TableItem: React.FC<IProps> = (props) => {
  const { items, title } = props;
  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  return (
    <div className='table-item-wrapper'>
      <div className='table-title-wrapper'>
        <div className='table-title' onClick={handleShowToggle}>
          {title}
        </div>
        <div
          className={
            show ? `table-title-line` : `table-title-line display-none`
          }
        ></div>
      </div>

      <div className={show ? `table-item` : `table-item display-none`}>
        {items?.map((el) => (
          <TableGridItems
            title={el.title}
            subTitle={el.subTitle}
            dateStart={el.dateStart}
            dateEnd={el.dateEnd}
            data={el.data}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TableItem;
