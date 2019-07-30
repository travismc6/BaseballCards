
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
                </div>
                </div>
           </div>
    )
};

export default CollectionCard;

