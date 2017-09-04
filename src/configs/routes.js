import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Páginas
import InicioScreen from '../screens/InicioScreen';

export default class Routers extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" component={InicioScreen}/>
                </div>
            </BrowserRouter>
        )
    }
}
