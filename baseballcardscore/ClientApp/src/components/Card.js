
import React, { Component } from 'react';

export class Card extends Component {

    constructor({ props }) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.props.card.hasCard} />
                {this.props.card.number}
                {this.props.card.playerName}
            </div>
        )}
}
