import React from 'react'
import SidebarLinks from '../pages/SidebarLinks'

function SignUp() {
  return (
    <>
    <div className = "container-fluid">
        <div className='row d-flex justify-content-evenly'>

            <div className='col-md-2'>
                <SidebarLinks/>
            </div>

            <div className='col-md-9'>
            SignUp
            </div>
        </div>
    </div>
   
    </>
    )
}

export default SignUp