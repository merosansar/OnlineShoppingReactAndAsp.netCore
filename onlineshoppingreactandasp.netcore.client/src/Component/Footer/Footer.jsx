
import React from 'react';


const Footer = () => {
    return (
        <footer className=" bottom-0 mb-0 pb-0 left-0 w-full flex flex-col justify-center py-2  text-white  text-center  ">

            <div> <div className="bg-gray-100 px-3 py-7 ">
                {/*<button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">*/}
                {/*    <span className="relative px-10 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">*/}
                {/*        Load More*/}
                {/*    </span>*/}
                {/*</button>*/}
               {/* <button type="button" class="w-[30%] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2">Load More</button>*/}
               {/* <button type="button" class="w-[30%] text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>*/}
                <button type="button" class="w-[30%] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Load More</button>
                {/* <button type="button" class="w-[30%] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Load More</button>*/}
            </div>
                <div className="bg-sky-600  mb-0 pb-0 py-5  ">
                    <p className="text-sm pb-5">&copy; {new Date().getFullYear()} E-Commerce App. All rights reserved.</p>
                </div></div>
           
        </footer>
    );
};

export default Footer;