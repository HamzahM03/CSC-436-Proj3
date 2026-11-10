import { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css';


function App() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
  async function getCharacters() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setCharacters(data.results);

  }

    getCharacters();
  }, []);
  return (
    <div>
      <h1>Character Explorer</h1>

      <input
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {
          search.trim() ?
          <p>You are searching for: {search}</p>
          :
          <p>Start typing to search...</p>
      }
      
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        ))}
      </div>

    </div>
  );
}

export default App;