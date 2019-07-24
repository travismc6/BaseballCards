
import React, { Component } from 'react';
import { CardSet } from './CardSet';
import { YearFilter } from './YearFilter';
import { BrandFilter } from './BrandFilter';
import { SortByFilter } from './SortByFilter';

export class CardList extends Component {
    checklistApi = 'api/cards/setchecklists?collectionid=1';

    constructor(props) {
        super(props);
        this.state = { allSets: [], sets: [], loading: true, year:0, brand:"", sortBy:0 };    }

    componentDidMount() {
        fetch(this.checklistApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ allSets: data.sets, sets:data.sets, loading: false });
            });
    }

    yearChanged = (year) =>
    {
        this.setState({ year: year });
        this.filter(year, this.state.brand, this.state.sortBy);
    }

    brandChanged = (brand) => {
        this.setState({ brand: brand });
        this.filter(this.state.year, brand, this.state.sortBy);
    }

    optionChanged = (sortBy) => {
        this.setState({ sortBy: sortBy });
        this.filter(this.state.year, this.state.brand, sortBy);
    }

    filter = (year, brand, sortBy) => {
        let list = this.state.allSets.slice();

        if (year > 0) {
            list = list.filter(set =>  set.year == year );
        }

        if (brand != "") {
            list = list.filter(set =>  set.brand == brand );
        }

        if (sortBy == 0) {
            list.sort((a, b) => {
                return a.year - b.year;
            });
        }
        else if (sortBy == 1) {
            list.sort((a, b) => {
                return b.year - a.year;
            });
        }
        else if (sortBy == 2) {
            list.sort((a, b) => {
                if (a.brand < b.brand) { return -1; }
                if (a.brand > b.brand) { return 1; }
                return 0;
            });
        }
        else if (sortBy == 3) {
            list.sort((a, b) => {
                if (a.brand > b.brand) { return -1; }
                if (a.brand < b.brand) { return 1; }
                return 0;
            });
        }

        this.setState({ sets: list });
    }

    renderSets(sets) {
        return (
            <div>
                <div>
                    <YearFilter yearChanged={this.yearChanged}/>
                    <BrandFilter brandChanged={this.brandChanged} />
                    <SortByFilter optionChanged={this.optionChanged} />
                </div>
                <ul>
                    {sets.map(set => (
                        <div key={set.id} >
                            <CardSet key={set.id} set={set}  />
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
