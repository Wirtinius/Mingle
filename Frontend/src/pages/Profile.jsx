import React, { useState, useEffect } from 'react';
import './Profile.css';
import getDates from '../handler/dateRequestUtils';
import getLocations from '../handler/locationUtils';
function Profile() {
  const [user, setUser] = useState({
    name: 'Eren',
    surname: 'Yeager',
    age: 19,
    nationality: 'Kazakh',
    dateRequests: [{
      location: "cafe",
      date: '2024-02-14',
      status: 'In Progress'
    },]
  });

  const dates = getDates();

  const handleAccept = (date) => {

    const acceptDate = async () => {
      const authToken = JSON.parse(window.localStorage.getItem('authToken'));
      await fetch(`http://localhost:3000/date//accept/${date._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      });
    };

    acceptDate();
    console.log(`Accepted date request for ${date}`);
  };
  // let locations = getDates().map(({ locationId }) => locationId);
  console.log(getLocations())

  const handleReject = (date) => {
    const declineDate = async () => {
      const authToken = JSON.parse(window.localStorage.getItem('authToken'));
      await fetch(`http://localhost:3000/date//decline/${date._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      });
    };

    declineDate();
    console.log(`Rejected date request for ${date}`);
  };

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <div>
        <strong>Name:</strong> {user.name} {user.surname}
      </div>
      <div>
        <strong>Age:</strong> {user.age}
      </div>
      <div>
        <strong>Nationality:</strong> {user.nationality}
      </div>
      <div className="date-requests">
        <h2>Date Requests</h2>
        {dates.map((date) => (
          <div key={date._id}>
            <p>{date.location}</p>
            <p>{date.date}</p>
            <p>{date._id}</p>
            {date.status === 'In Progress' && (
              <div>
                <button onClick={() => handleAccept(date)}>Accept</button>
                <button onClick={() => handleReject(date)}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
