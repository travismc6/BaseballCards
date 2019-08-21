
import React from 'react';
import { Link } from 'react-router-dom';


const CollectionCard = (props) => {
    const style = {
        display: 'inline-block',
    };

    return (
        <div className="card m-1" style={style} style={style} key={props.card.id}  >

            <img className="mb-2 ml-2" src={props.card.image} style={{ height: 150, display: 'inline-block' }} />

            <div className="card-body m1 p1" style={{ display: "inline-block" }}>
                <h5 className="card-title">{props.card.playerName}</h5>
                <h6 className="card-title">{props.card.year} {props.card.brand}</h6>

                <Link className="card-link" to={"/editCard/" + props.collectionId + "/" + props.card.id}>edit</Link>
            </div>
        </div>
    )
};

export default (CollectionCard)

