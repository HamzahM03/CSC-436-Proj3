import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

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