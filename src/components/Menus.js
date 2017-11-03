import React, { Component } from 'react';
import './css/Menus.css';

export class MenuHeader extends Component {
    renderMenu() {
        if (!this.props.menu) return console.error('Os itens não foram encontrados!');
        return(
            <div>
            {
                this.props.menu.map((item, index)=>
                    <div key={index} className={
                        `menu-header ${this.props.active === index ? 'menu-header-active' : ''}`
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
            <div>{this.renderMenu()}</div>
        )
    }
}

export class MenuSimples extends Component {
    renderMenu() {
        if (!this.props.menu) return console.error('Os itens não foram encontrados!');
        return(
            <div>
            {
                this.props.menu.map((item, index)=>
                    <div key={index} className={
                        `menu-simples ${this.props.active === index ? 'menu-simples-active' : ''}`
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
            <div>{this.renderMenu()}</div>
        )
    }
}

