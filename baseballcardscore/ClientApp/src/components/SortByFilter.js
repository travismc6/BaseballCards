
import React, { Component } from 'react';

export class SortByFilter extends Component {

    constructor({ props }) {
        super(props);
        this.state = { options: ["Year (Oldest First)", "Year (Newest First)", "Brand (A-Z)", "Brand Z-A"] };
    }

    render() {
        return (
            <div>
                Sort By:
                <select onChange={(e) => this.props.optionChanged(e.target.value)}>
                    {this.state.options.map((b,i) => (<option value={i}>{b}</option>)) }
                </select>
            </div>
        )}
}
