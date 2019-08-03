
import React, { Component } from 'react';



const ChecklistCard = (props) => {

    const style = {
        backgroundColor: "white",
        marginBottom: '10px'

    };

    if (props.isBusy) {
        style.backgroundColor = "gray";
    }

    const item = {
        marginLeft: '5px'
    }

        return (
            <div key={props.card.id} style={style} >
                <span style={item}>
                    <input disabled={props.isBusy}
                        type="checkbox"
                        onClick={props.onCheckboxChange}
                        defaultChecked={props.card.hasCard} />
                </span>
                <span style={item}>
                    {props.card.number}
                </span>
                <span style={item}>
                    {props.card.playerName}
                </span>
            </div>
        )
}

export default ChecklistCard;
