import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className="Home">
    <h2>Access your account from below !</h2>
        <Link to="/Signup">
          <button className='btn-dash'>Create Your Account</button>
        </Link>
        <Link to='/Signin'>
          <button className='btn-acct'>Connect To Your Account</button>
        </Link>
        
</div>
  )
}

export default Home