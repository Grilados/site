import React, {Component} from 'react';
import './css/Cards.css';

export class CardNoticias extends Component {
    render() {
        return(
            <div className="card">
                <img className="card-img" src={require("../imgs/noticias/noticia-1.png")} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-type">Dicas</p>
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a  className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}