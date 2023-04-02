import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


function Home(data) {
    const newArr = data.data.map(element => {
        return { name: element.name, image_url: element.image }
    });
    console.log(data);
    return (
        <>
            <Header />
            <Tours newArr={newArr} />
            <Footer />
        </>
    );
}

export default Home;