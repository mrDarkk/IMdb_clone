import Movies from './components/Movies';
import './App.css';
import React, { useEffect, useState } from 'react';
// import Header from './components/Header';

const featured_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={APIKEY}&page=1";
const search_api = "https://api.themoviedb.org/3/search/movie?api_key={APIKEY}&query=";
function App() {
  const [ movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    fetch(featured_api)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        console.log(data)
      });
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      fetch(search_api + searchTerm)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
        });

      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" 
                    type="search"
                    placeholder="search..."
                    value={searchTerm}
                    onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie_container">
        {movies.length > 0 && movies.map((movie) => 
        <Movies key={movie.id} {...movie} />
        )}
      </div>
    </div>
  )}

export default App;
