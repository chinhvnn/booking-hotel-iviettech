 import React from 'react'
import Breadcrumb from './Breadcrumb'
 
 function ContentLayout({children}) {
   return (
    <div className='admin-content'>
      <Breadcrumb />
      <div className='content'>
          {children}
      </div>
    </div>
   )
 }
 
 export default ContentLayout