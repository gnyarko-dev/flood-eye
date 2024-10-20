import React from 'react'
import '../styles/styles.css'

function OurStory() {
  return (
    <div>
        <section id="ourstory" className="mx-5">
            <div className="story p-5">
                <h1>Our Story</h1>
                <p>Flooding in Ghana is becoming more severe with each passing year.</p>
                <p>Over the past decade, Ghana has recorded an average of 25 major floods annually, 
                    affecting close to 50,000 people and causing millions in property damage. 
                    Poor drainage systems and a lack of early warning mechanisms have left many communities unprepared and vulnerable.</p>
                <p>At FloodEye, we are committed to changing this narrative. Our solution is an intelligent early flood detection system, 
                    biodegradable flood barriers, and water redirection for agriculture. 
                    By deploying over 200 IoT and solar-powered sensors across high-risk flood zones, we gather real-time data and provide timely alerts, 
                    allowing local authorities and residents to take action before, during, and after disaster strikes. Additionally, by collaborating with insurance companies,
                    we aim to incentivize homeowners and businesses in flood-prone areas to adopt FloodEye's early warning system, thus reducing insurance costs.</p>
                <p>Our vision? To prevent flood-related casualties within the next five years and ensure that no community is caught off guard by preventable floods.</p>
                <button><a href="/" className="learn__btn">Learn more</a></button>
            </div>
        </section>
    </div>
  )
}

export default OurStory