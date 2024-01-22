import React from 'react';
import { Hero } from '../components/home/Hero';
import { Category } from '../components/home/Category';
import { Womens } from '../components/home/Womens';

export const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Womens />
        </div>
    );
};
