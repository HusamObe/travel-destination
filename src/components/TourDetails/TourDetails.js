import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = (props) => {
    console.log(props);
    const { id } = useParams();
    const selectedTour = props.data.tours.filter(tour => tour.id === id)[0];
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
        <div className="tour-details">
            <h2>{selectedTour.name}</h2>
            <p>{showFullDescription ? selectedTour.description : `${selectedTour.description.slice(0, 70)}...`}
                <button onClick={toggleDescription}>{showFullDescription ? 'See Less' : 'See More'}</button>
            </p>
        </div>
    );
}

export default TourDetails;
