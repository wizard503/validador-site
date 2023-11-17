import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css'; // Import the custom styles


const App = () => {
  const [searchInput, setSearchInput] = useState('');
  let navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/diploma/${searchInput}`, { replace: true });
  };

  return (
    <div className="container">
      <h1>Validacion de Diplomas</h1>
      <p>Ingresa el numero de tu carnet UES:</p>

      <input
        type="text"
        placeholder="Ingresa tu Carnet UES"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar Diploma</button>
    </div>
  );
};

export default App;
