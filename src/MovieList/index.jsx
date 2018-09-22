import React from 'react';
import {isEqual, uniqBy} from 'lodash';

import {URL} from '../constants';

import MovieCard from '../MovieCard';

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies:[]
    }
  }

  componentDidMount(){
    fetch(URL).then(results => results.json())
    .then(data => this.setState({ movies: uniqBy(data.movies, 'title')}));
  };


  getMovieListSortedByParam = () => {
    const {sortingParam} = this.props;
    const {movies} = this.state;

    return( movies.sort((movie1, movie2) => {
      const firstMovie = movie1[sortingParam].toLowerCase();
      const secondMovie = movie2[sortingParam].toLowerCase();

      return (firstMovie > secondMovie) ? 1 : ((secondMovie > firstMovie) ? -1 : 0);
    }));
  };

   getSortedMovieList = () => {
     const { sortingParam } = this.props;

     return sortingParam !== '' ? this.getMovieListSortedByParam(): this.state.movies;
  };

  render(){
    const {movies} = this.state;

    return(
        <ul>
          {movies.length > 0 && this.getSortedMovieList().map( movie => <MovieCard movie={movie} key={movie.title} /> )}
        </ul>
    );
  }
};
