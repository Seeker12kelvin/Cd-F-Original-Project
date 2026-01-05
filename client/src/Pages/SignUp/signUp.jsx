import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./signUp.module.css";
import { FaBath, FaGoogle, FaSquare, FaStarOfLife } from 'react-icons/fa';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../components/User';
import Loading from '../../Images/bouncing-circles.svg'

const SignUp = () => {
  const {push, reference, loadingState, setLoadingState, onValue, userData, setUserData } = useContext(User)
  
  const [found, setFound] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData(prev => (
      { ...prev,
        name: e.target.elements.name.value,
        password: e.target.elements.password.value,
        email: e.target.elements.email.value,
        profilePic: '',
        dateOfBirth: '',
        phoneNumber: '',
        age: ''
      }))
  }
  
  useEffect(() => {
    if (!userData.email || !userData.password) return;

    onValue(reference, snapshot => {
      const data = snapshot.val() || {};
      const userValue = Object.values(data);
      
      const foundUser = userValue.find(
        val => val.email === userData.email && val.password === userData.password
      );

      if(foundUser) {
        setFound(true);
        setLoadingState(prev => !prev)
      }else {
        const newUserRef = push(reference, userData);
        localStorage.setItem("currentUserId", newUserRef.key);
        setLoadingState(prev => !prev)
      }
    })
  }, [userData]);

  useEffect(() => {
    loadingState ?
    setTimeout(() => {
      setLoadingState(prev => !prev)
      navigate('/home')
    }, 3000)
    :
    null
  }, [navigate])

  const handleLoading = () => {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <img
          className='w-40 h-40'
          src={Loading} alt='Loading...' />
      </div>
    )
  }

  return (
    <>
    {!loadingState ?
      <form onSubmit={handleSubmit} className={`${styles['login-form']} w-[50%] h-[80%] flex flex-col gap-6`}>
        <div>
          <h1 className='text-[32px] font-bold'>Welcome back</h1>
          <p className='text-[#000929] opacity-50'>Welcome back! Please enter your details. </p>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input 
              className='border border-[#E0DEF7] bg-[#F7F7FD]' 
              id='name' 
              type='text' 
              name='name' 
              placeholder='Full-name'
              required/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input 
              className='border border-[#E0DEF7] bg-[#F7F7FD]' 
              id='email' 
              type='email' 
              name='email' 
              placeholder='hi@example.com'
              required/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input 
              className='border border-[#E0DEF7] bg-[#F7F7FD]' 
              id='password' 
              type='password' 
              name='password' 
              placeholder='Enter password'
              required/>
            <div className='flex items-center justify-between'>
              <p className='text-[#000929] opacity-50'>Must be at least 8 characters</p>
              <Link to='/forgot-password' className='text-[#7065F0]'>Forgot Password?</Link>
            </div>
          </div>
          {found ? <p>You already have an account set up with us. <Link to={'/signUp&login/login'}>Login?</Link></p>: null}
          
        </div>
        
        <div className='flex gap-2'>
          <input 
            id='checkbox' 
            type='checkbox' 
            name='checkbox'/>
          
          <label htmlFor='checkbox'>I am a property manager</label>
        </div>

        <button
          type='submit'
          className='bg-[#7065F0] text-white'>
          Sign up
        </button>
        

        <button 
          disabled
          className='bg-none border-[#D6DDEB] border flex items-center justify-center gap-2 font-bold'>
          <FaGoogle className='text-xl' />
          Sign up with Google
        </button>


        <p className='text-[#0009297d] text-center'>Already have an account? <Link to='/signUp&login/login' className='font-bold text-black underline'>Login</Link></p>
      </form>
      : 
      handleLoading()
    }
  </>
  )
}

export default SignUp