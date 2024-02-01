import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../navigation/Header';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../footer/Footer';

export const Layout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
