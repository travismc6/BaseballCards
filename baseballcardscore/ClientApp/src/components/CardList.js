
import React, { Component } from 'react';
import { Card } from './Card';

export class CardList extends Component {
    checklistApi = 'api/cards/setchecklists?collectionid=1';
    updateApi = 'api/cards/1/collection';

    constructor(props) {
        super(props);
        this.state = { sets: [], loading: true };    }

    componentDidMount() {
        fetch(this.checklistApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ sets: data.sets, loading: false });
            });
    }

    updateCardState = (c) => {
        const list = this.state.sets.slice();

        list.forEach((set) => {
            set.cards.forEach((card) => {
                if (card.id === c.id) {
                    card = c;
                }
            });
        });

        this.setState({ sets: list });
    }

    updateState = (card) => {
        card.hasCard = !card.hasCard;
        card.isBusy = true;

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

    onCheckboxChange = id => {
        const list = this.state.sets.slice();

        list.forEach((set) => {
            set.cards.forEach((card) => {
                if (card.id === id) {
                    this.updateState(card);
                }
            });
        });

        this.setState({ sets: list });
    };

    render() {
        return (
            <div>
                <div>
                    Year:
                        <select>
                            <option value="1951">1951</option>
                            <option value="1952">1951</option>
                            <option value="1953">1951</option>
                            <option value="1954">1951</option>
                            <option value="1955">1951</option>
                            <option value="1956">1951</option>
                            <option value="1957">1951</option>
                            <option value="1958">1951</option>
                            <option value="1959">1951</option>
                            <option value="1960">1951</option>
                            <option value="1961">1951</option>
                            <option value="1962">1951</option>
                            <option value="1963">1951</option>
                            <option value="1964">1951</option>
                            <option value="1965">1951</option>
                            <option value="1966">1951</option>
                            <option value="1967">1951</option>
                            <option value="1968">1951</option>
                            <option value="1969">1951</option>
                            <option value="1970">1951</option>
                        </select>

                    Brand:
                    <select>
                        <option value="Bowman">Bowman</option>
                        <option value="Topps">Topps</option>
                        <option value="Leaf">Leaf</option>

                    </select>
                </div>
                <ul>
                    {this.state.sets.map(set => (
                        <div key={set.id}>
                            <h1>{set.year} {set.brand}</h1>
                            <div>
                                {set.description}
                            </div>
                            {set.cards.map((card) => (
                                
                                <Card key={card.id} card={card} onCheckboxChange={() => this.onCheckboxChange(card.id)} isBusy={card.isBusy} />                          
                            ))}
                        </div>
                    ))}
                </ul>
            </div>)
    }
}
