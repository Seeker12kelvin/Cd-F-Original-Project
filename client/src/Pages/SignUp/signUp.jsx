import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./signUp.module.css";
import { FaBath, FaGoogle, FaSquare, FaStarOfLife } from 'react-icons/fa';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../components/User';
import Loading from '../../Images/bouncing-circles.svg'
import firebaseLogic from '../../components/firebaseLogic';

const SignUp = () => {
  const { loadingState, setLoadingState, setUserData } = useContext(User);

  const { reference, push, get } = firebaseLogic();
  
  const [found, setFound] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    setUserData(prev => ({...prev, name, email, password}))

    const newUserData = {
      name,
      email,
      password,
      profilePic: '',
      dateOfBirth: '',
      phoneNumber: '',
      age: '',
      favorites: [],
      createdAt: Date.now()
    };

    try {
      const snapshot = await get(reference);
      const users = snapshot.exists() ? Object.values(snapshot.val()) : [];

      const emailExists = users.find(user => user.email === email);

      if (emailExists) {
        setFound(true);
        return;
      }

      const newUserRef = await push(reference, newUserData);

      localStorage.setItem("currentUserId", newUserRef.key);
      localStorage.setItem("loginUserData", JSON.stringify(newUserData));

      setUserData(newUserData);
      setLoadingState(true);

    } catch (error) {
      console.error("Signup error:", error);
    }
  };


  useEffect(() => {
    if(loadingState){
      setTimeout(() => {
        setLoadingState(prev => !prev)
        navigate('/home')
      }, 3000)
    }
  }, [loadingState, navigate])

  useEffect(() => {
    const storedData = localStorage.getItem('loginUserData');

    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, [setUserData]);

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