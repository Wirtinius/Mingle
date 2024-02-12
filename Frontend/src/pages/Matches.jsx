import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import createDate from '../handler/dateUtils';
import getUser from '../handler/currentUserUtils';
import getUsers from '../handler/getUsersUtils';
import { jwtDecode } from 'jwt-decode';
import './Matches.css';

function Matches() {
  const users = getUsers();
    const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    let authToken = JSON.parse(window.localStorage.getItem('authToken'))
    let currentUser = jwtDecode(authToken);
    if (currentUser) {
        setCurrentUser(currentUser);
    }
}, []);
  
  console.log(users);

  const swiped = (direction, idToDelete) => {
    console.log('Removing: ', idToDelete);
    // Remove the swiped user from the list
    getUsers(users.filter(user => user.id !== idToDelete));
  };

  const outOfFrame = (id) => {
    console.log(id + ' left the screen');
  };

  const handleCreateDate = async (userId, partnerId, location, dateTime) => {
    try {
      const createDateResult = await createDate(userId, partnerId, location, dateTime);

      if (createDateResult.success) {
        console.log('Date creation successful');
      } else {
        console.error('Date Creation failed:', createDateResult.error);
      }
    } catch (error) {
      console.error('Error creating date:', error);
    }
  };

  return (
    <div className="matches">
      <div className="matches__cardContainer">
        {users.map(user => (
          <TinderCard
            key={user.id}
            className="matches__swipe"
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, user.id)}
            onCardLeftScreen={() => outOfFrame(user.id)}
          >
            <div
              className="matches__card"
              style={{ backgroundImage: `url(${user.imageUrl})` }}
            >
              <h3>{user.name}</h3>
              <p>{user.age} years old</p>
            </div>
            <button onClick={() => handleCreateDate(currentUser.id, user._id, "cafe", "2024-02-14")} className="matches__button matches__button--requestDate">Request Date</button>
          </TinderCard>
        ))}
      </div>
      <div className="w40vw__h60vh"></div>
      <div className="matches__buttons">
        <button className="matches__button matches__button--rewind">Rewind</button>
        <button className="matches__button matches__button--dislike">Dislike</button>
        <button className="matches__button matches__button--superlike">Super Like</button>
        <button className="matches__button matches__button--like">Like</button>
      </div>
    </div>
  );
}

export default Matches;