import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

//656b3e1
const API_URL = 'http://www.omdbapi.com?apikey=656b3e1';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Searchgit);
  }

  useEffect(()=>{
    searchMovies('Spiderman')
  },[]);

  return (
    <div className="app">
     <h1>MovieHub</h1>
     <div className='search'>
      <input 
      placeholder='Search for movies'
      value='Search'
      onChange={()=>{}}
      />
      <img
      src={SearchIcon}
      alt='search'
      onClick={() => {}}
      />
     </div>
     <div className='container'>
      
     </div>
    </div>
  )
}

export default App;
