import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Triagem from './pages/Triagem';
import NavBar from './components/NavBar';
import Atendimento from './pages/Atendimento';

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/triagem" element={<Triagem />} />
        <Route path="/atendimento" element={<Atendimento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
