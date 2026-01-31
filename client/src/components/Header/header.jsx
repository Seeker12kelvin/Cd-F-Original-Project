import { Outlet } from 'react-router-dom';
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