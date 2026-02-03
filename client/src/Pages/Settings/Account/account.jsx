import { useState } from "react";
import styles from "./account.module.css"
import { BsNintendoSwitch } from "react-icons/bs";

import { IoMdSwitch } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Account = () => {

  const [switchBtn, setSwitchBtn] = useState(false)
  
  return (
    <form className={`${styles['Account-form']} m-auto mt-20.5 w-157 shadow-md`}>
      <div className={`${styles['first-section']} gap-4 mb-6 border-b-[0.09375rem] pb-6 p-5 border-[#E0DEF7]`}>
        <h2 className='font-medium text-xl'>My Account</h2>

        <label>
          Email
          <input id="" name="" type="email"  />
        </label>

        <label>
          Password
          <input id="" name="" />
        </label>

        <div>
          <div className="flex justify-between w-full">
            <h4>Enable 2-steps verification</h4>
            <button 
              type="button"
              className=""
              onClick={() => setSwitchBtn(prev => !prev)}>
              { switchBtn
                ?
                <IoIosSwitch />
                :
                <IoMdSwitch />
              }
            </button>
          </div>
          <p className="text-[#0009297e]">Make your account extra secure. Along with your password, you’ll need to enter a code that we text to your phone each time you sign in.</p>
        </div>
      </div>

      <div className={`${styles['second-section']} gap-4 mb-6 border-b-[0.09375rem] pb-6 p-5 border-[#E0DEF7]`}>
        <h3>Linked Accounts</h3>
        <p className="text-[#0009297e]">We use this to let you sign in easily.</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center justify-between">
            <FaGoogle className="scale-150"/>
            <p>Sign in with Google</p>
          </div>
          <button type="button" className="border-2 border-[#E0DEF7]">Remove</button>
        </div>
      </div>
    </form>
  )
}

export default Account