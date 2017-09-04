import React, {Component} from 'react';
import Header from '../components/Header';
import {MenuSimples} from '../components/Menus';

const MENU_HEADER = [
  'Início',
  'Vídeos',
  'Contos e Crônicas',
  'Dicas',
  'Inspiração'
];

const MENU_HOME = [
    'Decoração',
    'Beleza',
    'Educação',
    'Esporte',
    'Mundo',
    'Música'
];

export default class InicioScreen extends Component {
    render() {
        return(
            <div>
                <div>
                    <Header active={0} menu={MENU_HEADER}/>
                </div>
                <div className="container">
                    <MenuSimples menu={MENU_HOME}/>
                </div> {/*Fim container*/}
            </div>
        )
    }
}