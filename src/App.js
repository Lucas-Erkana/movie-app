import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=656b3e1';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    if (response.ok) {
      const data = await response.json();
      setMovies(data.Search);
    } else {
      // console.log('no response');
    }
  };

  useEffect(() => {
    searchMovies('Black Panther');
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="button" onClick={() => searchMovies(searchTerm)}>
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}

        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
