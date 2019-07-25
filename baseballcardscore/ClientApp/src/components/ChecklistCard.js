
import React, { Component } from 'react';

const ChecklistCard = (props) => {
        return (
            <div key={props.card.id} style={{ backgroundColor: props.isBusy ? "gray" : "white" }} >
                <input disabled={props.isBusy}
                    type="checkbox"
                    onClick={props.onCheckboxChange}
                    defaultChecked={props.card.hasCard} />
                {props.card.number}
                {props.card.playerName}
            </div>
        )
}

export default ChecklistCard;
