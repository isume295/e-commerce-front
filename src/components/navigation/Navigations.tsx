import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

const links = [
    {
        id: 0,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Shop',
        path: '/shop',
    },
    {
        id: 1,
        name: 'Categories',
        path: '/categories',
    },
    {
        id: 7,
        name: 'Blogs',
        path: '/blogs',
    },
    {
        id: 3,
        name: 'About Us',
        path: '/about',
    },
    {
        id: 4,
        name: 'Contact Us',
        path: '/contact',
    },
];

export const Navigations = () => {
    return (
        <div className="flex pt-3 px-12 justify-between items-center">
            <div className="flex justify-center items-center">
                <div className="pl-1 flex gap-3 justify-center items-center">
                    <span>Collections</span>
                    <MdKeyboardArrowDown className="pt-1 text-2xl" />
                </div>
            </div>
            <div className="flex gap-4 text-md">
                {links.map((link) => (
                    <NavLink className="px-2 py-1" key={link.id} to={link.path}>
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
