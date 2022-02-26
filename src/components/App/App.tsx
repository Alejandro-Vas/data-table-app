import './App.scss';
import { IRandomData } from '../../interfaces/IRandomData';
import { randomData } from '../../utils/randomData';
import TableRootItem from '../TableRootItem/TableRootItem';

function App() {
  const data: IRandomData[] = randomData();

  return (
    <div className='App'>
      {data.map((el) => (
        <div key={el.title}>
          <TableRootItem items={el.items} title={el.title} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
