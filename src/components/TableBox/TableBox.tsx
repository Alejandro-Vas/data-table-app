import { DataEntity } from '../../interfaces/IRandomData';

interface IProps {
  data: DataEntity[] | null | undefined;
}

const TableBox: React.FC<IProps> = (props) => {
  const { data } = props;
  return (
    <>
      <table>
        <th>#</th>
        <th>Title</th>
        <th>Number</th>
        {data?.map((el, i) => (
          <>
            <tr>
              <td>{i + 1}</td>
              <td>{el.title}</td>
              <td>{el.number} </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
};
export default TableBox;
