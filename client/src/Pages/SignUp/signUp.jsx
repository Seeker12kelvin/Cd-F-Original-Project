import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div>
        <form>
          <h1>Welcome back</h1>
          <p>Welcome back! Please enter your details</p>

          <div>
            <div>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' name='name' placeholder='Full-name'/>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' name='email' placeholder='hi@example.com'/>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input id='password' type='text' name='password' placeholder='Enter password'/>
              <div className='flex items-center justify-center'>
                <p>Must be at least 8 characters</p>
                <Link to='/forgot-password'>Forgot Password?</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp