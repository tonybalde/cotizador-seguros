import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Historial from './components/Historial';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
