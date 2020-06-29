import React from 'react';

const SearchBar = (props) => {
  console.log("SEARCH", props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        {/* <input type="radio" value="Alphabetically" checked={(e) => props.filter(e.target.value)} onChange={props.sortByName}/> */}
        <input type="radio" value="Alphabetically" checked={props.filter} onChange={props.sortByName}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.filter} onChange={props.sortByPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStocks(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
