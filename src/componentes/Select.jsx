import React, { useState } from 'react';
import {BiSearchAlt2} from 'react-icons/bi'

import './Select.css'
import { useNavigate } from 'react-router-dom';

const GenreSelect = () => {


  const genres = [
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 14, name: "Fantasia" },
    { id: 36, name: "História" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Mistério" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção Científica" },
  ];

  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
  };

  return (
    <div className="genre-select-container">
      <select value={selectedGenre} onChange={handleChange} className="form-select">
        <option value="" disabled>Escolher Gênero</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <button
        type="button" onClick={() => {
          if (selectedGenre) {
            navigate(`/genero?q=${selectedGenre}`);
          }
        }}
      >
        <BiSearchAlt2 />
      </button>
    </div>
  );
};

export default GenreSelect;
