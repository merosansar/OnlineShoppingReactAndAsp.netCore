import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { FaHeart, FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        populateCategoryData();
    }, []);

    async function populateCategoryData() {
        try {
            const response = await fetch('api/category/index');
            const data = await response.json();
            setCategoryList(data);
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    }

    return (
        <div className="category-list  flex flex-wrap justify-start">
            {categoryList.map((category, index) => (
                <div key={index} className="flex  mb-4 pb-4">
                    <div className="max-w-[14rem] bg-white border border-gray-200 rounded-lg shadow-md mt-2 ml-2">
                        <div className="p-2 mb-4">
                            {/* Product Image */}
                            <div className="relative">
                                <img
                                    className="rounded-t-lg w-[15rem] h-[15rem] object-cover"
                               

                                    src={category.imageUrl}                                      

                                    alt={category.name}
                                   
                                />
                            </div>

                            {/* Product Information */}
                            <h5 className="text-sm font-semibold tracking-tight text-gray-900 mt-2">
                                {category.name}
                            </h5>
                            <p className="text-s  text-orange-400">
                                Rs: ${category.price.toFixed(2)}
                            </p>

                            {/* Wishlist and Buy Buttons */}
                            <div className="flex justify-between items-center mt-3">
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                                    <FaHeart className="w-3 h-3" />
                                    <span className="text-xs">Wishlist</span>
                                </button>
                                <button style={{ fontSize: '10px' }} className="text-white w-1/2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg px-2 py-1 text-center">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;