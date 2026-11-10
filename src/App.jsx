import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import CharacterCard from './components/CharacterCard';
import './App.css';



function App() {
  const [search, setSearch] = useState('');

  const { data, loading, error } = useFetch(
  "https://rickandmortyapi.com/api/character"
);

  const characters = data?.results ?? [];
  
  

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