import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Repage from './Repage'
import { NavLink } from 'react-router-dom'

const RElist = () => {
    const [user, setuser] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(' http://localhost:5000/projdata')
        setuser(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div style={{ display: 'flex' }} className='backgroundcolor'>
                <Repage />

                <div className='offset-1 ' style={{ marginTop: "50px" }}>
                    <h3 className='fontfamily'> -- Regional Executive --</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className='table-secondary'>ID</th>
                                <th className='table-light'>First Name</th>
                                <th className='table-secondary'>Last Name</th>
                                <th className='table-light' >Email</th>
                                <th className='table-secondary' >City</th>
                                <th className='table-light' >Birth Date</th>
                                <th className='table-secondary' >Pin Code</th>
                                <th className='table-light' >Update</th>
                                <th className='table-secondary' >Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(use => {
                                    return (
                                        <>
                                            <tr key={use.id}>
                                                <th scope='row' className='table-secondary' >{use.id}</th>
                                                <td className='table-light' >{use.fname}</td>
                                                <td className='table-secondary'>{use.lname}</td>
                                                <td className='table-light'>{use.email}</td>
                                                <td className='table-secondary' >{use.city}</td>
                                                <td className='table-light' >{use.bday}</td>
                                                <td className='table-secondary' >{use.pincode}</td>
                                                <td className='table-light'><NavLink to={`/reupdate/${use.id}`}><button className='btn btn-outline-secondary ' type='submit' >Update</button></NavLink></td>
                                                <td className='table-secondary'> <NavLink to={`/redelete/${use.id}`}><button className='btn btn-outline-secondary ' type='reset' >Delete</button></NavLink></td>
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

export default RElist