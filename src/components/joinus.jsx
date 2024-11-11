import React from 'react';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import {fadeIn} from '../variant';

function JoinUs() {
  return (
    <div>
        <section id="part__of__ous">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}
          
          className="mal">
            <h4>Join Us Now</h4>
            <p>Want to be the first person to hear from us?</p>
            <form action="" method="post">
                <input type="text" name="name" placeholder="Your Name" className="nputname" required />
                <input type="email" name="email" placeholder="Enter Email" className="nputemal" required />
                <input type="submit" value="Submit" className="nputSubmt" />
            </form>
          </motion.div>
        </section>
    </div>
  )
}

export default JoinUs