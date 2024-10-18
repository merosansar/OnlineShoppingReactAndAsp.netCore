


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';*/
import NavBar from './Component/Navbar/NavBar'; // Adjust the path if necessary
import Footer from './Component/Footer/Footer'; // Adjust the path if necessary
import UpperFooter from './Component/UpperFooter/UpperFooter'; // Adjust the path if necessary

/*import HomePage from './Component/Pages/HomePage'; // Example page component*/
import Login from './Component/Login/Login'; // Example page component*/
import Register from './Component/Register/Register'; // Example page component
import UserList from './Component/UserList/UserList'; // Example page component
import EditUser from './Component/UserList/EditUser';
import DetailUser from './Component/UserList/DetailUser';
import Carousel from './Component/Carousel/Carousel';
import Product from './Component/Product/Product';
import Category from './Component/Category/Category';
import CategoryList from './Component/Category/CategoryList';
import CreateProduct from './Component/Product/CreateProduct';
import AddCart from './Component/Product/AddCart';









//const slids = ["https://media.istockphoto.com/id/2006076692/photo/little-lake.webp?s=1024x1024&w=is&k=20&c=WQO4iYjFzBrVSleDmhRQxHkjDiWZfT6Xdnol4_VU5wc=",
//    "https://media.istockphoto.com/id/1431021822/photo/happy-hiker-with-raised-arms-on-top-of-the-mountain.jpg?s=1024x1024&w=is&k=20&c=G5ZgCdHmYTL2A126lypnqLr-922SpdURBVolvXRdMDQ=",
//    "https://media.istockphoto.com/id/2006076692/photo/little-lake.webp?s=1024x1024&w=is&k=20&c=WQO4iYjFzBrVSleDmhRQxHkjDiWZfT6Xdnol4_VU5wc=",
//    "https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg",
//    "https://media.istockphoto.com/id/2006076692/photo/little-lake.webp?s=1024x1024&w=is&k=20&c=WQO4iYjFzBrVSleDmhRQxHkjDiWZfT6Xdnol4_VU5wc=",
//    "https://media.istockphoto.com/id/2006076692/photo/little-lake.webp?s=1024x1024&w=is&k=20&c=WQO4iYjFzBrVSleDmhRQxHkjDiWZfT6Xdnol4_VU5wc=",
//    "https://media.istockphoto.com/id/2006076692/photo/little-lake.webp?s=1024x1024&w=is&k=20&c=WQO4iYjFzBrVSleDmhRQxHkjDiWZfT6Xdnol4_VU5wc=",
//    // Add more image URLs as needed
//];



const slids = [
    "/Hill.jpg",  // Replace with your actual image names
    "/shop.jpg",
    "/bags.jpg",
   
    // Add more image URLs as needed
];



// HomePage component that includes both the carousel and products
const HomePage = () => {
    return (
        <div>
            <Carousel slids={slids} /> {/* Carousel component */}
            <CategoryList /> {/* Product component */}
        </div>
    );
}

const App = () => {
    return (
        <Router>
            <div>
                <NavBar /> {/* Navbar will always be displayed */}
                <Routes>
                  {/*  <Route path="/" element={<HomePage />} />*/}

                    <Route path="/" element={<AddCart />} />
                  {/*  <Route path="/" element={<UserList />} />*/}
                    <Route path="/signup" element={<Register />} /> {/* Correct path for register */}
                    <Route path="/login" element={<Login />} /> {/* Correct path for login */}
                    <Route path="/EditUser/:id" element={<EditUser />} />
                    <Route path="/DetailUser/:id" element={<DetailUser />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/createproduct" element={<CreateProduct />} />
                    
                  
                </Routes>
                <Footer /> {/* Footer will always be displayed */}
            </div>
        </Router>
    );
}
export default App;