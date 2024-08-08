import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const RELogout = () => {

    function fetchdata() {
        axios.get('http://localhost:5000/user')

    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className=' margin ' style={{ margin: '200px' }}>
                <center>
                    <div class="card " >
                        <h3 class="card-header fontfamily">Regional Executive </h3><br/>

                        <h5 class="card-title fontfamily">Are you sure you want to LogOut.</h5><br/>

                        <div className=''>
                            <NavLink to={'/login'}><button type='submit' value='Yes' className='btn btn-outline-danger col-2 offset-1'>Log Out </button></NavLink>
                            <NavLink to={'/repage'}><button type='reset' value='no' className='btn btn-outline-danger col-2 offset-1'>Cancel </button></NavLink>

                        </div><br/>
                    </div>
                </center>
            </div>
        </>
    )
}

export default RELogout