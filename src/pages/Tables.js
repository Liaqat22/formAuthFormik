import React from 'react'
import SidebarLinks from './SidebarLinks'

function Tables() {
  return (
    <>
      <div className = "container-fluid">
        <div className='row d-flex justify-content-evenly'>

            <div className='col-md-2'>
                <SidebarLinks/>
            </div>

            <div className='col-md-9'>
            Tables
            </div>
        </div>
    </div>
    </>
  )
}

export default Tables