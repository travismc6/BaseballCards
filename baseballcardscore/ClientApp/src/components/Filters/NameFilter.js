
import React, { Component } from 'react';

export class NameFilter extends Component {

    constructor( props ) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div>
                Name:
                <input  onChange={"name", this.props.nameChanged} />
            </div>
        )}
}
