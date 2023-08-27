import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const rangeChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Price</label>
        <input
          type="range"
          min="1"
          max="100"
          value={props.selected}
          onChange={rangeChangeHandler}
        />
        <p>Selected Price: {props.selected}</p>
      </div>
    </div>
  );
};

export default ExpensesFilter;
