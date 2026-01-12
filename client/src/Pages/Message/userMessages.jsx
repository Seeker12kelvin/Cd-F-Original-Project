import React, { useContext, useEffect } from 'react'
import { FaX, FaXmark } from 'react-icons/fa6'
import User from '../../components/User'
import { useNavigate } from 'react-router-dom'
import NewMessageModal from './newMessageModal'
import { listOfUserMessages } from '../../data/data'

const UserMessages = () => {

  const navigate = useNavigate()

  const { 
    onValue, 
    reference,
    setChatUser,
    setNewMessage, 
    userEmail, 
    setThere,
    setMany
  } = useContext(User)

  let identity = 0;

  useEffect(() => {
    if(!userEmail){
      return
    }
    
    onValue(reference, snapshot => {
      const data = snapshot.val()
      const userValue = Object.values(data)
      const found = userValue.find(val => val.email === userEmail)
      if(found && listOfUserMessages.length === 0){
        setChatUser(found)
        navigate('/message/chat')
        listOfUserMessages.push({ id: ++identity, ...found})
      }else if(found && listOfUserMessages.length > 0){
        listOfUserMessages.push({ id: ++identity, ...found})
        setMany('entered')
      }else {
        setThere(true)
      }
    })

  }, [userEmail])

  return (
    <>
      
      <section className='m-auto w-88 flex flex-col gap-5 items-center text-center rounded-lg'>
        {/* Message content goes here */}
        <h2 className='font-bold text-2xl'>Messages</h2>
        <p className='text-[#6C727F]'>Messages is a feature that helps you converse with applicants and landlords. Let’s send your first message.</p>
        <button
          onClick={() => setNewMessage(prev => !prev)}
          className='bg-[#7065F0] text-white px-4 py-2 rounded-lg'>
          New Message
        </button>
      </section>

      <NewMessageModal />
    </>
  )
}

export default UserMessages