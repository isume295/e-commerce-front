import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

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
    { title: 'Power Your Online Presence: Elevate with Exceptional Hosting Services', src: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg' },
    { title: 'Efficient Support, Reliable Maintenance: Elevate Your Business', src: 'https://t4.ftcdn.net/jpg/02/32/16/07/360_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg' },
];

export const Hero = () => {
    return (
        <div className=" relative z-10">
            <Swiper modules={[Autoplay, Pagination, Navigation, EffectFade]} slidesPerView={1} loop autoplay={true} speed={1500}>
                {images.map((image) => (
                    <SwiperSlide key={image.title}>
                        <header className="">
                            <div className="flex w-full px-5 py-6">
                                <div
                                    className="flex items-center justify-start w-full h-[70vh] bg-green-100 md:w-12/12 relative"
                                    style={{
                                        backgroundImage: `url(${image.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="absolute z-10 h-full w-full bg-customLightDark"></div>
                                    <div className="flex absolute z-20 flex-col px-6 items-center w-full md:flex-row md:w-1/2">
                                        <div className="max-w-lg md:mx-0 md:order-2">
                                            <h1 className="text-3xl font-medium tracking-wide text-white md:text-4xl">The best Apple Watch apps</h1>
                                            <p className="mt-4 text-gray-300">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem
                                                voluptatem eos accusantium cumque.
                                            </p>
                                            <div className="mt-6">
                                                <button className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-mainColor rounded-md md:inline hover:bg-darkMain">
                                                    Lets Shop Now!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
