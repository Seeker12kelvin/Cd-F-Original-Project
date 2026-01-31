import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./login.module.css";
import { FaGoogle } from 'react-icons/fa';
import User from '../../components/User';
import Loading from '../../Images/bouncing-circles.svg'
import firebaseLogic from '../../services/firebaseLogic';

const Login = () => {

  const { 
    userData,
    authState,
    setAuthState,
    setUserData,} = useContext(User)

  const {
    onValue,
    reference
  } = firebaseLogic();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setAuthState(prev => ({...prev.userValidity, email: e.target.elements.email.value, password: e.target.elements.password.value}))
  }

  useEffect(() => {

    if(!authState.userValidity.email || !authState.userValidity.password){
      return
    }else if(localStorage.getItem('loginUserData')){
      const storedData = JSON.parse(localStorage.getItem('loginUserData'))
      setUserData(prev => ({...prev, name: storedData.name, email: storedData.email, password: storedData.password}))
      setAuthState(prev => ({...prev, loadingState: !prev}))
      return
    }
    
    try{
      onValue(reference, snapshot => {
        const data = snapshot.val()
        const userValue = Object.values(data)
        const found = userValue.find(val => val.email === authState.userValidity.email && val.password === authState.userValidity.password)
        if(found){
          setAuthState(prev => ({...prev, loadingState: !prev}))
          setUserData(prev => ({...prev, ...found}))
          localStorage.setItem('User-Logged-Info', {...found})
        }else {
          setAuthState(prev => ({...prev, notFound: !prev}))
        }
      })
    }catch(err) {
      console.log(err)
    }

  }, [authState.userValidity])

  useEffect(() => {

    authState.loadingState ?
    setTimeout(() => {
      setAuthState(prev => ({...prev, loadingState: !prev}))
      navigate('/home')
      setAuthState(prev => ({...prev, userLogged: !prev}))

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
    {!authState.loadingState ?
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
          {authState.notFound ? <p>!You do not have an account set up with us. <Link to={'/signUp&login/sign-up'}>Sign up?</Link></p>: null}
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


        <p className='text-[#0009297d] text-center'>Don't have an account? <Link to='/signUp&login' className='font-bold text-black underline'>Sign up for free</Link></p>
      </form> 
      : 
      handleLoading()
    }
        
    </>
  )
}

export default Login