
import React, { Component } from 'react';

export class Card extends Component {

    constructor({ props }) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div key={this.props.card.id} style={{ backgroundColor: this.props.isBusy ? "gray" : "white" }} >
                <input disabled={this.props.isBusy}
                    type="checkbox"
                    onClick={this.props.onCheckboxChange}
                    defaultChecked={this.props.card.hasCard} />
                {this.props.card.number}
                {this.props.card.playerName}
            </div>
        )}
}
