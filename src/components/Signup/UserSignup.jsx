import React from 'react';

import routes from '../Routes/routes.json'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import styles from './UserSignup.module.css'

const UserSignup = () => {

  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')



  const navigate = useNavigate()

  const signinHandler = () => {
    navigate('/userlogin')
  }

  const signupHandler = () => {
    const name1 = name.trim(' ')
    const username1 = username.trim(' ')
    const password1 = password.trim(' ')
    const mobile1 = mobile.trim(' ')
    if (name1.length == 0) {
      alert('Enter Valid Name')
    } else if (username1.length == 0) {
      alert('Enter Valid Username')
    } else if (password.length == 0) {
      alert('Enter Valid Password')
    } else if (mobile1.length != 10) {
      alert('Enter Valid 10 Digit Mobile Number')
    }
      
    
    const data = {
      name: name1,
      username: username1,
      password: password1,
      mobile: mobile1,
    }
    
    axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/user/signup', { data: data }, { headers: { "Content-Type": "application/json", } }).then((data) => {
     
      alert(data.data.message)
    }).catch((error)=>{
      console.log(error)
    })
 setName('')
    setUserName('')
    setPassword('')
    setMobile('')
    navigate('/userlogin')
  }

  return (
  
    <div className="container">
      <br />
      <h3 className="text-center">SignUp Free Here For Ticket Booking</h3>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase"> User Signup</h2>
                <div className="mb-3">
                 
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => {setUserName(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">Mobile No.</label>
                      <input
                        type="number"
                        className="form-control"
                        
                        id="mobile"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => {setMobile(e.target.value)}}
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={signupHandler}>Create Account</button>
                    </div>
                 
                  <div className="mt-3 text-center">
                    <p className="mb-0">Already have an account?{' '}
                      <button className="btn btn-info" onClick={signinHandler}>Sign In</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}
export default UserSignup