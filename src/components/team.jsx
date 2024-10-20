import React from 'react'
import '../styles/styles.css'

function Team() {
  return (
    <div>
        <section id="meet-minds">
          <div className="team__title">
            <h6>TEAM</h6>
            <h3>Meet The Minds</h3>
            <div id="card-teams" className="d-flex flex-wrap justify-content-center align-items-center">
                {/* Card 1 */}
                <div className="card m-5" style={{ width: '25rem', height: '30rem' }}>
                    <div className="card-overlay">
                        <img src="/images/cempower.png" className="card-img" alt="Founder Adusi Poku Besea" />
                        <div className="card-text">
                            <h5 className="card-title">ADUSI POKU BESEA</h5><br />
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
              </div>
              {/* Card 2 */}
              <div className="card m-5" style={{ width: '25rem', height: '30rem' }}>
                    <div className="card-overlay">
                        <img src="/images/cempower.png" className="card-img" alt="Founder Adusi Poku Besea" />
                        <div className="card-text">
                            <h5 className="card-title">ADUSI POKU BESEA</h5><br />
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
              </div>
              {/* Card 3 */}
              <div className="card m-5" style={{ width: '25rem', height: '30rem' }}>
                    <div className="card-overlay">
                        <img src="/images/cempower.png" className="card-img" alt="Founder Adusi Poku Besea" />
                        <div className="card-text">
                            <h5 className="card-title">ADUSI POKU BESEA</h5><br />
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
              </div>
              {/* Card 4 */}
              <div className="card m-5" style={{ width: '25rem', height: '30rem' }}>
                    <div className="card-overlay">
                        <img src="/images/cempower.png" className="card-img" alt="Founder Adusi Poku Besea" />
                        <div className="card-text">
                            <h5 className="card-title">ADUSI POKU BESEA</h5><br />
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
              </div>
              {/* More team cards */}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Team