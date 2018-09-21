import React from 'react';

import {Movies} from '../constants';

import MovieCard from '../MovieCard';

const MovieList = () => {
  return(
      <ul>
        {Movies.map( movie => <MovieCard movie={movie} key={movie.id}/> )}
      </ul>
  );
};


export default MovieList;
