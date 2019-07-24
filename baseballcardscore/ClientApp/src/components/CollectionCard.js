
import React, { Component } from 'react';
import { YearFilter } from './YearFilter';
import { BrandFilter } from './BrandFilter';
import { SortByFilter } from './SortByFilter';


export class CollectionCard extends Component {

    constructor({ props }) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div key={this.props.card.id}  >
                <div>
                {this.props.card.number} {this.props.card.playerName}
                </div>
                {this.props.card.year} {this.props.card.brand}
                <div>
                </div>
                <div>
                </div>
            </div>
        )}
}
