
import routes from '../Routes/routes.json'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './OwnerLogin.module.css'
import {Oname} from '../../Reducers/UserSlice'
const OwnerLogin = () => {

  
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const signinHandler = () => {
     navigate('/ownersignup')
  }

  const signupHandler = () => {
    
    const username1 = username.trim(' ')
    const password1 = password.trim(' ')
    const token1 = token.trim(' ')
    if (username1.length == 0) {
      alert('Enter Valid Username')
    } else if (password.length == 0) {
      alert('Enter Valid Password')
    } else if (token1.length != 6) {
      alert('Enter Valid 6 Digit Token')
    }else{
        const data = {
          username: username1,
      password: password1,
      token: token1,
    }
     dispatch(Oname(username1))
      
    axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/owner/login', { data: data }, { headers: { "Content-Type": "application/json", } }).then((data) => {
     
      if(data.data.data===null){
        alert('Invalid Username Password')
      }else{
          alert(data.data.message)
         navigate('/ownermovies')
      }
    
    }).catch((error)=>{
      console.log(error)
    })
 
    setUserName('')
    setPassword('')
    setToken('')
    
    }
      
    
  
  }

  return (
  
    <div className="container">
       
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase"> Owner Login</h2>
                <div className="mb-3">
                 
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
                      <label htmlFor="mobile" className="form-label">Token No.</label>
                      <input
                        type="number"
                        className="form-control"
                                                id="mobile"
                        placeholder="Token"
                        value={token}
                        onChange={(e) => {setToken(e.target.value)}}
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={signupHandler}>Sign In</button>
                    </div>
                 
                  <div className="mt-3 text-center">
                    <p className="mb-0">Create account?{' '}
                      <button className="btn btn-info" 
                       onClick={signinHandler} 
                        >Sign Up</button>
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
export default OwnerLogin