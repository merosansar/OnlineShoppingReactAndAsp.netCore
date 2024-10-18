import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Carousel = ({ slids }) => {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slids.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slids.length - 1 ? 0 : current + 1);
    };

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 4000); // 4000ms = 4 seconds

        return () => clearInterval(slideInterval);
    }, [current]);

    return (
        <div className="flex flex-row pb-10">

            {/* Carousel Section */}
            <div className="w-[46%] ml-2 mr-2 pt-2  mb-3 relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition ease-out duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slids.map((s, index) => (
                            <img
                                key={index}
                                src={s}
                                alt={`Slide ${index + 1}`}
                                className="w-full"
                                style={{ height: `25em` }}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
                        <button
                            className="text-white bg-black bg-opacity-50 rounded-full p-2"
                            onClick={previousSlide}
                        >
                            <FaArrowCircleLeft size={40} />
                        </button>
                        <button
                            className="text-white bg-black bg-opacity-50 rounded-full p-2"
                            onClick={nextSlide}
                        >
                            <FaArrowCircleRight size={40} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Optional Side Section */}
            <div className="w-[20%] shadow">
                {/* Add content for the right side here */}
            </div>
        </div>
    );
};

export default Carousel;