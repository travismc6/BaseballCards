
import React, { Component } from 'react';
import { CardSet } from './CardSet';
import { YearFilter } from './YearFilter';
import { BrandFilter } from './BrandFilter';

export class CardList extends Component {
    checklistApi = 'api/cards/setchecklists?collectionid=1';

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

    renderSets(sets) {
        return (
            <div>
                <div>
                    <YearFilter />
                    <BrandFilter />
                </div>
                <ul>
                    {sets.map(set => (
                        <div key={set.id} >
                            <CardSet key={set.id} set={set} />
                        </div>
                    ))}
                </ul>
            </div>
            );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
        : this.renderSets(this.state.sets);

        return (
            <div>
                {contents}
            </div>
            );         
    }
}
