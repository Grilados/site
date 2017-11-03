import React, { Component } from 'react';
import './css/Alert.css';

export class Alert extends Component {
    render() {
        return(
            <div className="alert">
                <div className="text-center title"> {this.props.title} </div>
                <div className="text-center body"> {this.props.body} </div>
            </div>
        )
    }
}