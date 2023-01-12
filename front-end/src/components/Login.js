import React,{useState}from 'react'

import {checkUser} from'../redux/Signin-reducer'
import{useDispatch,useSelector} from'react-redux'
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate();

  const Err = useSelector(state => state.Auth.Erreur)

  const dispatch = useDispatch()
    const [signin, setSignin] = useState({
      Email:"",
      Password:""
    });

    const Signin = () => {
      
      dispatch(checkUser({userAccount :signin })).then(
        res =>{
          console.log(res)

          if(typeof res.payload === 'object') navigate('/Taskuser')
        }
      )
     };

     


  return (
    <div className='container'>
        <div className="title">
            <h1>Create You Account</h1>
        </div>
        <div className='Box'>
        
          <p className='Err'>{Err}</p>
          <label className="labels" htmlFor="email">
            Email
          </label>
          <input
           
            className="inputs"
            type="text"
            name="gmail"
            placeholder="ex: hicham@gmail.com"
            onChange={(e) => {
              setSignin({ ...signin,Email: e.target.value });
            }}
          />
          <label className="labels" htmlFor="pword">
            Password
          </label>
          <input
           
            className="inputs"
            type="password"
            name="pword"
            placeholder="Enter a secure Password"
            onChange={(e) => {
              setSignin({ ...signin,Password: e.target.value });
            }}
          />
           <button
             onClick={() => {
              Signin()
             }}
    
            className="btn-signup"
          >
            Signin
          </button>
          
        </div>
    </div>
  )
}

export default Login