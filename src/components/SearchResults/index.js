
import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.result.map(user => (
        <li key={user.name.first} className="list-group-item">
          <h1>{user.name.first} {user.name.last}</h1>
          <img alt={user.name.first} src={user.picture.medium} className="img-fluid" />
          <p>{user.gender}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;