
import React from 'react';
import image from '../images/card.jpg';

const CollectionCard = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} key={props.card.id}  >

            <image src={image}  />


            <div>
                {props.card.number} {props.card.playerName}
            </div>
            {props.card.year} {props.card.brand}
            <div>
            </div>
            <div>
            </div>
        </div>
    )
};

export default CollectionCard;

