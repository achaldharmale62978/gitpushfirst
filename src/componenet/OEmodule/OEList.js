import React, { useEffect, useState } from 'react'
import Oepage from './Oepage'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import '../REmodule/recss.css'

const OEList = () => {

    const [oeuser, setoeuser] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:5000/projdata`)
        setoeuser(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    return (
        <>
            <div className='display backgroundcolor'>
                <Oepage />

                <div className='offset-1 '>
                    <h3 className='fontfamily margin'> -- Operational Executive List -- </h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className='table-secondary'>ID</th>
                                <th scope="col" className='table-light'>First Name</th>
                                <th scope="col" className='table-secondary'>Last Name</th>
                                <th scope="col" className='table-light'>Email</th>
                                <th scope="col" className='table-secondary'>City</th>
                                <th scope="col" className='table-light'>Birth Date</th>
                                <th scope="col" className='table-secondary'>Pincode</th>
                                <th scope="col" className='table-light'>Cibil</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                oeuser.map(user => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row" className='table-secondary'>{user.id}</th>
                                                <td className='table-light'>{user.fname}</td>
                                                <td className='table-secondary'>{user.lname}</td>
                                                <td className='table-light'>{user.email}</td>
                                                <td className='table-secondary'>{user.city}</td>
                                                <td className='table-light'>{user.bday}</td>
                                                <td className='table-secondary'>{user.pincode}</td>
                                                <td className='table-light'><NavLink to={`/cibil`}><button className='btn btn-outline-secondary '>Cibil</button></NavLink></td>

                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OEList