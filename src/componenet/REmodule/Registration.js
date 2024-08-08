import React from 'react'
import '../REmodule/recss.css'
import Repage from './Repage'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Registration = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    function savedata(data) {
        axios.post(`http://localhost:5000/registeration `, data)
        alert("registration data added .....")
        navigate('/register')
    }
    return (
        <>
            <div className='display backgroundcolor'>
                <Repage />
                <div className='offset-1 fontfamily'>
                    <h3 className='fontfamily margin '>-- Registration Form --</h3><br />
                    <form onSubmit={handleSubmit(savedata)}>
                        <fieldset>
                            <legend>Basic Information ::</legend>

                            <div className='g-5 display '>
                                <div className='form-group'>
                                    <label htmlFor='rid' className='fontsize'>RID</label>
                                    <input id='rid' type='text' className='form-control' {...register('rid')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='bfname' className='fontsize'>First Name</label>
                                    <input id='bfname' type='text' className='form-control' {...register('bfname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='blname' className='fontsize'>Last Name</label>
                                    <input id='blname' type='text' className='form-control' {...register('blname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='bdate' className='fontsize'>Birth Date</label>
                                    <input id='bdate' type='date' className='form-control' {...register('bdate')} />
                                </div>
                            </div><br />
                            <div className='display g-5'>
                                <div className='form-group '>
                                    <label htmlFor='city' className='fontsize'>City</label>
                                    <input id='city' type='text' className='form-control' {...register('bcity')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='bemail' className='fontsize'>Email</label>
                                    <input id='bemail' type='email' className='form-control' {...register('bemail')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='badd' className='fontsize'>Address </label>
                                    <textarea id='badd' className='form-control'{...register('badd')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='bzip' className='fontsize'>Zip Code</label>
                                    <input id='bzip' type='number' className='form-control'{...register('bzip')} />
                                </div>
                            </div>

                        </fieldset><br />

                        <fieldset>
                            <legend>Permanent Address ::</legend>

                            <div className='g-5 display '>
                                <div className='form-group'>
                                    <label htmlFor='pcname' className='fontsize'>City Name</label>
                                    <input id='pcname' type='text' className='form-control' {...register('pcname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='paname' className='fontsize'>Area Name</label>
                                    <input id='paname' type='text' className='form-control' {...register('paname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='phnum' className='fontsize'>House Number</label>
                                    <input id='phnum' type='text' className='form-control' {...register('phnum')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='psnum' className='fontsize'>Street Number</label>
                                    <input id='psnum' type='text' className='form-control' {...register('psnum')} />
                                </div>
                            </div><br />
                            <div className='display g-5'>
                                <div className='form-group'>
                                    <label htmlFor='dname' className='fontsize'>District Name</label>
                                    <input id='dname' type='text' className='form-control'{...register('dname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='pzip' className='fontsize'>Zip Code </label>
                                    <input id='pzip' type='text' className='form-control'{...register('pzip')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='pstate' className='fontsize'>State</label>
                                    <input id='pstate' type='text' className='form-control'{...register('pstatus')} />
                                </div>
                            </div>

                        </fieldset><br />

                        <fieldset>
                            <legend>Loan Information::</legend>

                            <div className='g-5 display '>
                                <div className='form-group'>
                                    <label htmlFor='lamount' className='fontsize'>Loan Amount</label>
                                    <input id='lamount' type='number' className='form-control' {...register('lamount')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='tenure' className='fontsize'>Tenure</label>
                                    <input id='tenure' type='text' className='form-control' {...register('tenure')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='pamount' className='fontsize'>Paid Amount</label>
                                    <input id='pamount' type='number' className='form-control' {...register('pamount')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='remaning' className='fontsize'>Remaining</label>
                                    <input id='remaining' type='num' className='form-control' {...register('remaining')} />
                                </div>
                            </div><br />
                            <div className='display g-5'>
                                <div className='form-group'>
                                    <label htmlFor='lstatus' className='fontsize'>Status</label>
                                    <input id='lstatus' type='text' className='form-control'{...register('lstatus')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='lremark' className='fontsize'>Remark </label>
                                    <input id='lremark' type='text' className='form-control'{...register('lremark')} />
                                </div>

                                {/* <div className='form-group offset-1'>
                                    <label htmlFor='pstate'className='fontsize'>State</label>
                                    <input id='pstate' type='text' className='form-control'/>
                                </div> */}
                            </div>

                        </fieldset><br />

                        <fieldset>
                            <legend>Company Details::</legend>

                            <div className='g-5 display '>
                                <div className='form-group'>
                                    <label htmlFor='cname' className='fontsize'>Company Name</label>
                                    <input id='cname' type='text' className='form-control' {...register('cname')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='cprofile' className='fontsize'>Company Profile</label>
                                    <input id='cprofile' type='text' className='form-control' {...register('cprofile')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='cmincome' className='fontsize'>Monthly Income</label>
                                    <input id='cmincome' type='text' className='form-control' {...register('cmincome')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='aincome' className='fontsize'>Annual Income</label>
                                    <input id='aincome' type='text' className='form-control' {...register('aincome')} />
                                </div>
                            </div><br />
                            <div className='display g-5'>
                                <div className='form-group'>
                                    <label htmlFor='cadd' className='fontsize'>Company Address</label>
                                    <textarea id='cadd' className='form-control'{...register('cadd')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='ccity' className='fontsize'>City </label>
                                    <input id='ccity' type='text' className='form-control'{...register('ccity')} />
                                </div>

                                {/* <div className='form-group offset-1'>
                                    <label htmlFor='pstate'className='fontsize'>State</label>
                                    <input id='pstate' type='text' className='form-control'/>
                                </div> */}
                            </div>

                        </fieldset><br />

                        <fieldset>
                            <legend>Account Details ::</legend>

                            <div className='g-5 display '>
                                <div className='form-group'>
                                    <label htmlFor='atype' className='fontsize'>Account Type</label>
                                    <input id='atype' type='text' className='form-control' {...register('atype')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='abalance' className='fontsize'>Account Balance</label>
                                    <input id='abalance' type='text' className='form-control' {...register('abalance')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='ahname' className='fontsize'>Account Holder Name</label>
                                    <input id='ahname' type='text' className='form-control' {...register('ahname')} />
                                </div>

                                {/* <div className='form-group offset-1'>
                                    <label htmlFor='astatus' className='fontsize'>Account Status</label>
                                    <input id='astatus' type='text' className='form-control'{...register('astatus')} />
                                </div> */}
                            </div><br />
                            <div className='display g-5'>
                                <div className='form-group'>
                                    <label htmlFor='anum' className='fontsize'>Account Number</label>
                                    <input id='anum' type='text' className='form-control'{...register('anum')} />
                                </div>

                                <div className='form-group offset-1'>
                                    <label htmlFor='astatus' className='fontsize'>Account Status</label>
                                    <input id='astatus' type='text' className='form-control'{...register('astatus')} />
                                </div>

                                {/* <div className='form-group offset-1'>
                                    <label htmlFor='pstate' className='fontsize'>State</label>
                                    <input id='pstate' type='text' className='form-control' {...register('pstate')} />
                                </div> */}
                            </div><br/><br/>

                            <div>
                                <button type='submit' className='btn btn-outline-secondary offset-1 col-4 fontsize'>Submit</button>
                                <button type='reset' className='btn btn-outline-secondary offset-1 col-4 fontsize'>Reset</button>
                            </div><br /><br />

                        </fieldset><br />

                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration