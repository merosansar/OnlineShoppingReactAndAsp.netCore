import React from 'react';
import { FaHeart, FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
function Product() {
    return (
        


        <div className="flex mb-20 pb-10  ">
        <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
            <div className="p-2 mb-4">
                {/* Product Image and Carousel */}
                <div className="relative">
                    <img
                        className="rounded-t-lg"
                        src="shoe.jpg"
                        alt="Product"
                    />
                    {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                    {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                    {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                    {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                    {/*</div>*/}
                </div>

                {/* Product Information */}
                <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                    Apple iMac 27"
                </h5>
                <p className="text-xs text-gray-500">
                    Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                </p>

                {/* Pricing and Installments */}
                <p className="mt-1 text-xs text-blue-600">
                    <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                </p>

                {/* Price */}
                <div className="flex items-center mt-2">
                    <span className="text-lg font-bold text-gray-900">$1199</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-1 mt-2">
                    <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                    <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                    <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                </div>

                {/* Wishlist and Buy Buttons */}
                <div className="flex justify-between items-center mt-3">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                        <FaHeart className="w-3 h-3" />
                        <span className="text-xs">Wishlist</span>
                    </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
            </div>       

        </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
            <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2 ">
                <div className="p-2 mb-4">
                    {/* Product Image and Carousel */}
                    <div className="relative">
                        <img
                            className="rounded-t-lg"
                            src="shoe.jpg"
                            alt="Product"
                        />
                        {/*<div className="absolute inset-0 flex justify-between items-center px-2">*/}
                        {/*    <FaArrowCircleLeft className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*    <span className="text-xs text-gray-500">1 of 4</span>*/}
                        {/*    <FaArrowCircleRight className="text-gray-400 cursor-pointer w-4 h-4" />*/}
                        {/*</div>*/}
                    </div>

                    {/* Product Information */}
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                        Apple iMac 27"
                    </h5>
                    <p className="text-xs text-gray-500">
                        Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, macOS Sonoma
                    </p>

                    {/* Pricing and Installments */}
                    <p className="mt-1 text-xs text-blue-600">
                        <a href="#" className="hover:underline">Buy with Flowbite Wallet</a>
                    </p>

                    {/* Price */}
                    <div className="flex items-center mt-2">
                        <span className="text-lg font-bold text-gray-900">$1199</span>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-1 mt-2">
                        <div className="w-4 h-4 bg-gray-800 rounded-full border"></div>
                        <div className="w-4 h-4 bg-blue-600 rounded-full border"></div>
                        <div className="w-4 h-4 bg-pink-500 rounded-full border"></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border"></div>
                    </div>

                    {/* Wishlist and Buy Buttons */}
                    <div className="flex justify-between items-center mt-3">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                            <FaHeart className="w-3 h-3" />
                            <span className="text-xs">Wishlist</span>
                        </button>
                        <button className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-2 py-1 text-center">
                            Add To Cart
                        </button>
                    </div>
                </div>


            </div>
        </div>








    );
};
export default Product;