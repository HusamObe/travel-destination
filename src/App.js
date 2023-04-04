import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Tours from './components/tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';

const data = require("../src/data/db.json")

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<TourDetails data={data} />} />
      </Routes>

    </>

  );
}

export default App;
