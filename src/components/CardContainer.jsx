import React from 'react'

const CardContainer = () => {
  return (
    <div className="">
        
        <div className="products__head">
            <h1>FloodEye Project Catalog</h1>
            <p>Explore our cutting-edge flood early warning system projects designed to keep you safe and informed.</p>
        </div>


        <div className='Project-container'>

            <div className="Project">
                <img src="/images/advan-sensor.png" alt="" />
                <div className="Project-content">
                    <h1>Advanced Sensor Technology</h1>
                    <p>Our cutting-edge solar-powered and energy-efficient IoT sensors detect water levels and weather patterns to 
                        provide real-time data for accurate flood predictions, allowing for timely evacuation and preparation. 
                        These can ensure reliability even in remote areas where power supply is a challenge. 
                    </p>
                    <a href="" className='Project-button'>Read More</a>
                </div>
            </div>

            <div className="Project">
                <img src="/images/advan-bio.png" alt="" />
                <div className="Project-content">
                    <h1>Advanced Biodegradable Flood Barriers</h1>
                    <p>Our flood barriers are made from biodegradable or recycled materials that can temporarily protect areas from rising waters 
                        but decompose after use. These offer a more eco-friendly solution that minimizes long-term waste.
                    </p>
                    <a href="" className='Project-button'>Read More</a>
                </div>
            </div>

            <div className="Project">
                <img src="/images/advan-water.png" alt="" />
                <div className="Project-content">
                    <h1>Advanced Water Redirection for Agriculture</h1>
                    <p>These systems not only warn against floods but also redirect excess floodwater into storage tanks for agricultural use or 
                        groundwater replenishment. This innovation could turn a potentially destructive flood into a valuable resource, 
                        especially in areas prone to droughts after flooding seasons.
                    </p>
                    <a href="" className='Project-button'>Read More</a>
                </div>
            </div>

            <div className="Project">
                <img src="/images/Monitoring Station.png" alt="" />
                <div className="Project-content">
                    <h1>FloodEye 1.0 Monitoring Station</h1>
                    <p>The FloodEye 1.0 Monitoring Station is equipped with state-of-the-art sensors to provide real-time data on water levels, 
                        rainfall, and weather conditions.
                    </p>
                    <a href="" className='Project-button'>Read More</a>
                </div>
            </div>

        </div>
    </div>
    // <div className='Project-container'>
        
    //     {/* <div className="products__head">
    //         <h1>FloodEye Product Catalog</h1>
    //         <p>Explore our cutting-edge flood early warning system products designed to keep you safe and informed.</p>
    //     </div> */}

    //     <div className="Project">
    //         <img src="/images/cresilience.png" alt="" />
    //         <div className="Project-content">
    //             <h1>Advanced Sensor Technology</h1>
    //             <p>Our cutting-edge solar-powered and energy-efficient IoT sensors detect water levels and weather patterns to 
    //                 provide real-time data for accurate flood predictions, allowing for timely evacuation and preparation. 
    //                 These can ensure reliability even in remote areas where power supply is a challenge. 
    //             </p>
    //             <a href="" className='Project-button'>Read More</a>
    //         </div>
    //     </div>

    //     <div className="Project">
    //         <img src="/images/cresilience.png" alt="" />
    //         <div className="Project-content">
    //             <h1>Advanced Biodegradable Flood Barriers</h1>
    //             <p>Our flood barriers are made from biodegradable or recycled materials that can temporarily protect areas from rising waters 
    //                 but decompose after use. These offer a more eco-friendly solution that minimizes long-term waste.
    //             </p>
    //             <a href="" className='Project-button'>Read More</a>
    //         </div>
    //     </div>

    //     <div className="Project">
    //         <img src="/images/cresilience.png" alt="" />
    //         <div className="Project-content">
    //             <h1>Advanced Water Redirection for Agriculture</h1>
    //             <p>These systems not only warn against floods but also redirect excess floodwater into storage tanks for agricultural use or 
    //                 groundwater replenishment. This innovation could turn a potentially destructive flood into a valuable resource, 
    //                 especially in areas prone to droughts after flooding seasons.
    //             </p>
    //             <a href="" className='Project-button'>Read More</a>
    //         </div>
    //     </div>

    //     <div className="Project">
    //         <img src="/images/Monitoring Station.png" alt="" />
    //         <div className="Project-content">
    //             <h1>FloodEye 1.0 Monitoring Station</h1>
    //             <p>The FloodEye 1.0 Monitoring Station is equipped with state-of-the-art sensors to provide real-time data on water levels, 
    //                 rainfall, and weather conditions.
    //             </p>
    //             <a href="" className='Project-button'>Read More</a>
    //         </div>
    //     </div>

    // </div>
  )
}

export default CardContainer