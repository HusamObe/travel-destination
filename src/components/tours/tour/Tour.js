import React from "react";
import '../tour/Tour.css';

function Tour({ tour }) {
    console.log(tour);
    return (
        <div className="ho__tours">
            <h2 className="ho__heading">{tour.name}</h2>
            <img className="ho__img" src={tour.image} alt={tour.name} />
        </div>
    );
}

export default Tour;