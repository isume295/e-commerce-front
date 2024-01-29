import React from 'react';
import { Hero } from '../components/home/Hero';
import { Category } from '../components/home/Category';
import { Womens } from '../components/home/Womens';
import { DealOfTheWeek } from '../components/home/DealOfTheWeek';
import { Mens } from '../components/home/Mens';
import { Shipping } from '../components/home/Shipping';
import { QuickView } from '../components/home/QuickView';

export const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <Category />
            <Womens />
            <DealOfTheWeek />
            <Mens />
            <Shipping />
            {/* <QuickView /> */}
        </div>
    );
};
