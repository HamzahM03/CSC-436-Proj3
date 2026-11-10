import { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css';


function App() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function getCharacters() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");

        if (!res.ok){
          throw new Error("Failed to fetch characters.");
        }

        const data = await res.json();
        setCharacters(data.results);

      } catch (err){
        setError(err.message);

      } finally {
        setLoading(false);

      }
      
    }

      getCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
     character.name.toLowerCase().includes(search.trim().toLowerCase())
  );

    if (loading) {
    return <p>Loading characters...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
        {filteredCharacters.length > 0 ? (

        filteredCharacters.map((character) => (
          
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
         
        ))
       ) :
        <p>No characters found.</p>
      }
      </div>

    </div>
  );
}

export default App;