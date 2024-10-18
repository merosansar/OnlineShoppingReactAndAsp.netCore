//import React, { useState } from 'react';

//const AddCart = () => {
//    const [quantity, setQuantity] = useState(1);

//    const handleQuantityChange = (e) => {
//        const value = parseInt(e.target.value);
//        setQuantity(value > 0 ? value : 1);
//    };

//    return (
//        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-6">
//            {/* Product Section */}
//            <div className="lg:w-2/3 bg-white p-4 border rounded-lg">
//                {/* Product Image */}
//                <div className="flex justify-center mb-4">
//                    <img
//                        src="https://localhost:7096/Images/Product/BlackT-Shirt.jpg"
//                        alt="Product"
//                        className="w-72 h-72 object-cover"
//                    />
//                </div>

//                {/* Image Thumbnails */}
//                <div className="flex justify-center space-x-2 mb-4">
//                    {/* Sample Thumbnails */}
//                    <img
//                        src="/path-to-image/thumb1.jpg"
//                        alt="Thumb 1"
//                        className="w-16 h-16 border"
//                    />
//                    <img
//                        src="/path-to-image/thumb2.jpg"
//                        alt="Thumb 2"
//                        className="w-16 h-16 border"
//                    />
//                    <img
//                        src="/path-to-image/thumb3.jpg"
//                        alt="Thumb 3"
//                        className="w-16 h-16 border"
//                    />
//                </div>

//                {/* Product Title */}
//                <h1 className="text-2xl font-semibold mb-2">
//                    24 Hour Auto Reboot Router DC Power Timing Fiber Modem
//                </h1>

//                {/* Product Price */}
//                <div className="text-red-600 text-2xl font-bold mb-2">Rs. 710</div>
//                <div className="text-sm text-gray-500 mb-4">
//                    Was: <span className="line-through">Rs. 711</span> (0.1% OFF)
//                </div>

//                {/* Promotions */}
//                <div className="bg-yellow-200 text-yellow-800 text-sm font-medium p-2 mb-4 inline-block rounded-md">
//                    Min. spend Rs. 9,999
//                </div>

//                {/* Color Family */}
//                <div className="mb-4">
//                    <span className="font-medium">Color Family: </span>Black
//                    <div className="inline-block ml-2 w-6 h-6 bg-black border rounded-full"></div>
//                </div>

//                {/* Quantity Selector */}
//                <div className="mb-4 flex items-center">
//                    <label className="font-medium mr-2">Quantity:</label>
//                    <input
//                        type="number"
//                        value={quantity}
//                        min={1}
//                        onChange={handleQuantityChange}
//                        className="w-16 p-1 border border-gray-300 rounded text-center"
//                    />
//                </div>

//                {/* Action Buttons */}
//                <div className="flex gap-4">
//                    <button className="bg-blue-600 text-white px-6 py-2 rounded">
//                        Buy Now
//                    </button>
//                    <button className="bg-orange-500 text-white px-6 py-2 rounded">
//                        Add to Cart
//                    </button>
//                </div>
//            </div>

//            {/* Delivery & Details Section */}
//            <div className="lg:w-1/3 bg-white p-4 border rounded-lg">
//                <h2 className="font-semibold text-lg mb-4">Delivery Options</h2>
//                <p className="text-sm text-gray-500 mb-2">Standard Delivery: <span className="font-bold">Rs. 70</span></p>
//                <p className="text-sm text-gray-500 mb-4">Get by 18-24 Nov</p>

//                <h2 className="font-semibold text-lg mb-4">Return & Warranty</h2>
//                <p className="text-sm text-gray-500 mb-2">14 Days Free Returns</p>
//                <p className="text-sm text-gray-500 mb-4">Warranty not available</p>

//                <div className="flex justify-center">
//                    <img
//                        src="/path-to-qr-code/qr-code.jpg"
//                        alt="QR Code"
//                        className="w-32 h-32"
//                    />
//                </div>
//            </div>
//        </div>
//    );
//};

//export default AddCart;

import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const AddCart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        if (value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <div className="flex flex-col">
        <div className="flex justify-center p-6">
            {/* Left side: Product Image */}
            <div className="w-1/4">
                <div className="flex flex-col items-center space-y-4">
                    {/* Main Product Image */}
                    <img
                        src="https://localhost:7096/Images/Product/BlackT-Shirt.jpg"
                        alt="Product"
                        className="w-[15rem] h-[20rem] object-cover cursor-pointer"
                    />                 
                </div>
                  
            </div>
            {/* Right side: Product Details */}
            <div className="w-3/4 pl-10">
                <h1 className="text-xl font-semibold">Staylist Gaun Dupatta Set</h1>
                <div className="flex items-center my-2">
                    <span className="text-yellow-500 text-xs">⭐⭐⭐⭐</span>
                    <span className="ml-2 text-sm">(2 Ratings)</span>
                </div>
                <p className="text-lg text-red-600 font-bold">Rs. 1,799</p>
                <p className="text-gray-500 text-sm mb-4">Min. spend Rs. 9,999</p>

                {/* Color Family */}
                <div className="my-4">
                    <p className="font-semibold mb-2">Color Family</p>
                    <div className="flex space-x-2">
                        <img
                            src="/images/color1.jpg"
                            alt="Pink"
                            className="w-12 h-12 object-cover border border-gray-200 p-1 cursor-pointer"
                        />
                        <img
                            src="/images/color2.jpg"
                            alt="Purple"
                            className="w-12 h-12 border border-gray-200 p-1 cursor-pointer"
                        />
                    </div>
                </div>

                    {/* Size Selector */}
                    <div className="my-4">
                        <p className="font-semibold mb-2">Size</p>
                        <div className="flex space-x-2">
                            {["M", "42", "44", "S", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    className="border border-gray-300 py-2 px-4 w-12 text-xs rounded cursor-pointer hover:border-orange-500 hover:text-gray-700"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
               
            </div>

         
            </div>
            <div className="flex flex-row pt-0 mt-0">

                <div className="w-1/4">
                    <div className="my-4 flex  space-x-4    w-1/4" >
                       {/* Left Arrow */}
                        <button className="text-gray-400 hover:text-gray-600 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            </button>
                     
                        {/* Thumbnail Section */}
                        <div className="flex flex-row space-x-2 border border-gray-300 py-2 px-4 w-40 hover:border-orange-500">
                            {/* Thumbnails */}
                            <img
                                src="/path-to-image/thumb1.jpg"
                                alt="Thumbnail 1"
                                className="w-16 h-12 object-cover border border-gray-200 cursor-pointer"
                            />

                        </div>
                      
                        {/* Right Arrow */}
                        <button className="text-gray-400 hover:text-gray-600 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            </button>
                      
                    </div>

                </div>
                <div className="w-3/4 flex flex-col  pl-10 pt-0 mt-0">
               

                {/* Quantity Selector */}
                <div className="my-4">
                    <p className="font-semibold mb-2">Quantity</p>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => handleQuantityChange(quantity - 1)}
                            className="border px-3 py-1 text-lg"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(quantity + 1)}
                            className="border px-3 py-1 text-lg"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                        <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700">
                        Buy Now
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-900">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;





















