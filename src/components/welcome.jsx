import React from 'react';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import {fadeIn} from '../variant';

function Welcome() {
  return (
    <div>
        <section id="welpage">
            <div className="main">
                <div className="main__container">
                    <div className="main__content">
                        <motion.h1
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true, amount: 0.7}}

                        ><b>Welcome to FloodEye</b></motion.h1>
                        <motion.button 
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true, amount: 0.7}}

                        className="main__btn"><a href="/"><b>Connect</b></a></motion.button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome