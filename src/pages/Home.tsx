import React from 'react';
import { Hero } from '../components/home/Hero';
import { Category } from '../components/home/Category';
import { Womens } from '../components/home/Womens';
import { DealOfTheWeek } from '../components/home/DealOfTheWeek';

export const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Womens />
            <DealOfTheWeek />
        </div>
    );
};
