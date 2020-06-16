import React from "react";
import moment from "moment";

const Rows = props => {
  const newArray = props.array;

  return (
    <tbody>
      {newArray.map(element => {
        const checkInDate = moment(element.checkInDate);
        const checkOutDate = moment(element.checkOutDate);
        console.log(element.checkInDate, "hola yo soy el check in date");
        console.log(element.checkOutDate, "hola yo soy el checkOut");
        return (
          <tr key={element.id}>
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.surname}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.checkOutDate}</td>
            <td>{checkOutDate.diff(checkInDate, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );

  // var a = moment([2007, 0, 29]);
  // var b = moment([2007, 0, 28]);
  // a.diff(b, 'days') // 1
};
export default Rows;
