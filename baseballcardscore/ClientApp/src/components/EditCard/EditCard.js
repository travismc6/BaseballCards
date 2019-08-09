
import React, { Component } from 'react';

export class EditCard extends Component {

    constructor(props ) {
        super(props);
        this.state = {
            card: {}, loading: true, isSaving:false };
    }


    componentDidMount() {
        const api = 'api/cards/collection/' + this.props.match.params.collectionId + "/card/" + this.props.match.params.id;

        fetch(api)
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, ...data });
            });
    }


    handleChange = (evt) => {
        this.setState({  [evt.target.name] : evt.target.value });
    }

    handleSubmit = (evt) => {
        const api = 'api/cards/collection/' + this.props.match.params.collectionId + "/card/" + this.props.match.params.id;

        evt.preventDefault();

        this.setState({ isSaving: "true" })

        fetch(api, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            this.setState({ isSaving: false })
        })

    }


    renderCard() {
        return (
            <div>
                <div>
                    {this.state.year} {this.state.brand}
                </div>
                <div>{this.state.playerName}</div>
                <div>#{this.state.number}</div>

                <form onSubmit={this.handleSubmit}>
                    <label>Notes:</label>
                    <input type="textField" name="notes" onChange={this.handleChange} value={this.state.notes} />

                    <div>
                        <label>Condition:</label>
                        <select name="condition" onChange={this.handleChange} value={this.state.condition}>
                            <option value="1">Very Poor</option>
                            <option value="2">Poor</option>
                            <option value="3">Fair</option>
                            <option value="4">Good</option>
                            <option value="5">Excellent</option>

                        </select>
                    </div>


                    <div>
                        <input type="submit" value={this.state.isSaving ? "Saving..." : "Save"} disabled={this.state.isSaving} />
                    </div>
                </form>
             </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCard(this.state.card);

        return (
            <div>
                {contents}
            </div>
        );
    }
}
