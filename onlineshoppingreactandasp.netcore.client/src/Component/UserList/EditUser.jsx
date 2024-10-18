import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditUser() {
    const { id } = useParams(); // Get the user id from the URL
    const [user, setUser] = useState({ userName: '', email: '', passwordHash: '' });

    useEffect(() => {
        // Fetch user data by ID from the backend
        async function fetchUser() {
            const response = await fetch(`/api/user/edit/${id}`);
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/user/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            alert('User updated successfully');
            // Optionally, redirect to a user list or detail page
        } else {
            alert('Failed to update user');
        }
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={user.userName}
                        onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={user.passwordHash}
                        onChange={(e) => setUser({ ...user, passwordHash: e.target.value })}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default EditUser;