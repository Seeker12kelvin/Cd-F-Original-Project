import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./login.module.css";
import { FaBath, FaGoogle, FaStarOfLife } from 'react-icons/fa';
import Logo from '../../components/Logo';
import BeverlyImg from "../../Images/BeverlySpring.png";
import LogoImg from "../../Images/Logo.png";
import DesignFlag from "../../Images/Design-Flag.png";
import { FaHeart } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import Squares from "../../Images/Square-Meters-Outline.png";
import User from '../../components/User';
import Loading from '../../../bouncing-circles.svg'

const Login = () => {

  const { 
    onValue, 
    reference, 
    userData, 
    notFound, 
    loadingState, 
    setLoadingState, 
    setNotFound, 
    setUserData, 
    setUserValidity, 
    userValidity } = useContext(User)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserValidity({...userValidity, email: e.target.elements.email.value, password: e.target.elements.password.value})
  }

  useEffect(() => {
    if(!userValidity.email || !userValidity.password){
      return
    }
    
    onValue(reference, snapshot => {
      const data = snapshot.val()
      const userValue = Object.values(data)
      const found = userValue.find(val => val.email === userValidity.email && val.password === userValidity.password)
      if(found){
        setLoadingState(true)
        loadingState ? navigate('/home'): null
        setUserData(...userData, ...found)

        setTimeout(() => {
          setLoadingState(false)
        }, 3000)

        setUserData({...userData, ...found})

      }else {
        setNotFound(prev => !prev)
      }
    })

  }, [userValidity])

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
      <div className='flex justify-between h-screen'>
        <div className='w-[50%] flex flex-col gap-10 items-center h-full'>
          <div className='h-[10%] border border-[#E0DEF7] justify-self-start w-full flex pl-15'>
            <Logo className='self-center justify-self-start'/>
          </div>

          {!loadingState ?
          <form onSubmit={handleSubmit} className={`${styles['login-form']} w-[50%] h-[80%] flex flex-col gap-6`}>
            <div>
              <h1 className='text-[32px] font-bold'>Welcome back</h1>
              <p className='text-[#000929] opacity-50'>Welcome back! Please enter your details. </p>
              <p>{userData.email}</p>
            </div>

            <div className='flex flex-col gap-6'>
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

                  <Link to='/forgot-password' className='text-[#7065F0] text-center'>Forgot Password?</Link>
              </div>
              {notFound ? <p>!You do not have an account set up with us. <Link to={'/sign-up'}>Sign up?</Link></p>: null}
            </div>

            <div className='flex flex-col gap-3'>
              <button
                className='bg-[#7065F0] text-white'>
                Login
              </button>
              

              <button 
                className='bg-none border-[#D6DDEB] border flex items-center justify-center gap-2 font-bold'>
                <FaGoogle className='text-xl' />
                Continue with Google
              </button>
            </div>


            <p className='text-[#0009297d] text-center'>Don't have an account? <Link to='/sign-up' className='font-bold text-black underline'>Sign up for free</Link></p>
          </form> : handleLoading() }
        </div>

        <div className='w-[50%] h-full bg-[#F7F7FD] relative flex flex-col'>
          <img
            className='absolute top-0 left-0 h-[250px]' 
            src={DesignFlag} 
            alt='Background' />

          <div 
            className='p-4 bg-white w-[400px] shadow-xl shadow-[#00000010] rounded-xl border-[#D6DDEB] border-2 flex flex-col gap-6 absolute z-4 left-30 top-28'>

            <img
              className='rounded-xl object-cover'
              src={BeverlyImg} 
              alt='Beverly Springs'/>

            <div className='border-b border-[#F0EFFB] pb-3 flex items-center justify-between'>
              <div>
                <h3 className='font-bold'>Beverly Springfeild</h3>
                <p className='text-[#6C727F] text-sm'>2821 Sevilla, Palm Harbor, TX</p>
              </div>
              <div className='border-2 border-[#F0EFFB] p-2 rounded-[50%] w-fit float-right'>
                <FaHeart />
              </div>
            </div>

            <div className='flex gap-3'>
              <p className='flex text-sm items-center gap-1'><FaBed /> 4 Beds</p>
              <p className='flex text-sm items-center gap-1'><FaBath /> 2 Bathrooms</p>
              <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> 6x7.5 m²</p>
            </div>

            <div className='bg-[#F7F7FD] border-2 flex p-3.5 justify-between items-center rounded-xl border-[#F0EFFB]'>

              <div className='flex flex-col gap-1.5'>
                <p>Rent Sale</p>
                <h3 className='text-[#7065F0] text-2xl font-bold'>$2,700<span className='text-[#6C727F] text-sm'>/month</span></h3>
              </div>
              
              <button className='bg-[#100A55] p-3 pl-6 pr-6 rounded-xl text-white'>Apply now </button>
            </div>

          </div>

          <div className='bottom-10 ml-20 absolute text-[12px] w-md gap-4 flex flex-col '>
            <h3 className='flex items-center gap-2.5'>Powered by <img className='h-5' src={LogoImg} alt='Logo'/> </h3>
            <p>You agree to Estatery's <span className='text-[#7065F0]'>Terms of Use & Privacy Policy</span>. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</p>
          </div>

          <div 
            className='bg-[#7065F0] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-77 left-27'>
            <FaStarOfLife />
            <p>POPULAR</p>
          </div>

          <div 
            className='bg-[#5245ED] h-10 rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center z-3 absolute top-[21.569rem] left-[6.704rem]'>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default Login