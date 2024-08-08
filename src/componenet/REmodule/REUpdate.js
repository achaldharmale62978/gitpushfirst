import React, { useEffect } from 'react'
import Repage from './Repage'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './../REmodule/recss.css'

const REUpdate = () => {

    const {register,handleSubmit,setValue}=useForm()

    const navigate= useNavigate()

    const {regId} = useParams()

    async function fetchdata(){
        const result=await
        axios.get(`http://localhost:5000/projdata/get/${regId}`)

        result.data=result.data[0]
        setValue("fname",result.data.fname)
        setValue("lname",result.data.lname)
        setValue("email",result.data.email)
        setValue("city",result.data.city)
        setValue("bday",result.data.bday)
        setValue("pincode",result.data.pincode)
    
    }

    useEffect(()=>{
        fetchdata()
    }, [] )


    function savedata(data){
        axios.put(`http://localhost:5000/projdata/reupdate/${regId}`,data)
        navigate('/relist')
        alert("update data .......")
    }
  return (
    <>
        <div className='display backgroundcolor'>
            <Repage/>
            <div className='offset-1 col-6 '>
               <div> <h3 className='caption margin '>-- RE Enquery Form Update --</h3></div><br/><br/>
                <div className='offset-1 fontfamily fontsize ' style={{borderStyle:'solid',borderColor:'gray',borderWidth:'1px'}}>
                    <form onSubmit={handleSubmit(savedata)}>

                        <div className='display offset-1'>
                            <div className='form-group'>
                                <label htmlFor='fname'>First Name</label>
                                <input id='fname' type='text' className='form-control' {...register('fname')}/>
                            </div>

                            <div className='form-group offset-1'>
                                <label htmlFor='lname'>Last Name</label>
                                <input id='lname' type='text' className='form-control'{...register('lname')}/>
                            </div>
                        </div><br/><br/>

                        <div className='display offset-1'>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input id='email' type='email' className='form-control'{...register('email')}/>
                            </div>

                            <div className='form-group offset-1'>
                                <label htmlFor='city'>City</label>
                                <input id='city' type='text' className='form-control'{...register('city')}/>
                            </div>
                        </div><br/><br/>

                        <div className='display offset-2'>
                                <div className='form-group'>
                                    <label htmlFor='bday'>Birth Date</label>
                                    <input id='bday' type='date' className='form-control'{...register('bday')}/>
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='pincode'>Pin Code</label>
                                    <input id='pincode' type='number' className='form-control'{...register('pincode')}/>
                                </div>
                        </div> <br/><br/>

                        <div>
                            <button type='submit' className='btn btn-outline-secondary col-4 offset-'>Submit</button>
                        </div>
                        <br/>

                    </form>
                </div><br/><br/>
            </div>
        </div>
    </>
  )
}

export default REUpdate