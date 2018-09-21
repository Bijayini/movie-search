import React from 'react';

import {Movies} from '../constants';

import MovieCard from '../MovieCard';

const getMovieListSortedByParam = (sortingParam) => Movies.sort((movie1, movie2) => {
  const firstMovie = movie1[sortingParam].toLowerCase();
  const secondMovie = movie2[sortingParam].toLowerCase();

  return (firstMovie > secondMovie) ? 1 : ((secondMovie > firstMovie) ? -1 : 0);
});


const getSortedMovieList = (sortingParam)=> {
   return sortingParam !== '' ? getMovieListSortedByParam(sortingParam): Movies;
}

const MovieList = (props) => {
  const sortedMovieList = getSortedMovieList(props.sortingParam);
  return(
      <ul>
        {Movies.map( movie => <MovieCard movie={movie} key={movie.id}/> )}
      </ul>
  );
};


export default MovieList;
