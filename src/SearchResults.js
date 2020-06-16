import React from "react";
import Rows from "./Rows";

//id, title, first name, surname, email, room id, check in date and check out date.

const SearchResult = props => {
  console.log(props);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nigth</th>
        </tr>
      </thead>

      <Rows array={props.results} />
    </table>
  );
};

export default SearchResult;
