import React from 'react'
import { NavLink } from 'react-router-dom'
import '../REmodule/recss.css'

const Oepage = () => {
  return (
    <>
        <div className='backgroundcolor col-2'>
            <h3 className='fontfamily'>Operational Executive</h3>
            <div className='reblock'>
                <NavLink to={'/oelist'} className='re'>Operational Executive List </NavLink><br/><br/>
                <NavLink to={'/oelogout'} className='re'>OE Logout</NavLink>
            </div>
        </div>
    </>
  )
}

export default Oepage