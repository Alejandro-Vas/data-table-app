import TableItem from '../TableItem/TableItem';
import { IRandomData } from '../../interfaces/IRandomData';

const TableRootItem: React.FC<IRandomData> = (props) => {
  const { title, items } = props;

  return (
    <>
      <div>
        <h1>{title}</h1>
        {items?.map((el) => (
          <TableItem items={el.items} title={el.title} key={el.title} />
        ))}
      </div>
    </>
  );
};
export default TableRootItem;
