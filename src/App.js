import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 656b3e1
const API_URL = 'http://www.omdbapi.com?apikey=656b3e1';
const movie1 = {

  Title: 'Superman, Spiderman or Batman',
  Year: '2011',
  imdbID: 'tt2084949',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Search"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container">
        <MovieCard movie1={movie1} />

      </div>
    </div>
  );
};

export default App;
