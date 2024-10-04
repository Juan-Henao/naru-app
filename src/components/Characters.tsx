import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Character } from '../interfaces/Character';
import '../styles/Character.css'
const API_URL = process.env.REACT_APP_API_URL;

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`${API_URL}/characters`);
        console.log(response.data.characters)
        setCharacters(response.data.characters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };


    fetchCharacters();
  }, []);

  if (loading) {
    return <p>Loading characters...</p>;
  }

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <h3>{character.name}</h3>
          {character.images && character.images[0] && (
            <img
              src={character.images[0]}
              alt={character.name}
            />
          )}
          <p>Clan: {character.personal.clan ? character.personal.clan : 'Unknown'}</p>
          {Array.isArray(character.personal.team) && character.personal.team.length > 0 && (
            <p>Team: {character.personal.team.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  );

};

/*
.map((character) => (
          <li key={character.id}>
            {character.nombre} - Clan: {character.clan}
          </li>
        ))
*/

export default Characters;
