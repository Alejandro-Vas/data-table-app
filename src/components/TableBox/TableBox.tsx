import { DataEntity } from '../../interfaces/IRandomData';

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

  return (
    <div className='table'>
      <table>
        <tbody>
          <tr>
            <th className='table__id table'>#</th>
            <th className='table__title table'>Title</th>
            <th className='table__number table '>Number</th>
          </tr>
          {numberedData?.map((el, i) => (
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
