
import React from 'react';
import image from '../../assets/card.jpg';



const CollectionCard = (props) => {
    const style = {
        display: 'inline-block',
        padding: '5px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'left'
    };

    handleEdit = (e) => {
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
                    <a href="">details</a>
                    <a onClick={event => handleEdit} >edit</a>
                </div>
                </div>
           </div>
    )
};

export default CollectionCard;

