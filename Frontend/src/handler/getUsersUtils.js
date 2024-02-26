import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const getUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = JSON.parse(window.localStorage.getItem('authToken'));
        const user = jwtDecode(authToken);
        const response = await fetch('http://localhost:4000/auth/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return users;
};

export default getUsers;