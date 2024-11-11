import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import {fadeIn} from '../variant';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when the window is resized to a larger screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close the menu when window width is more than 768px
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <section id="navbar" className="sticky-top">
        <nav>
          <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}

          className="logo">
            <a href="/" id="navbar__logo">
              <img src="/images/floodeye.png" alt="floodeye" className='logo' />
              <b>FloodEye</b>
            </a>
          </motion.div>
          <ul
            id="menuList"
            style={{ maxHeight: menuOpen ? '300px' : '0px' }}
            className='navlist'
          >
            <motion.li
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount: 0.7}}

            ><a href="/">Home</a></motion.li>
            <motion.li
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount: 0.7}}
            ><a href="/projects">Projects</a></motion.li>
            <motion.li 
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount: 0.7}}
            ><a href="/#meet-minds">About Us</a></motion.li>
            {/* <motion.li><a href="/blog.html">Blogs</a></motion.li> */}
            {/* <motion.li><a href="/contacts">Contact</a></motion.li> */}
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;