import React, { useState } from 'react';
import authService from '../services/authService'; // Import your authService with getUsers function

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      // Fetch users from the server
      const response = await authService.getUsers(); // You should implement this function in your authService
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
