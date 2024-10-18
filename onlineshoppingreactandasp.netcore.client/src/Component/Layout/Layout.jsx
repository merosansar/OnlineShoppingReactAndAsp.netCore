// src/Layout/Layout.js
import React from 'react';
import NavBar from './Component/Navbar/NavBar'; // Adjust the path if necessary
import Footer from './Component/Footer/Footer'; // Adjust the path if necessary
const Layout = ()=> {
    return (
        <div>
            <NavBar />       
            <Footer />
        </div>
    );
}
export default Layout;
//const Layout = ({ children }) => {
//    return (
//        <div>
//            <NavBar />
//            <div className="content">
//                {children} {/* This is where the page-specific content will be rendered */}
//            </div>
//            <Footer />
//        </div>
//    );
//}
//export default Layout;
