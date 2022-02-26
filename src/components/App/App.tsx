import './App.scss';
import { IRandomData } from '../../interfaces/IRandomData';
import { randomData } from '../../utils/randomData';

function App() {
  const data: IRandomData[] = randomData();
  console.log(data[0].items[0].items[0].dateStart);
  return <div className='App'></div>;
}

export default App;
