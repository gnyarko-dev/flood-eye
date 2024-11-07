import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

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
          <div className="logo">
            <a href="/" id="navbar__logo">
              <img src="/images/floodeye.png" alt="floodeye" className='logo' />
              <b>FloodEye</b>
            </a>
          </div>
          <ul
            id="menuList"
            style={{ maxHeight: menuOpen ? '300px' : '0px' }}
            className='navlist'
          >
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/#meet-minds">About Us</a></li>
            <li><a href="/blog.html">Blogs</a></li>
            <li><a href="/contacts">Contact</a></li>
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