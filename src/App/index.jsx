
import React from 'react';

import MovieList from '../MovieList';
import SortingDropDown from '../SortingDropDown';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sortingParam: '' };
  }

   handleChange(e) {
    this.setState({ sortingParam: e.target.value });
  }

  componentDidMount(){
    console.log('Hi I have mounted the component');
  };

  render() {
    console.log('Yeah!!! I am inside render');
    return (
      <div className="container-left">
        <div className="list-header">
          <h1>Movie Browser</h1>
          <SortingDropDown selectedValue={this.state.sortingParam}
                           handleChange={this.handleChange} />
        </div>
        <MovieList sortingParam={this.state.sortingParam} />
      </div>
    );
  }
};
