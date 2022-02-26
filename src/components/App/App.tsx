import { IRandomData } from '../../interfaces/IRandomData';
import { randomData } from '../../utils/randomData';
import TableRootItem from '../TableRootItem/TableRootItem';

function App() {
  const data: IRandomData[] = randomData();
  console.log('DATA', data);
  console.log('DATA', data);

  return (
    <div className='App'>
      <div className='container'>
        {data.map((el) => (
          <div key={el.title}>
            <TableRootItem items={el.items} title={el.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
