
import React from 'react';
import { Link } from 'react-router-dom';


const CollectionCard = (props) => {
    const style = {
        display: 'inline-block',
        padding: '8px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'left'
    };

    const handleEdit = (e) => {
        e.preventDefault();

        this.props.history.push('/editcard')
    }

    return (
        <div style={style} key={props.card.id}  >

            <img  src={props.card.image} style={{ height: 100, display:'inline-block' }} />

            <div style={{ display: 'inline-block' }}>
                <div>
                    <strong>{props.card.number} {props.card.playerName}</strong>
                </div>
                <div>
                    {props.card.year} {props.card.brand}
                </div>
                <div style={{ alignContent: 'bottom' }}>
                    <div><a href="">details</a></div>

                    <Link to={"/editCard/" + props.collectionId + "/" + props.card.id }>edit</Link>

                </div>
                </div>
           </div>
    )
};

export default (CollectionCard)

