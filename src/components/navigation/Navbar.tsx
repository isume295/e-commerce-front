import React from 'react';
import logo from '../../assets/Asset 2.svg';
import { IoSearch } from 'react-icons/io5';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdLanguage } from 'react-icons/md';
import { Navigations } from './Navigations';

export const Navbar = () => {
    return (
        <div className="flex flex-col sticky z-30 top-0 bg-white">
            <div className="h-20 w-full px-12 flex justify-between items-center">
                <div className="w-14 h-full flex gap-2">
                    <img src={logo} alt="logo" />
                    <div className="flex w-full h-full justify-center items-center pt-6 font-bold font-raleway text-4xl text-customDark">
                        <span>üzel</span>
                    </div>
                </div>
                <div className="flex pt-6 w-6/12 gap-2 justify-end">
                    <div className="w-6/12 bg-green-300 relative ">
                        <input className="border px-3 focus:outline-none h-10 w-full" type="text" placeholder="jeans" />
                        <div className="flex justify-center items-center absolute bg-mainColor text-white right-0 top-0 z-10 w-10 h-full">
                            <IoSearch />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center text-2xl">
                        <MdOutlinePersonOutline />
                        <MdOutlineShoppingCart />
                        <MdFavoriteBorder />
                        <RiCustomerServiceFill />
                        <MdLanguage />
                    </div>
                </div>
            </div>
            <Navigations />
        </div>
    );
};
