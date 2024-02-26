import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

function getUser() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const authToken = JSON.parse(window.localStorage.getItem('authToken'));
    if (authToken) {
      const decodedUser = jwtDecode(authToken);
      setUser(decodedUser);
    }
  }, []);

  return user;
}

export default getUser;
