import getDates from './dateRequestUtils'
import { useState, useEffect } from "react";

const getLocations = async () => {
    const [locations, setLocations] = useState([]); 
    const locationIds = getDates().map(({ locationId }) => locationId);

    try {
        const authToken = JSON.parse(window.localStorage.getItem('authToken'));
        const response = await fetch(`http://localhost:4000/place/location`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({'locationIds': locationIds })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch dates');
        }

        const data = await response.json();
        console.log(data)
        setLocations(data);
        // console.log(locations + "aaa");
    } catch (error) {
        console.error('Error fetching dates:', error);
    }

    return locations;
};

export default getLocations;
