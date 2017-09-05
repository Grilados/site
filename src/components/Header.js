import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';
import {Navbar, Button} from 'react-bootstrap';
import {MenuHeader} from './Menus';

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

    render() {
        return(
            <Navbar className="header">
                <div className="container">
                    {this.renderLogo()}
                    <div><MenuHeader active={this.props.active} menu={this.props.menu}/></div>
                    <div  className="button">
                        <Button className="button-default" bsStyle="success">
                            Logar
                            <i className="fa fa-long-arrow-right button-default-icon" aria-hidden="true"></i> 
                        </Button>
                    </div>
                </div>
            </Navbar>
        )
    }
}

Header.propTypes = {
    menu: PropTypes.array.isRequired,
    active: PropTypes.number
}
