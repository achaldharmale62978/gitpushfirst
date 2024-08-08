import React from 'react'
import Repage from './Repage'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Reenqueryform = () => {

    const {register,handleSubmit}=useForm()

    const navigate =useNavigate()

    function savedata(data){
        axios.post('http://localhost:5000/projdata',data)
        alert('data addedd....')
        navigate('/reenqueryform')
    }
    return (
        <>
            <div className='display backgroundcolor' >
                <Repage />
                <div className='offset-1 col-6'>
                    <h3 className='fontfamily margin'>-- RE Enquery Form --</h3>
                    <div className='offset-1 fontfamily fontsize ' style={{borderStyle:'solid',borderColor:'gray',borderWidth:'1px'}}>
                        <form onSubmit={handleSubmit(savedata)}>
                            <div className='display margin offset-1' >
                                <div className='form-group '>
                                    <label htmlFor='fname'>First Name</label>
                                    <input id='fname' type='text' className='form-control' {...register('fname')}/>
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='lname'>Last Name</label>
                                    <input id='lname' type='text' className='form-control' {...register('lname')}/>
                                </div>
                            </div>

                            <div className='display margin offset-1' >
                                <div className='form-group '>
                                    <label htmlFor='email'>Email</label>
                                    <input id='email' type='email' className='form-control' {...register('email')}/>
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='city'>City</label>
                                    <input id='city' type='text' className='form-control' {...register('city')}/>
                                </div>
                            </div>

                            <div className='display margin offset-2' >
                                <div className='form-group '>
                                    <label htmlFor='bday'>Birth Date</label>
                                    <input id='bday' type='date' className='form-control ' {...register('bday')}/>
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='pincode'>Pin Code</label>
                                    <input id='pincode' type='number' className='form-control' {...register('pincode')}/>
                                </div>
                            </div><br/><br/>

                            <div>
                                <button type='submit' className='btn btn-outline-secondary col-3 '>Submit</button>
                                <button type='reset' className='btn btn-outline-danger col-3 offset-1'>Reset </button>
                            </div><br/><br/>
                        </form>
                    </div><br/><br/><br/>
                </div>
            </div>
        </>
    )
}

export default Reenqueryform