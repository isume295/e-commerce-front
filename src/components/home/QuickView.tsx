import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { hideItem } from '../../redux/RenderSlice';
import { renderSelector } from '../../redux/store';
import { IoClose } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { IoStarHalf } from 'react-icons/io5';

export const QuickView = () => {
    const dispatch = useAppDispatch();
    const { showQuickView } = useAppSelector(renderSelector);

    const handleClose = () => {
        try {
            dispatch(hideItem());
        } catch (error) {
            console.log(error);
        }
    };
    return (
        // <div
        //     className={`h-screen w-[40%] z-50 fixed top-0 right-0 opacity-0 border bg-white transform translate-x-full ${
        //         showQuickView ? 'opacity-100 translate-x-[100]' : ''
        //     } transition-all duration-200 flex flex-col items-center gap-4 overflow-y-scroll overflow-x-hidden`}
        // >
        <div
            className={`h-screen w-[40%] z-50 fixed top-0 right-0 opacity-0 border bg-white transform translate-x-full ${
                showQuickView ? 'opacity-100 translate-x-[-100]' : ''
            } transition-all duration-200 flex flex-col items-center gap-4 overflow-y-scroll overflow-x-hidden`}
        >
            <div className=" flex items-center justify-between w-full">
                <h1 className="px-6 py-2 font-bold text-lg text-mainColor">Quick view</h1>
                <button className="p-2 text-xl font-bold text-mainColor" onClick={handleClose}>
                    <IoClose />
                </button>
            </div>
            <div className="flex flex-col px-6 gap-4 w-full h-full ">
                <div className="flex w-full h-[45%] bg-red-500 justify-center items-center">
                    <img
                        className=" w-full h-full object-center object-cover "
                        src="https://media.istockphoto.com/id/1006555450/photo/beautiful-woman-in-a-green-gown-on-the-beach.jpg?s=612x612&w=0&k=20&c=MOPvftMsBkq1TyMZUzBOY9cuOLteZ-CS_G9P_ytuZ_8="
                        alt="img"
                    />
                </div>
                {/* title */}
                <div className=" w-full flex justify-between item-center text-customDark">
                    <div className="flex flex-col justify-center items-start ">
                        <h1 className="text-xl font-raleway font-bold">Green long dress</h1>
                        <div className="flex gap-1 text-xl text-mainColor">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStarHalf />
                        </div>
                    </div>
                    <h1 className="text-xl font-raleway font-bold">$55</h1>
                </div>
                {/* color */}
                <div className="flex items-center space-x-4">
                    <div className="inline-flex bg-slate-300 p-1 rounded-full items-center">
                        <button className="h-5 w-5 rounded-full border bg-green-600 text-blue-500" name="radio" />
                    </div>
                    <div className="inline-flex items-center">
                        <button className="h-5 w-5 rounded-full border bg-red-600 text-blue-500" name="radio" />
                    </div>
                    <div className="inline-flex items-center">
                        <button className="h-5 w-5 rounded-full border bg-blue-600 text-blue-500" name="radio" />
                    </div>
                    <div className="inline-flex items-center">
                        <button className="h-5 w-5 rounded-full border bg-white text-blue-500" name="radio" />
                    </div>
                    <div className="inline-flex items-center">
                        <button className="h-5 w-5 rounded-full border bg-black text-blue-500" name="radio" />
                    </div>
                </div>
                {/* size */}
                <div className="flex justify-start items-center gap-2">
                    <div className="flex w-12 h-12 border rounded-lg justify-center items-center bg-mainColor text-white font-bold text-lg">sm</div>
                    <div className="flex w-12 h-12 border rounded-lg justify-center items-center">md</div>
                    <div className="flex w-12 h-12 border rounded-lg justify-center items-center">lg</div>
                    <div className="flex w-12 h-12 border rounded-lg justify-center items-center">xl</div>
                    <div className="flex w-12 h-12 border rounded-lg justify-center items-center">xxl</div>
                </div>

                {/* description */}
                <div className="flex flex-col w-full">
                    <h1 className="text-customDark font-bold">Description</h1>
                    <p className="text-customDark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sint doloribus veniam soluta dicta et ipsam totam corporis, vero eaque, ab repellat sapiente repudiandae
                        aliquam rerum dolores deleniti voluptatibus esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic doloremque facere eos autem blanditiis, iste maiores
                        officia voluptas suscipit eius vitae ab, consectetur consequuntur soluta? Fugiat magnam odit deleniti.
                    </p>
                </div>

                {/* actions */}
                <div className="flex w-full pb-8 gap-2">
                    <button className="w-8/12 p-2 rounded-lg bg-mainColor text-white font-bold hover:bg-darkMain">Add to Cart</button>
                    <button className="w-4/12 rounded-lg bg-customDark text-white font-bold hover:opacity-85">details</button>
                </div>
            </div>
        </div>
    );
};
