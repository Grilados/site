import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';
import {Navbar, Button} from 'react-bootstrap';

export default class Header extends Component {

    renderLogo() {
        return(
            <div className="logo">
                <img 
                    src={require("../imgs/icones/logo-grilados.png")} 
                    width="130" 
                    alt="Início"
                />
            </div>
        )
    }

    renderMenu() {
        if (!this.props.menu) return console.error('Os itens não foram encontrados!');
        return(
            <div>
            {
                this.props.menu.map((item, index)=>
                    <div key={index} className={
                        `menu ${this.props.active === index ? 'menu-active' : ''}`
                    }>
                        <a>{item}</a>
                    </div>
                )
            }
            </div>
        )
    }

    render() {
        return(
            <Navbar className="header">
                {this.renderLogo()}
                {this.renderMenu()}
                <div  className="button">
                    <Button className="button-default" bsStyle="success">
                        Logar
                        <i className="fa fa-long-arrow-right button-default-icon" aria-hidden="true"></i> 
                    </Button>
                </div>
            </Navbar>
        )
    }
}

Header.propTypes = {
    menu: PropTypes.array.isRequired,
    active: PropTypes.number
}
