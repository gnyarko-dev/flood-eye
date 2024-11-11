import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import {fadeIn} from '../variant';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when the window is resized to a larger screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(true); // Close the menu when window width is more than 768px
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
          <motion.ul
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}

            id="menuList"
            style={{ maxHeight: menuOpen ? '300px' : '0px' }}
            className='navlist'
          >
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/#meet-minds">About Us</a></li>
            <li><a href="/blog.html">Blogs</a></li>
            <li><a href="/contacts">Contact</a></li>
          </motion.ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;