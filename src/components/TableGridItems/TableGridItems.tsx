import { ItemsEntity1 } from '../../interfaces/IRandomData';
import TableBox from '../TableBox/TableBox';

const TableGridItems: React.FC<ItemsEntity1> = (props) => {
  const { data, dateStart, dateEnd, title, subTitle } = props;
  console.log(data);
  return (
    <div className='table-grid-item'>
      <div>title: {title}</div>
      <div>subtitle: {subTitle}</div>
      <div>dateStart: {dateStart}</div>
      <div>dateEnd: {dateEnd}</div>
      <TableBox data={data} />
      <hr />
    </div>
  );
};
export default TableGridItems;
