import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 h-96 object-cover mr-8"
        />
        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <p className="text-xl mt-2">{movie.Year}</p>
          <p className="mt-4">{movie.Plot}</p>
          <p className="mt-4">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="mt-4">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="mt-4">
            <strong>Actors:</strong> {movie.Actors}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
