
import React, { Component } from 'react';
import { ChecklistCard } from './ChecklistCard';

export class CardSet extends Component {
    state = {
        cards: this.props.set.cards,
    };

    constructor(props) {
        super(props);
    }

    onCheckboxChange = id => {
        const list = this.state.cards.slice();

        let card = list.find(cd => { return cd.id === id });
        card.hasCard = !card.hasCard;
        card.isBusy = true;

        this.updateCardState(card);
        this.updateCardStatus(card);
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

        let stateCard = list.find(cd => {return cd.id === c.id });
        stateCard = c;

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
                    <ChecklistCard key={card.id} card={card} onCheckboxChange={() => this.onCheckboxChange(card.id)} isBusy={card.isBusy} />
                ))}
            </div>
        )
    }
}
