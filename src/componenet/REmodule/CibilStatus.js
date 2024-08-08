import React, { useEffect, useState } from 'react'
import Repage from './Repage'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const CibilStatus = () => {

    const [cibil, setcibil] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:5000/cibil`)
        setcibil(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className='display backgroundcolor'>
                <Repage />
                <div className=' offset-1'>
                    <h3 className='fontfamily margin '>-- Cibil Status -- </h3>
                    <table class="table">

                        <thead>
                            <tr>
                                <th scope="col" className='table-secondary'>Cibil ID</th>
                                <th scope="col" className='table-light'>Cibil Score</th>
                                <th scope="col" className='table-secondary'>CIbil Date</th>
                                <th scope="col" className='table-light'>Remark</th>
                                <th scope="col" className='table-secondary'>Status</th>
                                <th scope="col" className='table-light'>Registration</th>
                                <th scope="col" className='table-secondary'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cibil.map(cibils => {
                                    return (
                                        <>
                                            <tr key={cibils.cibilid}>
                                                <th scope="row" className='table-secondary'>{cibils.cibilid}</th>
                                                <td className='table-light'>{cibils.cscore}</td>
                                                <td className='table-secondary'>{cibils.cdate}</td>
                                                <td className='table-light'>{cibils.remark}</td>
                                                <td className='table-secondary'>{cibils.status}</td>
                                                <td className='table-light'><NavLink to={'/register'}><button className='btn btn-outline-danger ' type='submit'>Registration</button></NavLink></td>
                                                <td className='table-secondary'><NavLink to={`/cibildelete/${cibils.cibilid}`}><button className='btn btn-outline-danger ' type='reset'>Delete</button></NavLink></td>
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

export default CibilStatus