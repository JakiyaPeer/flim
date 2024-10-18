import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-red rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
