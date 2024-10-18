import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailUser() {
    const { id } = useParams(); // Get the user id from the URL
    const [user, setUser] = useState({ userName: '', email: '', passwordHash: '' });

    useEffect(() => {
        // Fetch user data by ID from the backend
        async function fetchUser() {
            const response = await fetch(`/api/user/detail/${id}`);
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [id]);

  

    return (
        <div>
            <h1>User Details</h1>
            <form>
                <div>
                    <label>Email</label>:<label>{user.email}</label>
                   
                </div>
                <div>
                    <label>Username</label>:<label>{user.userName}</label>
                   
                </div>
                <div>
                    <label>Password</label>:<label>{user.passwordHash}</label>
                   
                </div>
                <button type="button">Ok</button>
            </form>
        </div>
    );
}

export default DetailUser;