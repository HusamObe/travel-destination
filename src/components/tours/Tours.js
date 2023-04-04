import React from "react";
import '../tours/Tours.css'

function Tours(props) {
    return (

        <>
            {props.newArr.map(element => {
                return <div className="ho__tours">
                    <h2 className="ho__heading">{element.name}</h2>
                    <img className="ho__img" src={element.image_url} alt={element.name} />
                </div>
            })}



        </>
    );
}

export default Tours; 