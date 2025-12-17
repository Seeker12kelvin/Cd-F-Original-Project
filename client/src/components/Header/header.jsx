import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Logo from '../Logo.jsx';
import Footer from '../Footer/footer.jsx';
import "./header.module.css";
import HeaderContent from '../HeaderContent.jsx';

const Header = () => {

  return (
    <>
     
      <HeaderContent />

      <Outlet />

      <Footer />
    </>
  )
}

export default Header