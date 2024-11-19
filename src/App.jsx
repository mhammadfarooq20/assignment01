import{ useEffect, useState } from 'react';
import { fetchMovies } from './tmdbapi';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch popular movies initially
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies('/movie/popular');
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getMovies();
  }, []);

  // Handle search
  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const data = await fetchMovies(`/search/movie?query=${query}`);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const displayedMovies = searchResults.length > 0 ? searchResults : movies;

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <h1 className="title">Netflix-Style Movie Cards</h1>
      <div className="movies-container">
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}


export default App;
