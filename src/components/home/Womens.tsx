import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { MdFavoriteBorder } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { FaShuffle } from 'react-icons/fa6';

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
    return (
        <div>
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
                        <Swiper modules={[Autoplay, Pagination, Navigation, EffectFade]} slidesPerView={3} loop autoplay={true} pagination={{ clickable: true }} speed={1500}>
                            {images.map((image) => (
                                <SwiperSlide key={image.src}>
                                    <div className="flex w-full h-96">
                                        <div className="flex  w-full px-2 pb-12 justify-center items-center ">
                                            <div
                                                className="h-full w-full flex justify-center items-center relative group"
                                                style={{
                                                    backgroundImage: `url(${image.src})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            >
                                                <div className="absolute top-3 right-3 opacity-0 transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-3xl text-customDark">
                                                    <MdFavoriteBorder />
                                                </div>

                                                <div className="absolute bottom-0 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-1 justify-center items-center">
                                                    <div className="bg-mainColor flex justify-center items-center h-12 text-2xl px-2 py-2 text-white">
                                                        <GiShoppingBag />
                                                    </div>
                                                    <div className="bg-white h-12 flex justify-center items-center text-lg font-bold font-raleway px-2 py-2 text-customDark">
                                                        <span>+ Quick View</span>
                                                    </div>
                                                    <div className="bg-white flex justify-center items-center h-12 text-2xl px-2 py-2 text-customDark">
                                                        <FaShuffle />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
