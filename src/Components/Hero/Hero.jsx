import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

import video2 from '../Assets/videoplayback.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon}  alt="" />


                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div className="hero-latest-btn-text"><a href='/boots'>Lates Collections</a></div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
        <video width="100%" height="1000" autoPlay loop muted>
        <source src={video2} type="video/mp4" />
        {/* You can add multiple <source> tags for different video formats */}
        Your browser does not support the video tag.
      </video>

        </div>
    </div>
  )
}

export default Hero