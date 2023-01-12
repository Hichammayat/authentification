
import React, { useState } from "react";
import SignupModal from '../modals/SignupModal';
import axios from 'axios';

function Signup() {
    const [signup, setSignup] = useState(new SignupModal());

    const newAccount=()=>{
        axios.post('http://localhost:9000/signup',signup)
        .then(res =>{return res.data})
        .catch(err => {return err})
    };
  return (
    <div className='container'>
        <div className="title">
            <h1>Create You Account</h1>
        </div>
        <div className='Box'>
        
        <label className="labels" htmlFor="fname">
            Firstname
          </label>
          <input
            onChange={(e) => {
              setSignup({ ...signup, Firstname: e.target.value });
            }}
            className="inputs"
            type="text"
            name="fname"
            placeholder="ex: Hicham"
          />
          <label className="labels" htmlFor="lname">
            Lastname
          </label>
          <input
            onChange={(e) => {
              setSignup({ ...signup, Lastname: e.target.value });
            }}
            className="inputs"
            type="text"
            name="lname"
            placeholder="ex: mayat"
          />
          <label className="labels" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => {
              setSignup({ ...signup, Email: e.target.value });
            }}
            className="inputs"
            type="text"
            name="gmail"
            placeholder="ex: hicham@gmail.com"
          />
          <label className="labels" htmlFor="pword">
            Password
          </label>
          <input
            onChange={(e) => {
              setSignup({ ...signup, Password: e.target.value });
            }}
            className="inputs"
            type="password"
            name="pword"
            placeholder="Enter a secure Password"
          />
           <button
            onClick={() => {
             newAccount();
            }}
            type="submit"
            className="btn-signup"
          >
            SignUp
          </button>
        </div>
    </div>
  )
}

export default Signup