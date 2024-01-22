import React from 'react';

export const Category = () => {
    return (
        <div className="px-12 py-6">
            <div className="flex flex-col md:flex-row gap-10 w-full">
                <div className="h-56 w-1/3 bg-[#acc7d4] flex justify-center items-center relative">
                    <div className="w-9/12 absolute z-20 h-36 border-[15px] border-white border-opacity-0 transition-all duration-300 scale-50 hover:border-opacity-50 hover:scale-100 "></div>
                    <div className="absolute z-10 bg-white px-4 py-2 font-bold font-raleway text-2xl">Men's</div>
                </div>

                <div className="h-56 w-1/3 bg-[#E9C5DF] flex justify-center items-center relative">
                    <div className="w-9/12 absolute z-20 h-36 border-[15px] border-white border-opacity-0 transition-all duration-300 scale-50 hover:border-opacity-50 hover:scale-100 "></div>
                    <div className="absolute z-10 bg-white px-4 py-2 font-bold font-raleway text-2xl">Women's</div>
                </div>

                <div className="h-56 w-1/3 bg-[#DFD8F1] flex justify-center items-center relative">
                    <div className="w-9/12 absolute z-20 h-36 border-[15px] border-white border-opacity-0 transition-all duration-300 scale-50 hover:border-opacity-50 hover:scale-100 "></div>
                    <div className="absolute z-10 bg-white px-4 py-2 font-bold font-raleway text-2xl">Kid's</div>
                </div>
            </div>
        </div>
    );
};
