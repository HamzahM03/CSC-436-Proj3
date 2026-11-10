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
    <div className="app">
      <header className="app-header">
        <h1>Character Explorer</h1>

        <label className="error-toggle">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(e) => setSimulateError(e.target.checked)}
          />
          Simulate API Error
        </label>
      </header>

      {/* aria-busy tells screen readers the content is still loading */}
      <main aria-busy={loading}>
        {loading ? (
          <div className="status-message" role="status">
            <div className="spinner" aria-hidden="true"></div>
            <p>Loading Characters...</p>
          </div>
        ) : error ? (
          <div className="status-message error-box">
            <h2>Something went wrong</h2>
            <p className="error-message" role="alert">Error: {error}</p>
            <button className="retry-button" onClick={retry}>Retry</button>
          </div>
        ) : (
          <>
            <label className="search-label" htmlFor="character-search">
              Search characters
            </label>
            <input
              id="character-search"
              className="search-input"
              type="text"
              placeholder="Search characters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search.trim() ? (
              <p className="search-message">You are searching for: {search}</p>
            ) : (
              <p className="search-message">Start typing to search...</p>
            )}

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
              ) : (
                <p className="empty-message" role="status">
                  No characters found.
                </p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
