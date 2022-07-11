import React from 'react'

function Order(props) {
  return (
    <tr>
      <th scope="row">{props.data.id}</th>
      <td>{props.data.roomList.map((item,index)=><span key={index}>{item}, </span>)}</td>
      <td>{props.data.ngaybatdau}</td>
      <td>{props.data.ngaykethuc}</td>
      <td>{props.data.songaythue}</td>
      <td>{props.data.totalValue}</td>
      <td>{props.data.checkOutBy}</td>
      <td>{props.data.note}</td>
      <td>{props.data.status}</td>
      <td><button>Edit</button></td>
    </tr>
  )
}

export default Order