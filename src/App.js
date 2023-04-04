import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


const data = require("../src/data/db.json")

function App() {
  return (
    <>
      <Home data={data} />

    </>

  );
}

export default App;
