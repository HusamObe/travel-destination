import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


function Home(data) {
    const newArr = data.data.map(element => {
        return { id: element.id, name: element.name, image_url: element.image }
    });
    return (
        <>
            <Header />
            <Navbar />
            <Tours newArr={newArr} />
            <Footer />
        </>
    );
}

export default Home;