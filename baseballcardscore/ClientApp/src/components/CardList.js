
import React, { Component } from 'react';
import { Card } from './Card';

export class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = { sets: [], loading: true };    }

    componentDidMount() {

        fetch('api/cards/setchecklists?collectionid=1&year=1951')
            .then(response => response.json())
            .then(data => {
                this.setState({ sets: data.sets, loading: false });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.sets.map(set => (
                        <div>
                            <div>
                                Year:
                                <select></select>

                                Brand:
                                <select></select>
                            </div>

                            <h1>{set.year} {set.brand}</h1>
                            {set.cards.map(card => (
                                <Card key={card.id} card={card} />                          
                            ))}
                        </div>
                    ))}
                </ul>
            </div>)
    }
}
