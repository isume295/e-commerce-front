import React, { useState } from 'react';
import { Slider } from './Slider';
import { QuickView } from './QuickView';

type ObjectType = {
    title: string;
    src: string;
};

const images: ObjectType[] = [
    {
        title: ' Maximize Business Success: Discover Powerful Consulting Services',
        src: 'https://www.kotak.com/content/dam/Kotak/product_card_images/how-credit-cards-enhance-your-shopping-experience.jpg',
    },
    {
        title: 'Cybersecurity Unleashed: Expert Services for Digital Fortification',
        src: 'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=sph',
    },
    {
        title: 'Embrace the Future: Experience Next-Level Modern DC Services',
        src: 'https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg',
    },
    {
        title: 'Power Your Online Presence: Elevate with Exceptional Hosting Services',
        src: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg',
    },
    {
        title: 'Efficient Support, Reliable Maintenance: Elevate Your Business',
        src: 'https://t4.ftcdn.net/jpg/02/32/16/07/360_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg',
    },
];

export const Womens = () => {
    let show = false;
    return (
        <div className=" w-full h-[100vh] bg-slate-500 z-10 relative">
            <div className="flex gap-10 py-6 w-full px-12 h-[100vh]">
                <div
                    className="w-[30%] flex flex-col justify-center items-center bg-green-400 h-full"
                    style={{
                        backgroundImage: `url(https://media.istockphoto.com/id/1307217813/photo/they-wouldnt-want-to-spend-their-day-any-other-way.jpg?s=612x612&w=0&k=20&c=1Us5Oo9tJ5n3lgO5V_aZ8ftqlfFPwo7JLdExcZ4d-bI=)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="font-raleway text-5xl text-white font-extrabold">Women's</h1>
                    <span className=" text-white underline font-bold">Discover more</span>
                </div>
                <div className="w-[70%]  flex flex-col justify-center items-center h-full">
                    <div className="flex justify-center gap-4 pb-6 items-center">
                        <span className="border-b-4 border-mainColor p-2 text-lg">Clothings</span>
                        <span className="text-gray-500 text-lg">HandBag</span>
                        <span className="text-gray-500 text-lg">Shoes</span>
                        <span className="text-gray-500 text-lg">Accessories</span>
                        <span className="text-gray-500 text-lg">Clothings</span>
                    </div>
                    <div className="w-full">
                        <Slider images={images} />
                    </div>
                </div>
            </div>
            {/* <QuickView /> */}
        </div>
    );
};
