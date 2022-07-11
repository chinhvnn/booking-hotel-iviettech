import React from 'react'
import { useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  return (
    <div className='breadcrumb'>
      <div className='uppercase'>{document.title}</div>
      <div className='uppercase'>{location.pathname}</div>
    </div>
  )
}

export default Breadcrumb