import React, { useState } from 'react';
import './Profile.css';

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

  const handleAccept = (date) => {
    // Handle accept logic here
    console.log(`Accepted date request for ${date}`);
  };

  const handleReject = (date) => {
    // Handle reject logic here
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
        {user.dateRequests.map((request, index) => (
          <div key={index}>
            <p>{request.location}</p>
            <p>{request.date}</p>
            {request.status === 'In Progress' && (
              <div>
                <button onClick={() => handleAccept(request.date)}>Accept</button>
                <button onClick={() => handleReject(request.date)}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
