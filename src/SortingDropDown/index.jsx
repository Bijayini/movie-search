import React from 'react';

const SortingDropDown = props => {
  return (
    <div className="sort-dropdown">
      <span>Sort By: </span>
      <select defaultValue={props.selectedValue} onChange={props.handleChange}>
        <option value="">---</option>
        <option value="title">Name</option>
        <option value="year">Release Year</option>
      </select>
    </div>
  );
};

 export default SortingDropDown;
