import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import { randomData } from './utils/randomData';
import { IRandomData } from './interfaces/IRandomData';

const data: IRandomData[] = randomData();
console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root'),
);
