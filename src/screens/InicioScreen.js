import React, { Component } from 'react';
import Header from '../components/Header';
import { MenuSimples } from '../components/Menus';
import { CardNoticias } from '../components/Cards';
import { Alert } from '../components/Alert';
import './css/InicioScreen.css';

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
                    <Header active={0} menu={MENU_HEADER} />
                </div>
                <div className="container">
                    <div className="col-md-12">
                        <MenuSimples menu={MENU_HOME} />
                    </div>

                    <div className="col-md-8">
                        <Alert title="Nada foi encontrado" body="Nenhum conteúdo foi encontrado, tente realizar uma nova busca usando outras palavras do mesmo assunto."/>
                    
                        <h2 className="text-center"> @destaques </h2>
                    
                    </div>

                    <div className="col-md-8">
                         <CardNoticias autor={true} />
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-center"> @grilados </h4>
                    </div>
                </div> {/*Fim container*/}
            </div>
        )
    }
}