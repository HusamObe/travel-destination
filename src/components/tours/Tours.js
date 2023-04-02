import React from "react";

function Tours(props) {
    console.log(props);
    return (

        <>
            {props.newArr.map(element => {
                return <div>
                    <h2>{element.name}</h2>
                    <img src={element.image_url} alt={element.name} />
                </div>
            })}



        </>
    );
}

export default Tours; 