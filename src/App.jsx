import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
  async function getCharacters() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    console.log(data)
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
    </div>
  );
}

export default App;