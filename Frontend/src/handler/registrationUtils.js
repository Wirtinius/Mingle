const registerUser = async (username, name, surname, email, age, nationality, password) => {
    console.log('Submitting:', {
      'username': username,
      'name': name,
      'surname': surname,
      'email': email,
      'age': age,
      'nationality': nationality,
      'password': password,
    });
  
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'username': username,
          'name': name,
          'surname': surname,
          'email': email,
          'age': age,
          'nationality': nationality,
          'password': password,
        }),
      });
  
      if (response.ok) {
        console.log('Registration successful');
        return { success: true };
      } else {
        const responseData = await response.json();
        if (response.status === 400) {
          return { error: responseData };
        } else {
          console.error('Registration failed:', responseData);
          return { error: 'Registration failed' };
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { error: 'Error during registration' };
    }
  };
  
  export default registerUser;
  