
import React from 'react';

import MovieList from '../MovieList';
import SortingDropDown from '../SortingDropDown';

const App = () =>{
  return(
    <div className="container-left">
      <div className="list-header">
        <h1>Movie Browser</h1>
        <SortingDropDown />
      </div>
      <MovieList />
    </div>
  );
};

export default App;
