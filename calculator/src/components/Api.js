import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';

const Api = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };


    fetchCharacters();
  }, []);

  const characterList = characters.map(character => (
    <li key={character.id}>{character.name } <br></br>{character.episode} <br></br>{character.image}</li>
    
  ));

  return (
    <div>
      <h1>Rick and Morty Characters API Fetching</h1>
      <ul>{characterList}</ul>
      <button>
        <Link to='/'>Go Back</Link>
      </button>
    </div>
  );
};

export default Api;