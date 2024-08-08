import React from 'react'
import { NavLink } from 'react-router-dom'
import '../REmodule/recss.css'
const Repage = () => {
    return (
        <>
            <div className='col-2 ' >
                <h3 className='fontfamily'>Regional Executive</h3>
                <div className='reblock'><br/>
                    <NavLink to={'/reenqueryform'} className='re '> RE Enquery Form</NavLink><br /><br/>
                    <NavLink to={'/relist'} className='re'> RE Enquery List</NavLink><br /><br/>
                    <NavLink to={'/cibilstatus'} className='re'> Cibil Status</NavLink><br /><br/>
                    <NavLink to={'/relogout'} className='re'> RE LogOut</NavLink><br /><br/>
                </div>
            </div>
        </>
    )
}

export default Repage