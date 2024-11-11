import React from 'react'
import '../styles/styles.css'

function Footer() {
  return (
    <div>
        <footer>
            <div className="foot">
            <div className="copy">
                <p>&#169; 2024 FloodEye. All Rights Reserved.</p>
            </div>
            <div className="socialIcons d-flex justify-content-end">
                <a href="https://www.instagram.com/flood.eye/profilecard/?igsh=c2lkaTZmNXh6dnR5" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/floodeye/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                </a>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer