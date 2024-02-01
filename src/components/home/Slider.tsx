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
import { useAppDispatch } from '../../redux/hooks';
import { showItem } from '../../redux/RenderSlice';

type ObjectType = {
    title: string;
    src: string;
};

type SliderProps = {
    images: ObjectType[];
};

export const Slider: React.FC<SliderProps> = ({ images }) => {
    const dispatch = useAppDispatch();
    const handleView = () => {
        try {
            dispatch(showItem());
            console.log('view is updated');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Swiper modules={[Autoplay, Pagination, Navigation, EffectFade]} slidesPerView={3} loop autoplay={true} pagination={{ clickable: true }} speed={1500}>
            {images.map((image: any) => (
                <SwiperSlide key={image.src}>
                    <div className="flex bg-green-200 w-full h-96">
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
                                    <button onClick={handleView} className="bg-white h-12 flex justify-center items-center text-lg font-bold font-raleway px-2 py-2 text-customDark">
                                        + Quick View
                                    </button>
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
    );
};
