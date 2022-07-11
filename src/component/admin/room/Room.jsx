import React from "react";

function Room(props) {
  return (
    <tr>
      <th scope="row">{props.data.id}</th>
      <td>{props.data.img}</td>
      <td>{props.data.roomName}</td>
      <td>{props.data.slot}</td>
      <td>{props.data.service}</td>
      <td>{props.data.price}</td>
      <td><button>Edit</button></td>
    </tr>
  );
}

export default Room;
