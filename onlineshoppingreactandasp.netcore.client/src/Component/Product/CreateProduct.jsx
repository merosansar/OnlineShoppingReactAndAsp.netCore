import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateProduct = () => {
    const [listcat, setListCat] = useState([]);
    const [listsubcat, setListSubCat] = useState([]);
    const [listitem, setListItem] = useState([]);
    const [catid, setCatId] = useState('');
    const [subcatid, setSubCatId] = useState('');
    const [itemid, setItemId] = useState('');
    const [productname, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageFile, setImageFile] = useState(null);


    // Handle file input
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };
    // Fetch category list on component mount
    useEffect(() => {
        const GetCatList = async () => {
            try {
                const response = await axios.get('/api/dropdown/getdropdownlist', {
                    params: {
                        param1: 'CatData',  // First parameter
                        param2: '', // Second parameter
                        param3:'Category'

                    }
                });
                setListCat(response.data);
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };
        GetCatList();
    }, []);

    // Fetch subcategory list when category is selected
    useEffect(() => {
        if (catid) {
            const GetSubCatList = async () => {
                try {
                    const response = await axios.get('/api/dropdown/getdropdownlist', {
                        params: { param1: 'SubCatData', param2: catid, param3: 'SubCategory' }
                    });
                    setListSubCat(response.data);
                } catch (error) {
                    console.error('Error fetching subcategory data:', error);
                }
            };
            GetSubCatList();
        } else {
            setListSubCat([]);
        }
    }, [catid]);

    // Fetch item list when subcategory is selected
    useEffect(() => {
        if (subcatid) {
            const GetItemList = async () => {
                try {
                    const response = await axios.get('/api/dropdown/getdropdownlist', {
                        params: { param1: 'ItemData', param2: subcatid, param3: 'Item' }
                    });
                    setListItem(response.data);
                } catch (error) {
                    console.error('Error fetching item data:', error);
                }
            };
            GetItemList();
        } else {
            setListItem([]);
        }
    }, [subcatid]);

  
    // Price and quantity validation
    const handlePriceChange = (e) => {
        let value = e.target.value.replace(/[^0-9.]/g, ''); // Remove non-numeric except decimal
        const parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts[1]; // Ensure only one decimal
        }
        setPrice(value);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Only numbers
        setQuantity(value);
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = 0;
        const rating = 0; 
        const formData = new FormData();
        formData.append("id", id); 
        formData.append("categoryId", catid);
        formData.append("subcatId", subcatid);
        formData.append("itemId", itemid);
        formData.append("name", productname);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("imageUrl", imageFile); 
        formData.append("rating", rating);

        
        

        try {
            const response = await axios.post('/api/product/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="flex shadow border-4">
            <div className="mt-2 mb-2">
                <img src="/Category.jpg" className="w-100" alt="Category" />
            </div>

            <form onSubmit={handleSubmit} className="w-full p-3">
                <div className="bg-purple-500 font-bold text-center text-white p-3">Add Product</div>

                {/* Category dropdown */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Category Name:</label>
                    <select
                        value={catid}
                        onChange={(e) => setCatId(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    >
                      {/*  <option value="">Select Category</option>*/}
                        {listcat.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* SubCategory dropdown */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">SubCategory Name:</label>
                    <select
                        value={subcatid}
                        onChange={(e) => setSubCatId(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    >
                      {/*  <option value="">Select SubCategory</option>*/}
                        {listsubcat.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Item dropdown */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Item Name:</label>
                    <select
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    >
                       {/* <option value="">Select Item</option>*/}
                        {listitem.map((i) => (
                            <option key={i.id} value={i.id}>
                                {i.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Name */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Product Name:</label>
                    <input
                        type="text"
                        value={productname}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                {/* Price */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Price:</label>
                    <input
                        type="text"
                        value={price}
                        onChange={handlePriceChange}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                {/* Quantity */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Quantity:</label>
                    <input
                        type="text"
                        value={quantity}
                        onChange={handleQuantityChange}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                {/* Description */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                {/* Image Upload */}
                <div className="mt-3">
                    <label className="block text-gray-700 font-bold mb-1">Upload Image:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                        className="block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm"
                    />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;