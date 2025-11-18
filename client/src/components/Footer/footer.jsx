import React from 'react';
import './footer.module.css';
import Logo from '../Logo';
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='w-full flex items-start justify-around gap-2 p-20 pb-10'>
        <Logo />

        <div className='leading-10'>
          <div className='text-[#00092972] mb-5'>
            <h3 className='text-[#000929] font-bold text-[1em]'>SELL A HOME</h3>
            <p>Request an offer</p>
            <p>Pricing</p>
            <p>Reviews</p>
            <p>Stories</p>
          </div>
          <div className='text-[#00092972]'>
            <h3 className='text-[#000929] font-bold text-[1em]'>BUY A HOME</h3>
            <p>Buy</p>
            <p>Finance</p>
          </div>
        </div>

        <div className='leading-10'>
          <div className='text-[#00092972] mb-5'>
            <h3 className='text-[#000929] font-bold text-[1em]'>BUY, RENT AND SELL</h3>
            <p>Buy and sell properties</p>
            <p>Rent home</p>
            <p>Builder trade-up</p>
          </div>
          <div className='text-[#00092972]'>
            <h3 className='text-[#000929] font-bold text-[1em]'>TERMS & PRIVACY</h3>
            <p>Trust & Safety</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className='leading-10'>
          <div className='text-[#00092972] mb-5'>
            <h3 className='text-[#000929] font-bold text-[1em]'>ABOUT</h3>
            <p>Company</p>
            <p>How it works</p>
            <p>Contact</p>
            <p>Investors</p>
          </div>
          <div className='text-[#00092972]'>
            <h3 className='text-[#000929] font-bold text-[1em]'>RESOURCES</h3>
            <p>Blog</p>
            <p>Guides</p>
            <p>FAQ</p>
            <p>Help Center</p>
          </div>
        </div>
      </div>

      <footer className='flex justify-between items-center p-7 pl-40 pr-40 font-light border-t-[#E8E6F9] border text-[#00092950]'>
        <p className='flex items-center gap-2'><FaCopyright /> 2025 Eastery. All rights reserved</p>
        <div className='flex items-center gap-10 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </footer>
    </>
  )
}

export default Footer