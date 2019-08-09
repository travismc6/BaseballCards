
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
        this.state = { cards: [], allCards: [], isLoading: true, year: 0, brand: "", sortBy: 0 , name:"" };
    }

    componentDidMount() {
        const listApi = "collection/" + this.collectionId + "/cardsforcollection";

        fetch(listApi)
            .then(response => response.json())
            .then(data => {
                this.setState({ cards: data, allCards: data, isLoading: false, year: 0, brand: "", sortBy: 0 });
            });
    }

    yearChangedHandler = (year) => {
        this.setState({ year: year });
        this.filter(year, this.state.brand, this.state.sortBy);
    }

    brandChangedHandler = (brand) => {
        this.setState({ brand: brand });
        this.filter(this.state.year, brand, this.state.sortBy);
    }

    optionChangedHandler = (sortBy) => {
        this.setState({ sortBy: sortBy });
        this.filter(this.state.year, this.state.brand, sortBy);
    }

    nameChangedHandler = (event) => {

        const name = event.target.value;

        this.setState({ name: name });
        this.filter(this.state.year, this.state.brand, this.state.sortBy, name);
    }

    filter = (year, brand, sortBy, name) => {
        let list = this.state.allCards.slice();

        if (year > 0) {
            list = list.filter(card => card.year == year);
        }

        if (brand != "") {
            list = list.filter(card => card.brand == brand);
        }

        if (name && name.trim().length > 0) {
            list = list.filter(card => 
            {
                const names = card.playerName.toLowerCase().split(' ');
                let match = false;

                names.forEach(n => {
                    if (n.startsWith(name.toLowerCase())) {
                        match= true;
                    }
                });

                return match;



                //return card.playerName.toLowerCase().startsWith(name.toLowerCase())
            });
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

        this.setState({ cards: list });
    }

    renderCards(cards) {
        const cardList = cards.map((card) => {
            return <CollectionCard card={card} id={card.id} collectionId={this.collectionId} />
        });

        return (
            <div>
                <div>
                    <YearFilter yearChanged={this.yearChangedHandler} />
                    <BrandFilter brandChanged={this.brandChangedHandler} />
                    <SortByFilter optionChanged={this.optionChangedHandler} />
                    <NameFilter nameChanged={this.nameChangedHandler} />
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
