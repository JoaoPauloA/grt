import React, { useState, useEffect } from 'react';
import './Scoreboard.css';
import QuestionModal from '../QuestionModal';

function Scoreboard() {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });
  
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const addPlayer = () => {
    if (playerName.trim()) {
      const nameExists = players.some(player => player.name.toLowerCase() === playerName.toLowerCase());
      if (!nameExists) {
        setPlayers([...players, { name: playerName, score: 0 }]);
        setPlayerName('');
        setError('');
      } else {
        setError('Esse nome já está em uso! Escolha outro.');
      }
    }
  };

  const incrementScore = (index) => {
    const newPlayers = [...players];
    newPlayers[index].score += 1;
    setPlayers(newPlayers);
  };

  const decrementScore = (index) => {
    const newPlayers = [...players];
    if (newPlayers[index].score > 0) {
      newPlayers[index].score -= 1;
    }
    setPlayers(newPlayers);
  };

  const removePlayer = (index) => {
    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
  };

  return (
    <div className="scoreboard">
      <div className="logo-container">
        <img src="logo-great-com-cor-sem-fundo.png" alt="Logo" className="logo" />
      </div>
      <h2>Placar Eletrônico</h2>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Nome do jogador"
      />
      <button onClick={addPlayer} className="add-player">Adicionar Jogador</button>

      {error && <p className="error-message">{error}</p>}

      <button onClick={() => setShowModal(true)} className="search-question">
        Buscar Pergunta
      </button>
      
      {showModal && <QuestionModal onClose={() => setShowModal(false)} />}
      
      <ul className="player-list">
        {players.map((player, index) => (
          <li key={index} className="player">
            <span>{player.name}: {player.score}</span>
            <div className="buttons">
              <button onClick={() => incrementScore(index)} className="increment">+</button>
              <button onClick={() => decrementScore(index)} className="decrement">-</button>
              <button onClick={() => removePlayer(index)} className="remove">Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
