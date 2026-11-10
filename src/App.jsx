import { useState } from 'react';
import useFetch from './hooks/useFetch';
import CharacterCard from './components/CharacterCard';
import './App.css';



function App() {
  const [search, setSearch] = useState('');
  const [simulateError, setSimulateError] = useState(false);

  const validUrl = "https://rickandmortyapi.com/api/character";
  const invalidUrl = "https://rickandmortyapi.com/api/invalid";

  const { data, loading, error, retry } = useFetch(
  simulateError ? invalidUrl : validUrl
);

  const characters = data?.results ?? [];
  
  

  const filteredCharacters = characters.filter((character) =>
     character.name.toLowerCase().includes(search.trim().toLowerCase())
  );


  return (
    <div>
      <h1>Character Explorer</h1>

      <label>
        <input
          type="checkbox"
          checked={simulateError}
          onChange={(e) => setSimulateError(e.target.checked)}
        />
        Simulate API Error
      </label>


      <main>
        
        {
        loading ? 
        (
          <p>Loading Characters...</p>
        ) 
        : error ? 
        (
          <div>
            <p role="alert">Error: {error}</p>
            <button onClick={retry}>Retry</button>
          </div>
        ) : 
        (
          <>
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
        </>
        )}

      </main>
      
      

    </div>
  );
}

export default App;