import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Matches.css';

const sampleUserData = [
  {
    id: 1,
    name: 'Yuta Okkotsu',
    age: 20,
    imageUrl: './hero-image.jpg'
  },
  {
    id: 2,
    name: 'Gojo Satoru',
    age: 29,
    imageUrl: './hero-image.jpg'
  },
  {
    id: 3,
    name: 'Eren Yeager',
    age: 21,
    imageUrl: './hero-image.jpg'
  },
];

function Matches() {
  const [users, setUsers] = useState(sampleUserData);

  const swiped = (direction, idToDelete) => {
    console.log('Removing: ', idToDelete);
    // Remove the swiped user from the list
    setUsers(users.filter(user => user.id !== idToDelete));
  };

  const outOfFrame = (id) => {
    console.log(id + ' left the screen');
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
          </TinderCard>
        ))}
      </div>
      <div className="w40vw__h60vh"></div>
      <div className="matches__buttons">
        <button className="matches__button matches__button--rewind">Rewind</button>
        <button className="matches__button matches__button--dislike">Dislike</button>
        <button className="matches__button matches__button--superlike">Super Like</button>
        <button className="matches__button matches__button--like">Like</button>
        <button className="matches__button matches__button--boost">Boost</button>
      </div>
    </div>
  );
}

export default Matches;