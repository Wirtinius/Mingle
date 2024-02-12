import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function getUser() {
  const [user, setUser] = useState('')

  useEffect(() => {
    let authToken = JSON.parse(window.localStorage.getItem('authToken'))
    let user = jwtDecode(authToken);
    if (user) {
      setUser(user);
    }
  }, []);

  console.log(user);
}

export default getUser;