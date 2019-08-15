
import React, { Component } from 'react';
import  CollectionCard  from '../CardCollection/CollectionCard';
import { YearFilter } from '../Filters/YearFilter';
import { BrandFilter } from '../Filters/BrandFilter';
import { SortByFilter } from '../Filters/SortByFilter';
import { NameFilter } from '../Filters/NameFilter';

export class MyCollection extends Component {

    collectionId = 1;

    constructor( props ) {
        super(props);
        this.state = {
            cards: [], allCards: [], isLoading: true,
            filters: {
                year: 0, brand: "", sortBy: 0, name: ""
            }
        };
    }

    componentDidMount() {
        const listApi = "collection/" + this.collectionId + "/cardsforcollection";

        fetch(listApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data, allCards: data, isLoading: false, year: 0, brand: "", sortBy: 0 });
            });
    }

    filterChanged = (filter, value) => {
        const filters = this.state.filters;

        if (filter.toLowerCase() === "year") {
            filters.year = value;
        }
        else if (filter.toLowerCase() === "brand") {
            filters.brand = value;
        }
        else if (filter.toLowerCase() === "name") {
            filters.name = value;
        }
        else if (filter.toLowerCase() === "sort") {
            filters.sortBy = value;
        }
        else if (filter.toLowerCase() === "name") {
            filters.name = value;
        }

        this.setState({ filters: filters });
        this.filter();
    }

    filter = () => {
        let list = this.state.allCards.slice();

        if (this.state.filters.year > 0) {
            list = list.filter(card => card.year == this.state.filters.year);
        }

        if (this.state.filters.brand !== "") {
            list = list.filter(card => card.brand == this.state.filters.brand);
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

        if (this.state.filters.name.trim().length > 0) {
            list = list.filter(card => {
                const names = card.playerName.toLowerCase().split(' ');
                let match = false;

                names.forEach(n => {
                    if (n.startsWith(this.state.filters.toLowerCase())) {
                        match = true;
                    }
                });

                return match;
            });
        }

        this.setState({ cards: list });
    }

    renderCards(cards) {
        const cardList = cards.map((card) => {
            return <CollectionCard card={card} id={card.id} collectionId={this.collectionId} />
        });

        return (
            <div>
                <div>
                    <YearFilter yearChanged={this.filterChanged} />
                    <BrandFilter brandChanged={this.filterChanged} />
                    <SortByFilter optionChanged={this.filterChanged} />
                    <NameFilter nameChanged={this.filterChanged} />
                </div>
                <div>
                    <b>Cards: </b> {cards.length}
                </div>

                {cardList}
            </div>
        );
    }

    render() {
        let contents = this.state.isLoading
            ? <p><em>Loading...</em></p>
            : this.renderCards(this.state.cards);

        return (
            <div>
                {contents}
            </div>
        );
    }
}
