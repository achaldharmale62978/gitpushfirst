import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import '../REmodule/recss.css'

const Login = () => {

    const naviagte = useNavigate()
    const [name, setname] = useState('')
    const [pwd, setpwd] = useState('')

    const islogin = () => {
        if (name === 're' && pwd === 're') {
            naviagte('/repage')
        } else if (name === 'oe' && pwd === 'oe') {
            naviagte('/oepage')
        } else if (name === 'cm' && pwd === 'cm') {
            naviagte('/cmpage')
        } else {
            alert('this page can not find....')
        }
    }
    return (
        <>
            <div >
            <h2 className='heading ' > -- &ensp;LogIn Form&ensp; -- </h2><br />
                <div className='border border-dark col-6 offset-3'>
                   
                    <div style={{ textAlign: 'center' , padding:'40px' }}  >
                        <div class="input-group flex-nowrap " >
                            <span class="input-group-text fontsize" id="addon-wrapping  inputEmail4">Username ::</span>
                            <input type="email" value={name} onChange={e => setname(e.target.value)} class="form-control fontsize" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br /><br />

                        <div class="input-group flex-nowrap ">
                            <span class="input-group-text fontsize" id="addon-wrapping inputEmail">Password ::</span>
                            <input type="password"  value={pwd} onChange={e=> setpwd(e.target.value)}  class="form-control fontsize" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                        </div><br /><br />

                        <div class="input-group flex-nowrap ">
                         
                            <input type="signup" class="btn btn-outline-secondary col-6 offset-3"  onClick={islogin} value='SIGNUP' />
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login