import { useContext } from 'react'
import User from '../../components/User'
import NewMessageModal from './newMessageModal'

const UserMessages = () => {

  const {
    setMessgeState 
  } = useContext(User)

  return (
    <>
      <section className='m-auto w-88 flex flex-col gap-5 items-center text-center rounded-lg'>
        {/* Message content goes here */}
        <h2 className='font-bold text-2xl'>Messages</h2>
        <p className='text-[#6C727F]'>Messages is a feature that helps you converse with applicants and landlords. Let’s send your first message.</p>
        <button
          onClick={() => setMessgeState(prev => ({...prev, newMessage: !prev}))}
          className='bg-[#7065F0] text-white px-4 py-2 rounded-lg'>
          New Message
        </button>
      </section>

      <NewMessageModal />
    </>
  )
}

export default UserMessages