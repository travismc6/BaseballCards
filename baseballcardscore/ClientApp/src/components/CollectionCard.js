
import React from 'react';

const CollectionCard = (props) => (
        <div key={props.card.id}  >
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

export default CollectionCard;

