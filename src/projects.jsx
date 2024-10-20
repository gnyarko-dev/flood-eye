import React, { useState } from 'react';
import './styles/styles.css'

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar Section */}
      <section id="navbar" className="sticky-top">
        <nav>
          <div className="logo">
            <a href="/" id="navbar__logo">
              <img src="/images/floodeye.png" alt="floodeye" />
              <b>FloodEye</b>
            </a>
          </div>
          <ul id="menuList" style={{ maxHeight: menuOpen ? '300px' : '0px' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/blog.html">Blogs</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </section>

      {/* Welcome Section */}
      <section id="welpage">
        <div className="main">
          <div className="main__container">
            <div className="main__content">
              <h1><b>Welcome to FloodEye</b></h1>
              <button className="main__btn">
                <a href="/"><b>Connect</b></a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="ourstory" className="mx-5">
        <div className="story p-5">
          <h1>Our Story</h1>
          <p>Flooding in Ghana is becoming more severe with each passing year.</p>
          <p>
            Over the past decade, Ghana has recorded an average of 25 major floods annually, 
            affecting close to 50,000 people and causing millions in property damage. 
            Poor drainage systems and a lack of early warning mechanisms have left many communities unprepared and vulnerable.
          </p>
          <p>
            At FloodEye, we are committed to changing this narrative. Our solution is an intelligent early flood detection system, 
            biodegradable flood barriers, and water redirection for agriculture.
          </p>
          <button>
            <a href="/" className="learn__btn">Learn more</a>
          </button>
        </div>
      </section>

      {/* Missions and Values */}
      <section id="missions-values">
        <div className="missions__card">
          <div className="missions">
            <h1>MISSIONS AND VALUES</h1>
            <p>We are committed to safeguarding communities and ensuring that our planet is the safest place to live.</p>
          </div>

          {/* Community Empowerment */}
          <div className="cempower">
            <div className="d-flex align-items-center">
              <img src="/images/cempower.png" alt="Community Empowerment" />
              <div className="d-flex flex-column">
                <p>
                  <strong>Community Empowerment</strong><br />
                  FloodEye plays a critical role in empowering communities to better understand, prepare for, and respond to flood risks.
                </p>
              </div>
            </div>
          </div>

          {/* Climate Resilience */}
          <div className="cresilience">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column">
                <p>
                  <strong>Climate Resilience</strong><br />
                  We are committed to developing innovative, adaptive solutions that anticipate future flood risks.
                </p>
              </div>
              <img src="/images/cresilience.png" alt="Climate Resilience" />
            </div>
          </div>

          {/* Collaboration, Integrity, and Accountability */}
          <div className="cempower">
            <div className="d-flex align-items-center">
              <img src="/images/collab.png" alt="Collaboration, Integrity and Accountability" />
              <div className="d-flex flex-column">
                <p>
                  <strong>Collaboration, Integrity, and Accountability</strong><br />
                  We are committed to working with local governments, stakeholders, and the public to ensure transparency and fairness.
                </p>
              </div>
            </div>
          </div>

          {/* Innovation and Excellence */}
          <div className="cresilience">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column try__me">
                <p>
                  <strong>Innovation and Excellence</strong><br />
                  At FloodEye, innovation and excellence are vital to staying ahead of evolving flood risks and climate challenges.
                </p>
              </div>
              <img src="/images/nnovate.png" alt="Innovation and Excellence" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="meet-minds">
        <div className="team__title">
          <h6>TEAM</h6>
          <h3>Meet The Minds</h3>
          <div id="card-teams" className="d-flex flex-wrap justify-content-center align-items-center">
            {/* Team Card Example */}
            <div className="card m-5" style={{ width: '25rem', height: '30rem' }}>
              <div className="card-overlay">
                <img src="/images/cempower.png" className="card-img" alt="Founder Adusi Poku Besea" />
                <div className="card-text">
                  <h5 className="card-title">ADUSI POKU BESEA</h5>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat similar cards for other team members */}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="part__of__ous">
        <div className="mal">
          <h4>Join Us Now</h4>
          <p>Want to be the first person to hear from us?</p>
          <form action="" method="post">
            <input type="text" name="name" placeholder="Your Name" className="nputname" required />
            <input type="email" name="email" placeholder="Enter Email" className="nputemal" required />
            <input type="submit" value="Submit" className="nputSubmt" />
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="foot">
          <div className="copy">
            <p>&#169; 2024 FloodEye. All Rights Reserved.</p>
          </div>
          <div className="socialIcons d-flex justify-content-end">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
