import React from "react";

function OverviewItem(props) {
  return (
    <tr>
      <th scope="row">{props.data.id}</th>
      <td>{props.data.roomName}</td>
      <td>{props.data.service}</td>
      <td>{props.data.client}</td>
      <td>{props.data.invoice}</td>
      <td>{props.data.status}</td>
      <td>{props.data.note}</td>
      <td>
        <button>DETAIL</button>
      </td>
    </tr>
  );
}

export default OverviewItem;
