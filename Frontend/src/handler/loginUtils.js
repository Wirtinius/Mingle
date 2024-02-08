const loginUser = async (username, password) => {
    console.log('Submitting:', {
      'username': username,
      'password': password,
    });
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': username,
          'password': password,
        }),
      });

      let data = await response.json()
      if (response.ok) {
        console.log('Login successful');
        localStorage.setItem('authToken', JSON.stringify(data['token']))        

        return { success: true };
      } else {
        const responseData = await response.json();
        if (response.status === 400) {
          return { error: responseData };
        } else {
          console.error('Login failed:', responseData);
          return { error: 'Login failed' };
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { error: 'Error during registration' };
    }
  };
  
  export default loginUser;
  