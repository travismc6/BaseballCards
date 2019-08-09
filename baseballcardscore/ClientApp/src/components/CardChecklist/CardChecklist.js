
import React, { Component } from 'react';
import { CardSet } from '../CardSet/CardSet';
import { YearFilter } from '../Filters/YearFilter';
import { BrandFilter } from '../Filters/BrandFilter';
import { SortByFilter } from '../Filters/SortByFilter';

export class CardChecklist extends Component {
    checklistApi = 'api/cards/setchecklists/1';

    constructor(props) {
        super(props);
        this.state = {
            allSets: [], sets: [], loading: true,
            filters: {
                year: 0, brand: "", sortBy: 0, name: ""
            }
        };
    }

    componentDidMount() {
        fetch(this.checklistApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ allSets: data.sets, sets:data.sets, loading: false });
            });
    }

    filterChanged = (filter, value) => {
        const filters = this.state.filters;

        if (filter.toLowerCase() == "year") {
            filters.year = value;
        }
        else if (filter.toLowerCase() == "brand") {
            filters.brand = value;
        }
        else if (filter.toLowerCase() == "name") {
            filters.name = value;
        }
        else if (filter.toLowerCase() == "sort") {
            filters.sortBy = value;
        }

        this.setState({ filters: filters });
        this.filter();
    }


    filter = () => {
        let list = this.state.allSets.slice();

        if (this.state.filters.year > 0) {
            list = list.filter(set => set.year == this.state.filters.year );
        }

        if (this.state.filters.brand != "") {
            list = list.filter(set => set.brand == this.state.filters.brand );
        }

        if (this.state.filters.sortBy == 0) {
            list.sort((a, b) => {
                return a.year - b.year;
            });
        }
        else if (this.state.filters.sortBy == 1) {
            list.sort((a, b) => {
                return b.year - a.year;
            });
        }
        else if (this.state.filters.sortBy == 2) {
            list.sort((a, b) => {
                if (a.brand < b.brand) { return -1; }
                if (a.brand > b.brand) { return 1; }
                return 0;
            });
        }
        else if (this.state.filters.sortBy == 3) {
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
            <div >
                <div>
                    <YearFilter yearChanged={this.filterChanged}/>
                    <BrandFilter brandChanged={this.filterChanged} />
                    <SortByFilter optionChanged={this.filterChanged} />
                </div>
                <ul>
                    {sets.map( (set,i) => (
                        <div key={set.id} >
                            <CardSet  set={set}  />
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
