import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo-orange.svg';
export const Footer = () => {
    return (
        <footer className=" mt-10 bg-gray-900">
            <div className="container px-6 pt-12 pb-6 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-mainColor focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                Home
                            </a>
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                Shop
                            </a>
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                Categories
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                Retail & E-Commerce
                            </a>
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                About Us
                            </a>
                            <a href="#" className="transition-colors duration-300 text-gray-300 hover:text-mainColor hover:underline">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center justify-center">
                        <img className="w-20 h-16" src={logo} alt="" />
                        <div className="text-gray-300 ">
                            <h1 className="font-bold">Guzel</h1>
                            <p>All in one online shopping center</p>
                        </div>
                    </div>

                    <div className="flex -mx-2">
                        <a href="#k" className="mx-2 text-2xl transition-colors duration-300 text-gray-300 hover:text-mainColor" aria-label="Reddit">
                            <FaFacebook />
                        </a>

                        <a href="#i" className="mx-2 text-2xl transition-colors duration-300 text-gray-300 hover:text-mainColor" aria-label="Facebook">
                            <FaInstagram />
                        </a>

                        <a href="#f" className="mx-2 text-2xl transition-colors duration-300 text-gray-300 hover:text-mainColor" aria-label="Github">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
