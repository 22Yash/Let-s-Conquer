import React from 'react';
import './Games.css'; // CSS for styling

const sports = [
  {
    name: 'Overarm-Cricket',
  },
  {
    name: 'Volleyball',
  },
  {
    name: 'Box-Cricket',
  },
  {
    name: 'Kabbadi',
  },
  {
    name: 'Thug Of War',
  },
  {
    name: 'Football',
  },
  {
    name: 'Kho-Kho',
  },
  {
    name: 'Handball',
  },
  {
    name: 'Foot-Volley',
  },
  {
    name: 'Badminton',
  },
];

function Games(){
  return (
    <div className="game-container">
      <h2>Sports We Offer</h2>
      <div className="cards-container">
        {sports.map((sport, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h3>{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
