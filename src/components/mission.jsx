import React from 'react'
import '../styles/styles.css'
import '../styles/mediaquery.css'

function Mission() {
  return (
    <div>
        <section id="missions-values">
            <div className="missions__card">
                <div className="missions">
                    <h1>MISSIONS AND VALUES</h1>
                    <p>We are committed to safeguarding communities and ensuring that our planet is the safest place to live.</p>
                </div>
                
                <div className="cempower">
                    <div className="d-flex align-items-center">
                        <img src="/images/cempower.png" alt="Community Empowerment" />
                        <div className="d-flex flex-column">
                            <p><strong>Community Empowerment</strong><br/>FloodEye plays a critical role in empowering communities to better understand, 
                                prepare for, and respond to flood risks. Community empowerment goes beyond simply informing the public; it involves active engagement, 
                                education, and the inclusion of local knowledge and experiences in flood management strategies. 
                                By fostering a collaborative approach, we can ensure that communities are resilient, prepared, and capable of reducing their vulnerability to floods.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cresilience">
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                            <p><strong>Climate Resilience</strong><br/>We are committed to developing innovative, adaptive solutions that anticipate future flood risks, 
                                promote sustainable practices, and foster collaboration with communities and stakeholders. By prioritizing climate resilience, 
                                we aim to safeguard vulnerable populations and create environments that can thrive despite the growing threat of floods. 
                                Climate resilience guides all aspects of flood management to prepare for both current and future climate risks.
                            </p>
                        </div>
                        <img src="/images/cresilience.png" alt="Climate Resilience" />
                    </div>
                </div>

                <div className="cempower">
                    <div className="d-flex align-items-center">
                        <img src="/images/collab.png" alt="Collaboration, Integrity and Accountability" />
                        <div className="d-flex flex-column">
                            <p><strong>Collaboration, Integrity and Accountability</strong><br/>We are committed to working with local governments, stakeholders, and the public, 
                                ensuring flood risk management strategies are executed with integrity, effectiveness, and fairness. 
                                We uphold transparency, ethical practices, and accountability in decision-making to gain the trust of the communities we serve.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cresilience">
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column try__me">
                            <p><strong>Innovation and Excellence</strong><br/>At FloodEye, innovation and excellence are vital to staying ahead of evolving flood risks and climate challenges. 
                                These values drive us to constantly seek new, creative solutions while maintaining the highest standards of service. 
                                We strive to lead with cutting-edge technology and superior performance to meet and exceed the needs of the communities we serve.
                            </p>
                        </div>
                        <img src="/images/1nnovate.png" alt="Innovation and Excellence" />
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Mission