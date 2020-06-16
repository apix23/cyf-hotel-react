import React from "react";

const Footer = props => (
  <div className="footer">
    <ul>
      {props.array.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
