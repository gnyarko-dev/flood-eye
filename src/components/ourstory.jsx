import React from 'react';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import {fadeIn} from '../variant';

function OurStory() {
  return (
    <div>
        <section id="ourstory" className="mx-5">
            <div className="story p-5">
                <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}

                >Our Story</motion.h1>
                <motion.p
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}

                >Flooding in Ghana is becoming more severe with each passing year.</motion.p>
                <motion.p
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}

                >Over the past decade, Ghana has recorded an average of 25 major floods annually, 
                    affecting close to 50,000 people and causing millions in property damage. 
                    Poor drainage systems and a lack of early warning mechanisms have left many communities unprepared and vulnerable.</motion.p>
                <motion.p
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}

                >At FloodEye, we are committed to changing this narrative. Our solution is an intelligent early flood detection system, 
                    biodegradable flood barriers, and water redirection for agriculture. 
                    By deploying over 200 IoT and solar-powered sensors across high-risk flood zones, we gather real-time data and provide timely alerts, 
                    allowing local authorities and residents to take action before, during, and after disaster strikes. Additionally, by collaborating with insurance companies,
                    we aim to incentivize homeowners and businesses in flood-prone areas to adopt FloodEye's early warning system, thus reducing insurance costs.</motion.p>
                <motion.p
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}

                >Our vision? To prevent flood-related casualties within the next five years and ensure that no community is caught off guard by preventable floods.</motion.p>
                <motion.button
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}

                ><a href="/" className="learn__btn">Learn more</a></motion.button>
            </div>
        </section>
    </div>
  )
}

export default OurStory