import React from 'react';

export const DealOfTheWeek = () => {
    return (
        <div className="flex px-12 pt-6 w-full h-screen">
            <div className="flex py-6 w-full justify-center items-center h-9/12 bg-[#F4F1E9]">
                <div className="w-6/12">
                    <div className="flex flex-col px-6 items-center justify-center w-full md:flex-row  ">
                        <div className="max-w-lg flex flex-col justify-center items-center md:mx-0 md:order-2">
                            <h1 className="text-3xl text-center font-medium tracking-wide text-customDark md:text-4xl">Deal of the Week</h1>
                            <div className="bg-mainColor mt-2 w-24 h-1"></div>
                            <p className="mt-4 text-center text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos
                                accusantium cumque.
                            </p>
                            <p className="text-gray-700 mt-2">
                                <span className="font-bold text-mainColor text-2xl">$35.00</span>/ handBag
                            </p>
                            <div className="flex gap-4 mt-6">
                                <div className=" flex font-raleway flex-col px-3 py-2 justify-center items-center bg-white rounded-md">
                                    <span className="text-4xl font-bold text-mainColor">00</span>
                                    <span className="text-xl text-gray-400">DAYS</span>
                                </div>
                                <div className=" flex font-raleway flex-col px-3 py-2 justify-center items-center bg-white rounded-md">
                                    <span className="text-4xl font-bold text-mainColor">00</span>
                                    <span className="text-xl text-gray-400">HRS</span>
                                </div>
                                <div className=" flex font-raleway flex-col px-3 py-2 justify-center items-center bg-white rounded-md">
                                    <span className="text-4xl font-bold text-mainColor">00</span>
                                    <span className="text-xl text-gray-400">MINS</span>
                                </div>
                                <div className=" flex font-raleway flex-col px-3 py-2 justify-center items-center bg-white rounded-md">
                                    <span className="text-4xl font-bold text-mainColor">00</span>
                                    <span className="text-xl text-gray-400">SEC</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-mainColor rounded-md md:inline hover:bg-darkMain">
                                    Shop Now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 flex justify-center items-center">
                    <img className="w-8/12 h-8/12" src="https://www.kotak.com/content/dam/Kotak/product_card_images/how-credit-cards-enhance-your-shopping-experience.jpg" alt="img" />
                </div>
            </div>
        </div>
    );
};
