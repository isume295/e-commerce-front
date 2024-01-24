import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { IoMdTimer } from 'react-icons/io';
import { GiReturnArrow } from 'react-icons/gi';

export const Shipping = () => {
    return (
        <div className=" relative z-20 flex w-full justify-center md:pt-5 items-center">
            <div className="container flex flex-col bg-white">
                <div className="w-full draggable">
                    <div className="container flex flex-col items-center gap-16 my-10">
                        <div className="grid w-full md:px-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-y-8">
                            <div className="flex gap-3 border py-6 justify-center items-center text-mainColor">
                                <LiaShippingFastSolid className="text-5xl" />
                                <div className="flex flex-col items-start text-mainColor">
                                    <h3 className="text-xl font-bold text-customDark leading-tight text-center text-dark-grey-900">
                                        <span id="countto1" />
                                        FREE SHIPPING
                                    </h3>
                                    <p className="text-base font-medium leading-7 text-dark-grey-600">For all order over $99</p>
                                </div>
                            </div>
                            <div className="flex gap-3 border py-6 justify-center items-center text-mainColor">
                                <IoMdTimer className="text-5xl" />
                                <div className="flex flex-col items-start text-mainColor">
                                    <h3 className="text-xl font-bold text-customDark leading-tight text-center text-dark-grey-900">
                                        <span id="countto1" />
                                        DELIVERY ON TIME
                                    </h3>
                                    <p className="text-base font-medium leading-7 text-dark-grey-600">For all order over $99</p>
                                </div>
                            </div>
                            <div className="flex gap-3 border py-6 justify-center items-center text-mainColor">
                                <GiReturnArrow className="text-5xl" />
                                <div className="flex flex-col items-start text-mainColor">
                                    <h3 className="text-xl font-bold text-customDark leading-tight text-center text-dark-grey-900">
                                        <span id="countto1" />
                                        FREE RETURNS
                                    </h3>
                                    <p className="text-base font-medium leading-7 text-dark-grey-600">All conditions applied</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
