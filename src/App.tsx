import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/navigation/Header';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
