
import React, { Component } from 'react';

export class SortByFilter extends Component {

    constructor({ props }) {
        super(props);
        this.state = { options: ["Year (Oldest First)", "Year (Newest First)", "Brand (A-Z)", "Brand Z-A"] };
    }

    render() {
        return (
            <div class="form-group">
                <label for="sortBy">Sort By</label>
                <select id="sortBy" className="form-control" onChange={(e) => this.props.optionChanged("sort", e.target.value)}>
                    {this.state.options.map((b,i) => (<option value={i}>{b}</option>)) }
                </select>
            </div>
        )}
}
