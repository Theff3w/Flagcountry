import { useState } from 'react'
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from './components/Country';

const url = 'https://restcountries.com/v3.1/all';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div><Filter /><Countries /></div>} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App
