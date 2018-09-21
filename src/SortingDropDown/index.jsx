import React from 'react';

export default class SortingDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { selectedValue: '' };
  }

  handleChange(e) {
    this.setState({ selectedValue: e.target.value });
  }

   render() {
      return (
        <div className="sort-dropdown">
          <span>{this.state.selectedValue} </span>
          <span>Sort By: </span>
          <select defaultValue={this.state.selectedValue} onChange={this.handleChange}>
              <option value="">----</option>
              <option value="title">Name</option>
              <option value="year">Release Year</option>
          </select>
        </div>
      );
  }
};
