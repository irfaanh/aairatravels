import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className='hero bg-black'>
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="herofull row align-items-center">
        <div className="heroleft col-lg-6 text-md-center text-sm-center">
          <h1 className='caption_head text-center'>Turning <span className='caption'>Travel</span> <br /> Into <span className='caption'>Tales</span></h1>
          <a href={`tel:${917902606303}`}><button className="cont_btn">Book Now</button></a>
        </div>
        <div className="col-lg-6 text-md-center text-sm-center">
          <img
            className="center_img mw-100"
            src="/images/aero.gif"
            alt="heroimg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero