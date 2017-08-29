import React, {Component} from 'react';
import Header from '../components/Header';

const MENUS = [
  'Início',
  'Vídeos',
  'Contos e Crônicas',
  'Dicas',
  'Inspiração'
];

export default class InicioScreen extends Component {
    render() {
        return(
            <div>
                <Header active={0} menu={MENUS}/>
            </div>
        )
    }
}