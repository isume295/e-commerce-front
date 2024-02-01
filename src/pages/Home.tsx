import React from 'react';
import { Hero } from '../components/home/Hero';
import { Category } from '../components/home/Category';
import { Womens } from '../components/home/Womens';
import { DealOfTheWeek } from '../components/home/DealOfTheWeek';
import { Mens } from '../components/home/Mens';
import { Shipping } from '../components/home/Shipping';
import { useAppSelector } from '../redux/hooks';
import { renderSelector } from '../redux/store';
import { QuickView } from '../components/home/QuickView';

export const Home = () => {
    const { showQuickView } = useAppSelector(renderSelector);

    return (
        <div className="relative">
            <Hero />
            <Category />
            <Womens />
            <DealOfTheWeek />
            <Mens />
            <Shipping />

            {showQuickView && <QuickView />}
        </div>
    );
};
