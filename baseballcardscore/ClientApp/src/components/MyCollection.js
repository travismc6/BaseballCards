
import React, { Component } from 'react';
import  CollectionCard  from './CollectionCard';
import { YearFilter } from './YearFilter';
import { BrandFilter } from './BrandFilter';
import { SortByFilter } from './SortByFilter';
import { NameFilter } from './NameFilter';

export class MyCollection extends Component {
    listApi = 'collection/1/cardsforcollection';

    constructor( props ) {
        super(props);
        this.state = { cards: [] };
    }

    componentDidMount() {
        fetch(this.listApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data, loading: false });
            });
    }

    renderCards(sets) {
        return (
            <div>
                <div>
                    <YearFilter yearChanged={this.yearChanged} />
                    <BrandFilter brandChanged={this.brandChanged} />
                    <SortByFilter optionChanged={this.optionChanged} />
                    <NameFilter />
                </div>

                <ul>
                    {sets.map(card => (
                        <div key={card.id} >
                            <CollectionCard card={card} />
                        </div>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCards(this.state.cards);

        return (
            <div>
                {contents}
            </div>
        );
    }
}
