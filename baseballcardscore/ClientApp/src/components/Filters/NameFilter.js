
import React, { Component } from 'react';

export class NameFilter extends Component {

    constructor( props ) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div class="form-group">
                <label for="yearSelect">Name</label>
                <input id="name" className="form-control" onChange={(e) => this.props.nameChanged("name", e.target.value)} />
            </div>
        )}
}
