import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const CibilDelete = () => {
    const [use,setuse]=useState([])

    const {cibilId }=useParams()

    const naviagte = useNavigate()

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:5000/cibil/get/${cibilId}`)
        setuse(result.data[0])
    }
    useEffect(()=>{
        fetchdata()
    },[])

    function Delete(){
        axios.delete(`http://localhost:5000/cibil/cibildelete/${cibilId}`)
        naviagte('/cibilstatus')
    }
    return (
        <>
            <div className=' margin ' style={{ margin: '200px' }}>
                <center class="card">
                    <h5 class="card-header">Cibil Status </h5>
                    <form onSubmit={() => { Delete() }} class="card-body">
                        <h5 class="card-title">Are you sure you want to Delete the {use.id} user data</h5>

                        <input type='submit' value='Yes' className='btn btn-outline-danger col-2' />
                        <NavLink to={'/cibilstatus'}><button type='reset' value='no' className='btn btn-outline-danger col-2 offset-1'>NO </button></NavLink>
                    </form>
                </center>
            </div>
        </>
    )
}

export default CibilDelete