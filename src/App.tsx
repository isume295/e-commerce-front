import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
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
                    {/* here we will hav our private routes if the token is not in our store the it will redirect to login page implement this when u do the authentication */}
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
