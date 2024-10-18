import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call the API to authenticate the user

        const userData = {
            email,
            passwordHash: password
           
        };
        try {
            const response = await fetch('/api/user/login', { // Ensure leading slash if proxied
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error:', errorText);
                return;
            }

            const data = await response.json();
            console.log('Response data:', data);
            navigate('/login');
            /*  navigate('./Component/Login/Login');*/
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <div  className="flex  p-20 pt-0 pb-0">
            <div className="shadow ">
                <img src="/Login.jpg" />
            </div>
            <div className="flex-1  wrap" >
                <form onSubmit={handleSubmit}>
              
                <div className="p-4 border-5 shadow " >
                        <div className="bg-purple-600 text-center p-4  text-white font-bold"> Login</div>
                    <div className="flex-1 flex-row space-around mt-2">

                        <div>    <label className="mt-1 mr-2" >Email:</label>  </div>
                      
                        <div>  <input
                            type="email"
                            id="floatingInputemail"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                            </div> 
                    </div>

                    <div className="flex-1 flex-row space-around mt-2">
                        <div>   <label> Password:</label></div>
                        <div>    <input
                            id="floatingPassword"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                        </div>
                    </div>
                    <div className="flex-1 flex-row space-around mt-1">
                            <div>
                                <button type="submit" class="text-white w-full  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2">Login </button>


                        </div>

                    </div>


                    <div className="flex-1 flex-row space-around mt-2">
                        <div>
                        
                            <button
                                className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                            >
                                <FcGoogle className="mr-2" size={24} />
                                Login with Google
                            </button>
                        </div>
                       
                    </div>
                   
                        <div className="flex-1 flex-row space-around   mt-2">
                            <div>

                                <label className="text-black">New User?</label>
                                <Link
                                    to="/signup"
                                    className="ml-2 text-blue-600 hover:underline"
                                >
                                    Register
                                </Link>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>


        //<div className="Userlogin-container form-floating mb-3">
        //    <form onSubmit={handleSubmit}>
        //        <div className="d-flex flex-direction-row  justify-content-end">
        //            <label >New User?</label>   <Link to="/" className="bg-color-Blue">Register</Link>
        //        </div>
        //        <div class="form-floating mb-3">
                   
        //            <input
        //                type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
        //                value={email}
        //                onChange={(e) => setEmail(e.target.value)}
        //                required
        //            />
        //            <label for="floatingInput " >Email address</label>
        //        </div>
        //        <div class="form-floating mb-3">
                  
        //            <input class="form-control" id="floatingPassword" placeholder="Password"
        //                type="password"
        //                value={password}
        //                onChange={(e) => setPassword(e.target.value)}
        //                required
        //            />
        //            <label for="floatingPassword">Password</label>
        //        </div>
        //        <div className="d-flex flex-column  justify-content-center wrap">
        //            <button className="mb-2" type="submit" id="btnLogin">Login</button>
        //            <span className="text-center">OR</span>
        //            <button className="my-2" type="submit" id="btnLogin"><i></i> Login with google</button>
        //            <button className="my-2" type="submit" id="btnLogin">Login with facebook</button>
        //        </div>
        //        <div className="d-flex flex-direction-row  justify-content-end">
        //           <a className="bg-color-Blue">Forgot Password</a>
        //        </div>
        //    </form>
        //</div>
    );
};

export default Login;