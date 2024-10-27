import React from 'react'

const BannerDetails = () => {
  return (
    <div>
        <section id="products">
            <div className="products__card">
                {/* <div className="products__head">
                    <h1>FloodEye Product Catalog</h1>
                    <p>Explore our cutting-edge flood early warning system products designed to keep you safe and informed.</p>
                </div> */}
                
                {/* <div className="product__one">
                    <div className="d-flex align-items-top">
                        <img src="/images/Monitoring Station.png" alt="Station" />
                        <div className="d-flex flex-column">
                            <p><strong>Community Empowerment</strong><br/>FloodEye plays a critical role in empowering communities to better understand, 
                                prepare for, and respond to flood risks. Community empowerment goes beyond simply informing the public; it involves active engagement, 
                                education, and the inclusion of local knowledge and experiences in flood management strategies. 
                                By fostering a collaborative approach, we can ensure that communities are resilient, prepared, and capable of reducing their vulnerability to floods.
                            </p>
                        </div>
                    </div>
                </div> */}

                <div className="product__two">
                    <div className="d-flex align-items-top">
                        <div className="d-flex flex-column">
                            <p><strong>FloodEye 1.0 Mobile App</strong><br/>Our mobile app allows users to receive instant alerts and 
                                updates on potential flood risks, enabling quick and efficient response to potential threats.
                            </p>
                        </div>
                        <img src="/images/flood-eye-app.png" alt="Climate Resilience" />
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default BannerDetails