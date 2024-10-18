


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const [list, setList] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImageFile] = useState(null);

    // Handle file input
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id",name);
        formData.append("description",description);
        formData.append("image",image); // Ensure this is the file object

        try {
            const response = await axios.post('/api/category/add',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    /* Fetch dropdown list*/
    useEffect(() => {
        const getList = async () => {
            try {
                const response = await axios.get('/api/dropdown/getdropdownlist', {
                    params: { Params: 'CatData' }
                });
                setList(response.data);
            } catch (error) {
                console.error('Error fetching list data:', error);
            }
        };

        getList();
    }, []);

    return (
        <div className="flex shadow border-4">
            <div className="mt-2 mb-2">
                <img src="/Category.jpg" className="w-100" alt="Category" />
            </div>

            <form onSubmit={handleSubmit} className="w-full p-3">
                <div className="bg-purple-500 font-bold text-center text-white p-3">Add Category</div>

                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Category Name:</label>
                    <select
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    >
                        {list.map((g) => (
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Description:</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Upload Image:</label>
                    <input
                        type="file"
                        id="imageFile"
                        onChange={handleFileChange}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mt-5 flex justify-center">
                    <button
                        type="submit"
                        className="text-white w-1/2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Category;