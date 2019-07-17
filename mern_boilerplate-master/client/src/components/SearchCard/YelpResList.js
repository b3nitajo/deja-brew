import React from "react";

function YelpResList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid" src={result.photo[0]} />
        </li>
      ))}
    </ul>
  )
}



export default YelpResList;
