import React, { useEffect, useState } from 'react'
import CMpage from './CMpage'
import '../REmodule/recss.css'
import axios from 'axios'


const CMList = () => {

    const [user, setuser] = useState([])

    async function fetchdata() {
        const result = await
    axios.get(`http://localhost:5000/registeration  `)
        setuser(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div className='backgroundcolor display'>
                <CMpage />
                <div className='offset-1'>
                   <h3 className='fontfamily margin'>-- Credit Manager List --</h3><br/>
                   <div>
                   <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">RID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">City</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(regg => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{regg.rid}</th>
                                                <td>{regg.bfname}</td>
                                                <td>{regg.blname}</td>
                                                <td>{regg.bdate}</td>
                                                <td>{regg.bcity}</td>
                                                <td>{regg.bemail}</td>
                                                <td>{regg.badd}</td>
                                                <td>{regg.bzip}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                   </div>

                   <div>
                   <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">City</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(regg => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{regg.rid}</th>
                                                <td>{regg.bfname}</td>
                                                <td>{regg.blname}</td>
                                                <td>{regg.bdate}</td>
                                                <td>{regg.bcity}</td>
                                                <td>{regg.bemail}</td>
                                                <td>{regg.badd}</td>
                                                <td>{regg.bzip}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                   </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default CMList