const createDate = async (userId, partnerId, location, dateTime) => {
    console.log('Submitting:', {
      'userId': userId,
      'partnerId': partnerId,
      'location': location,
      'dateTime': dateTime
    });
  
    try {
      const response = await fetch('http://localhost:4000/date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'userId': userId,
          'partnerId': partnerId,
          'location': location,
          'dateTime': dateTime
        }),
      });
  
      if (response.ok) {
        console.log('Date Creation Successful');
        return { success: true };
      } else {
        const responseData = await response.json();
        if (response.status === 400) {
          return { error: responseData };
        } else {
          console.error('Date Creation failed:', responseData);
          return { error: 'Date Creation failed' };
        }
      }
    } catch (error) {
      console.error('Error during date creation:', error);
      return { error: 'Error during date creation' };
    }
  };
  
  export default createDate;
  