  import { useState, useEffect } from "react";
  import { jwtDecode } from 'jwt-decode';
  
  const getDates = () => {
    const [dates, setDates] = useState([]);
    const [user, setUser] = useState('')

    useEffect(() => {
        let authToken = JSON.parse(window.localStorage.getItem('authToken'))
        let user = jwtDecode(authToken);
        if (user) {
            setUser(user);
        }
    }, []);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const authToken = JSON.parse(window.localStorage.getItem('authToken'));
          const user = jwtDecode(authToken);
          const response = await fetch(`http://localhost:3000/date/user/${user.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch dates');
          }
  
          const data = await response.json();
          setDates(data);
        } catch (error) {
          console.error('Error fetching dates:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return dates;
  };
  
  export default getDates;