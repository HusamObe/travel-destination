import React from "react";
import '../tours/Tours.css'
import Tour from '../tours/tour/Tour'

function Tours(props) {
    return (
        <>
            {props.newArr.map((element) => {
                return (
                    <Tour key={element.id} Tour={element} />
                );
            })}
        </>
    );
}

export default Tours; 