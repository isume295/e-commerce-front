import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<div>About</div>} />
            <Route path="/dashboard" element={<div>Dashboard</div>} /> */}
            </Routes>
        </>
    );
}

export default App;
