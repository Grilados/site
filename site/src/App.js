import React, {Component} from 'react';
import Header from './components/Header';

const MENUS = [
  'Início',
  'Vídeos',
  'Contos e Crônicas',
  'Dicas',
  'Inspiração'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header active={0} menu={MENUS}/>
        </div>
      </div>
    );
  }
}

export default App;
