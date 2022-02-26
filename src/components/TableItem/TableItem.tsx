import TableGridItems from '../TableGridItems/TableGridItems';

import { ItemsEntity1 } from '../../interfaces/IRandomData';
interface IProps {
  items: ItemsEntity1[] | null | undefined;
  title: string;
}

const TableItem: React.FC<IProps> = (props) => {
  const { items, title } = props;

  return (
    <div className='table-item'>
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
  );
};

export default TableItem;
