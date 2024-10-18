import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaInfoCircle } from 'react-icons/fa'; // Font Awesome icons
/*import 'datatables.net-dt/css/jquery.dataTables.min.css';  // Correct way to import CSS*/
import 'datatables.net'; // 
import $ from 'jquery';




function UserList() {
    const [userlists, setUserlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        populateUserData();
    }, []);

    useEffect(() => {
        // Initialize DataTables
        if (userlists.length > 0) {
            $('#userTable').DataTable();
        }
    }, [userlists]);

    const contents = userlists.length === 0
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started.</em></p>
        : <table id="userTable" className="min-w-full table-auto border-collapse border border-gray-300 my-5 p-3 h-500">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-center">Sno</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">UserName</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Full Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Address</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Operation</th>
                </tr>
            </thead>
            <tbody>
                {userlists.map((userlist, index) =>
                    <tr key={userlist.id} className="text-center">
                        <td>{index + 1}</td>
                        <td>{userlist.userName}</td>
                        <td>{userlist.email}</td>
                        <td>{userlist.fullName}</td>
                        <td>{userlist.address}</td>
                        <td className="flex justify-center items-center space-x-2">
                            {/* Edit Icon */}
                            <FaEdit
                                className="cursor-pointer text-blue-500"
                                onClick={() => handleEdit(userlist.id)}
                                title="Edit"
                            />
                            {/* Delete Icon */}
                            <FaTrashAlt
                                className="cursor-pointer text-blue-500"
                                onClick={() => handleDelete(userlist.id)}
                                title="Delete"
                            />
                            {/* Detail Icon */}
                            <FaInfoCircle
                                className="cursor-pointer text-blue-500"
                                onClick={() => handleDetail(userlist.id)}
                                title="View Details"
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">UserList</h1>
           {/* <p>This component demonstrates fetching data from the server.</p>*/}
            {contents}
        </div>
    );

    async function populateUserData() {
        const response = await fetch('/api/user/get');
        const data = await response.json();
        setUserlist(data);
    }

    async function handleEdit(id) {
        try {
            const response = await fetch(`/api/user/edit/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error:', errorText);
                return;
            }
            const data = await response.json();
            console.log('Response data:', data);

            navigate(`/EditUser/${id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function handleDelete(id) {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (confirmed) {
            try {
                const response = await fetch(`/api/user/delete/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Server error:', errorText);
                    return;
                }
                populateUserData();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    async function handleDetail(id) {
        try {
            const response = await fetch(`/api/user/detail/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error:', errorText);
                return;
            }
            const data = await response.json();
            console.log('Response data:', data);

            navigate(`/DetailUser/${id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default UserList;