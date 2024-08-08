import React from 'react'
import Oepage from './Oepage'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Cibil = () => {

    const { register, handleSubmit } = useForm()

    const naviagte = useNavigate()

    function savedata(data) {
        axios.post(`http://localhost:5000/cibil`, data)
        console.log(data)
        alert('cibil data added ...')
        naviagte('/cibil')
    }
    return (
        <>
            <div className='display backgroundcolor'>
                <Oepage />
                <div className='margin offset-2 bottompadding'>
                    <h3 className='fontfamily'>-- Cibil Form -- </h3>
                    <form onSubmit={handleSubmit(savedata)} className='margin '>
                        <div >

                            <div className='display form-group'>
                                <label htmlFor='cibilid' className='col-4 fontfamily fontsize'>Cibil ID : </label>
                                <input id='cibilid' type='text' className='form-control' {...register('cibilid')} />
                            </div>  <br />

                            <div className='display form-group'>
                                <label htmlFor='cscore' className='col-4 fontfamily fontsize'>Cibil Score : </label>
                                <input id='cscore' type='text' className='form-control' {...register('cscore')} />
                            </div>  <br />

                            <div className='display form-group'>
                                <label htmlFor='cdate' className='col-4 fontfamily fontsize'>Cibil Date : </label>
                                <input id='cdate' type='date' className='form-control' {...register('cdate')} />
                            </div><br />

                            <div className='display form-group'>
                                <label htmlFor='remark' className='col-4 fontfamily fontsize'>Remark : </label>
                                <input id='remark' type='text' className='form-control' {...register('remark')} />
                            </div><br />

                            <div className='display form-group'>
                                <label htmlFor='status' className='col-4 fontfamily fontsize'>Status : </label>
                                <input id='status' type='text' className='form-control' {...register('status')} />
                            </div><br />

                            <button className='btn btn-outline-secondary col-4' type='submit' >Submit</button>
                            <button className='btn btn-outline-secondary offset-1 col-4  ' type='reset' >Reset</button>
                            <br /><br />
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Cibil