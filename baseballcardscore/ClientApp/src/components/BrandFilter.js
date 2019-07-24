
import React, { Component } from 'react';

export class BrandFilter extends Component {

    constructor({ props }) {
        super(props);
        this.state = { brands: ["Bowman", "Topps", "Leaf"] };
    }

    render() {
        return (
            <div>
                Brand:
                <select onChange={(e) => this.props.brandChanged(e.target.value)}>
                    <option value={""}>All</option>
                    {this.state.brands.map(b => (<option value={b}>{b}</option>)) }
                </select>
            </div>
        )}
}
