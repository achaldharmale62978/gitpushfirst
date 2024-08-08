import React from 'react'
import { NavLink } from 'react-router-dom'
import '../REmodule/recss.css'

const CMpage = () => {
    return (
        <>
            <div className='backgroundcolor col-2'><br/>
                <h3 className='fontfamily '>Credit Manager </h3>
                
                <div className='reblock'>
                    <NavLink to={'/cmlist'} className='re fontfamily'>Credit Manager List </NavLink> <br /><br />
                    <NavLink to={'/cmlogout'} className='re fontfamily'>CM LogOut </NavLink><br />
                </div>
            </div>
        </>
    )
}

export default CMpage