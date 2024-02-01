import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
// import { Header } from './components/navigation/Header';
// import { Navbar } from './components/navigation/Navbar';
// import { Footer } from './components/footer/Footer';
import { Login } from './pages/Login';
import { Layout } from './components/layout/Layout';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;
