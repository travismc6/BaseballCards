﻿
import React, { Component } from 'react';

export class YearFilter extends Component {

    constructor( props ) {
        super(props);
        this.state = { years: [1951,1952,1953,1954,1955,1956,1957,1957,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970] };
    }

    render() {
        return (
            <div class="form-group">
                <label for="yearSelect">Year</label>
                <select class="form-control" id="yearSelect" onChange={(e) => this.props.yearChanged("year", e.target.value)}>
                    <option value={0}>All</option>
                    {this.state.years.map(y => (<option value={y}>{y}</option>))}
                </select>
            </div>
        )}
}
