import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center font-bold mb-6">Search Movies</h1>
      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <input
          type="text"
          className="border rounded p-2 w-2/3"
          placeholder="Enter movie title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 ml-2"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
