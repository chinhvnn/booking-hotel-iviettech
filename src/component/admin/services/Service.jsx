import React from 'react'

function Service(props) {
  return (
    <tr>
      <th scope="row">{props.data.id}</th>
      <td>{props.data.name}</td>
      <td style={{textAlign:"left"}}>{props.data.des.map((item, index) => <div key={index}>- {item}</div>)}</td>
      <td>{props.data.note}</td>
      <td><button>Edit</button></td>
    </tr>
  )
}

export default Service