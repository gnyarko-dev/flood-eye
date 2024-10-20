import React from 'react'
import '../styles/styles.css'

function JoinUs() {
  return (
    <div>
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
    </div>
  )
}

export default JoinUs