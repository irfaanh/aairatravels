import React from 'react'
import './Packages.css'
import { GoArrowRight } from "react-icons/go";

const packagesweprovide = [
  { id: 'andaman', title: 'Andaman', img: '/images/andamanislang.jpg', btnText: 'Book Now' },
  { id: 'malaysia', title: 'Malaysia', img: '/images/malaysia.jpg', btnText: 'Book Now' },
  { id: 'kashmir', title: 'Kashmir', img: '/images/jammu.webp', btnText: 'Book Now' },
  { id: 'lakshadweep', title: 'Lakshadweep', img: '/images/lakshadweep.jpg', btnText: 'Book Now' },
  { id: 'agra', title: 'Delhi and Agra', img: '/images/agra.jpg', btnText: 'Book Now' },
  { id: 'manali', title: 'Manali', img: '/images/manali.jpg', btnText: 'Book Now' },
  { id: 'nepal', title: 'Nepal', img: '/images/nepal.webp', btnText: 'Book Now' },
  { id: 'bali', title: 'Bali', img: '/images/balipackage.jpg', btnText: 'Book Now' },
  { id: 'thailand', title: 'Thailand', img: '/images/thailand.avif', btnText: 'Book Now' },
  { id: 'maldives', title: 'Maldives', img: '/images/maldives.jpg', btnText: 'Book Now' },
  { id: 'singapore', title: 'Singapore', img: '/images/singapore.jpg', btnText: 'Book Now' },
  { id: 'dubai', title: 'Dubai', img: '/images/dubai.jpg', btnText: 'Book Now' },
  { id: 'arunachal', title: 'Arunachal Pradesh', img: '/images/arunachal.avif', btnText: 'Book Now' },
  { id: 'sikkim', title: 'Sikkim', img: '/images/sikkim.jpg', btnText: 'Book Now' },
  { id: 'coorg', title: 'Coorg and Ooty', img: '/images/ootyimg.jpg', btnText: 'Book Now' },
  { id: 'wayanad', title: 'Wayanad', img: '/images/wayanad.webp', btnText: 'Book Now' }
]

const Packages = () => {
  return (
    <section className='allpackage'>
      <div className="allpackageimage-container">
        <img className="allpackagetrackimage" src="/images/trackingimg.webp" alt="Tracking Banner" />
        <p className="allpackageimage-text">Packages</p>
      </div>

      <div className="packages-grid">
      {packagesweprovide.map((item) => (
        <a
        href={`https://wa.me/917902606303?text=Hi! I'm interested in your ${encodeURIComponent(item.title)} package.`}
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className="package-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="package-info">
            <h4>{item.title}</h4>
            
            <button>{item.btnText} <GoArrowRight /></button>
            
            </div>
            
        </div>
        </a>
))}

      </div>
    </section>
  )
}

export default Packages
