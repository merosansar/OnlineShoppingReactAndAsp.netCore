
// Ensure all imports are at the top
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

import './Register.css';



const Register = () => {
    // Component state
    const [genderList, setGenderList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            passwordHash: password,
            fullName,
            dob: dob ? dob.toISOString() : '',  // Convert Date to ISO string
            genderId: parseInt(gender, 10)      // Ensure genderId is an integer
        };

        try {
            const response = await fetch('/api/user/create', { // Ensure leading slash if proxied
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
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

    useEffect(() => {
        const GetGender = async () => {
            try {
                const response = await axios.get("/api/dropdown/getdropdownlist", {
                    params: { Params: 'Genderdata' } // Use params to send the 'Genderdata' parameter
                });
                console.log("Fetched gender data:", response.data);
                setGenderList(response.data); // Assuming this is an array
            } catch (error) {
                console.error("Error fetching gender data:", error);
            }
        };

        GetGender(); // Call the function to load gender data
    }, []); // Empty dependency array ensures it runs once when the component mounts

  
  
    return (

        <div className="flex shadow border-4">
            <div className="mt-2 mb-2">
                <img src="/SignUp.jpg" className="w-100" />
            </div>

            <form onSubmit={handleSubmit}>
            <div className="mt-2 mb-2 border-4 w-full p-3">
                <div className="bg-purple-500 font-bold text-center text-white p-3 w-full">Sign Up</div>


                    <div className="grid grid-cols-2 gap-4 mt-3 w-full">
                      
                        <div className="flex items-center">
                            <label>Already Registered?</label>  <Link to="/login" className="ml-2 text-blue-600 hover:underline">Login</Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3 w-full">
                     
                    {/* Email */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Email:</label>
                        <input
                            type="email"
                            id="floatingInputEmail"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-2/3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Verification Code */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Verification Code:</label>
                        <input
                            type="text"
                            id="floatingInputVerification"
                            placeholder="Verification Code"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            className="block w-2/3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3 w-full">
                    {/* Password */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Password:</label>
                        <input
                            type="password"
                            id="floatingInputPass"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-2/3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Full Name */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Full Name:</label>
                        <input
                            type="text"
                            id="floatingInputFullname"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="block w-2/3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3 w-full">
                    {/* Date Of Birth */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Birthdate:</label>
                        <div className="block w-2/3 px-4 py-0 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none">  {/* Added a wrapper div with the same width */}
                            <DatePicker
                                selected={dob}
                                onChange={(date) => setDob(date)}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="MM/DD/YYYY"
                                className="w-full px-4 py-2 text-gray-700 bg-white border-none rounded-lg shadow-sm focus:outline-none"
                            />
                        </div>
                            </div>

                    {/* Gender */}
                    <div className="flex items-center">
                        <label className="w-1/3 mt-1 mr-2">Gender:</label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                                className="block w-2/3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            >
                               {/* <option value="">Select Gender</option>*/}
                                {genderList.map((g, index) => (
                                    <option key={g.id} value={g.id}>
                                        {g.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5">
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-white w-1/2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                </div>
            </form>
        </div>

      
    );
   

};

// Ensure export is at the bottom
export default Register;
