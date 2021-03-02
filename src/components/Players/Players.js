import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';

const Players = props => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(data);
  }, []);
  return (
    <div className="row g-4">
      {players.map(player => (
        <Player addToCartHandler={props.addToCartHandler} key={player.id} player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
