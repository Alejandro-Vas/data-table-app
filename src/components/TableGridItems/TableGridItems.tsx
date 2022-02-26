import { useState } from 'react';
import { ItemsEntity1 } from '../../interfaces/IRandomData';
import TableBox from '../TableBox/TableBox';

const TableGridItems: React.FC<ItemsEntity1> = (props) => {
  const [show, setShow] = useState(true);
  const { data, dateStart, dateEnd, title, subTitle } = props;

  const handleShowToggle = () => {
    setShow(!show);
  };
  console.log(data);
  return (
    <div className='table-grid-item'>
      <div onClick={handleShowToggle} className='table-wrapper'>
        <div className='table-wrapper__item'>
          <div>{title}</div>
          <div> {subTitle}</div>
        </div>
        <div className='table-wrapper__item'>
          <div>
            {dateStart} - {dateEnd}
          </div>
        </div>
      </div>
      {show && <TableBox data={data} />}
    </div>
  );
};
export default TableGridItems;
