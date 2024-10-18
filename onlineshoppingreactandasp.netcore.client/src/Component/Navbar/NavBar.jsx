import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // For optimized CSS
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function NavBar() {
    return (
        <header>
            <nav className="bg-sky-600 p-4">
                <div className="container mx-auto flex justify-between items-center">                
                    <div className="flex  text-2xl font-bold flex-row ">
                        <a href="#">Brand</a>
                        <div className="flex items-center border border-white-300 rounded-lg overflow-hidden flex-row mx-4">
                            {/*  <!-- Search Icon -->*/}
                            <input type="text" placeholder="Search" className="w-100 px-6 py-2 focus:outline-none  text-black-500" />
                            <span className="pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                          {/*  <!-- Search Input -->*/}                           
                        </div>
                    </div>                   
                    <div className="hidden md:flex space-x-4">
                      
                        <a href="/login" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"> Login </a> <a className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"> |</a>
                        <a href="/signup" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"> SignUp </a>
                        <a href="/category" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"> Add Category </a>
                        <a href="/createproduct" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"> Product </a>

                       
                        {/*<a href="#" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>*/}
                        {/*<a href="#" className="text-white hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>*/}
                    </div>                 
                    <div class="md:hidden flex items-center">
                        <button click="open = !open" className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                   </button>
                </div>
          </div>
          {/*  <!-- Mobile Menu -->*/}
                <div x-data="{ open: false }" x-show="open" className="md:hidden">
                    <div className="flex flex-col mt-2 space-y-2">
                    <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Login</a>
                        <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">SignUp</a>
                    {/*<a href="#" class="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Services</a>*/}
                    {/*<a href="#" class="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>*/}
                </div>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;
