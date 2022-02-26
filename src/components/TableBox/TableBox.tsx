import { DataEntity } from '../../interfaces/IRandomData';

interface IProps {
  data: DataEntity[] | null | undefined;
}

const TableBox: React.FC<IProps> = (props) => {
  const { data } = props;
  return (
    <div className='table'>
      <table>
        <tbody>
          <tr>
            <th className='table__id table'>#</th>
            <th className='table__title table'>Title</th>
            <th className='table__number table '>Number</th>
          </tr>
          {data?.map((el, i) => (
            <tr key={el.title}>
              <td className='table__id'>{i + 1}</td>
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
