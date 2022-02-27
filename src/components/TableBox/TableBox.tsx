import { DataEntity } from '../../interfaces/IRandomData';
import { useSortableData } from '../../hooks/useSortableData';

interface IProps {
  data: DataEntity[] | null | undefined;
}

const TableBox: React.FC<IProps> = (props) => {
  const { data } = props;

  const numberedData = data?.map((el, i) => {
    return {
      id: i + 1,
      ...el,
    };
  });

  const { items, requestSort, sortConfig } = useSortableData(numberedData);
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className='table'>
      <table>
        <tbody>
          <tr>
            <th className='table__id table'>
              <button
                type='button'
                onClick={() => requestSort('id')}
                className={getClassNamesFor('id')}
              >
                #
              </button>
            </th>
            <th className='table__title table'>
              <button
                type='button'
                onClick={() => requestSort('title')}
                className={getClassNamesFor('title')}
              >
                Title
              </button>
            </th>
            <th className='table__number table '>
              <button
                type='button'
                onClick={() => requestSort('number')}
                className={getClassNamesFor('number')}
              >
                Number
              </button>
            </th>
          </tr>
          {items?.map((el, i) => (
            <tr key={el.title}>
              <td className='table__id'>{el.id}</td>
              <td className='table__title'>{el.title}</td>
              <td className='table__number'>{el.number} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableBox;
