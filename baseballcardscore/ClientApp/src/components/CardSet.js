
import React, { Component } from 'react';
import { Card } from './Card';

export class CardSet extends Component {
    state = {
        cards: this.props.set.cards,
    };

    constructor(props) {
        super(props);
    }

    onCheckboxChange = id => {
        const list = this.state.cards.slice();

        list.forEach((card) => {
            if (card.id === id) {
                card.hasCard = !card.hasCard;
                card.isBusy = true;
                this.updateCardState(card);
                this.updateCardStatus(card);
            }
        });
    };

    updateCardStatus = (card) => {
        fetch('api/cards/' + card.id + "/collection/" + 1, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response
        }).then(response => {
            card.isBusy = false;
            this.updateCardState(card);
        })
    }

    updateCardState = (c) => {
        const list = this.state.cards.slice();

        this.state.cards.forEach((card) => {
            if (card.id === c.id) {
                card = c;
            }
        });

        this.setState({ cards: list });
    }

    render() {
        return (
            <div >
                <h1>{this.props.set.year} {this.props.set.brand}</h1>
                <div>
                    {this.props.set.description}
                </div>
                {this.state.cards.map((card) => (

                    <Card key={card.id} card={card} onCheckboxChange={() => this.onCheckboxChange(card.id)} isBusy={card.isBusy} />
                ))}
            </div>
        )
    }
}
