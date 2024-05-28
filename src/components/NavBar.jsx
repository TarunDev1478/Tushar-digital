import React from 'react'
import '../styles/navbar.css'
import { motion,AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
export default function NavBar(props) {
  const location=useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)
  const [menuOpen, setMenuOpen] = useState(false);
  const handleCheckboxChange = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <AnimatePresence>
        {menuOpen && (
          <div
            className="hamburger"
          >
            <motion.div
              key="nav-image-container"
              initial={{ height: '0vh' }}
              animate={{ height: '100vh' }}
              exit={{ y: '100%', transition: { duration: 1, ease: 'easeInOut' } }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="nav_image"
            >

              <div
                key="background-container"
                className="background"
              >
                <div className='nav-hello'>Tushar Digital Studio</div>
                <motion.div
                  key="f-nav-container"
                  initial={{ opacity: '0.01', x: '-25%' }}
                  animate={{ opacity: '1', x: '0%' }}
                  exit={{ x: '-25%', transition: { duration: 1, ease: 'easeInOut' } }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                  className="f-nav"
                >

                  <Link to='/candid'>1.Candid</Link>
                  <Link to='/videos'>2.Videos</Link>
                  <Link to='/pre'>3.Pre-Weddings</Link>
                  <Link to='/camera'>4.Cameras</Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              key="navigation-container"
              initial={{ y: '+100%', height: '100vh' }}
              animate={{ height: '100vh', y: '0%' }}
              exit={{ height: '0vh' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="navigation"
            >
              <motion.div
                key="f-nav1-container"
                initial={{ opacity: '0.01', x: '-50%' }}
                animate={{ opacity: '1', x: '0%' }}
                exit={{ opacity: '0.01', x: '-50%' }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="f-nav1"
              >
                <a href='/'>1.Home</a>
                <a href='/'>2.About</a>
                <a href='/'>3.Contact Us</a>
                <a href='/'>4.Book Now</a>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.nav

        id="navbar" className={props.showNav||currentPath!=='/' ? 'navbar' : 'hidden'}>
        <div className="navnav" style={{ backgroundColor: menuOpen ? 'transparent' : 'white', display: menuOpen ? 'none' : 'flex' }}>
          <h1>Tushar Digital Studio</h1>
          <ul>
            <li><a href="#services">Contact US</a></li>
            <li><a href="#services">Book Now</a></li>
          </ul>
        </div>
        <input type="checkbox" id="circularmenu" />
        <label htmlFor="circularmenu" className="menu-icon" onClick={handleCheckboxChange} style={{ top: menuOpen ? '50px' : '' }}>
          <div class="line line-1" style={{ transform: menuOpen ? ' rotateZ(-405deg) translate(-0.1rem, 0.6rem)' : '', backgroundColor: menuOpen ? 'white' : '#7a726f' }}></div>
          <div class="line line-2" style={{ opacity: menuOpen ? '0' : '1', backgroundColor: '#7a726f' }}></div>
          <div class="line line-3" style={{ transform: menuOpen ? 'rotateZ(405deg) translate(-0.15rem, -0.6rem)' : '', backgroundColor: menuOpen ? 'white' : '#7a726f' }}></div>
        </label>
      </motion.nav>
    </div>

  )
}
