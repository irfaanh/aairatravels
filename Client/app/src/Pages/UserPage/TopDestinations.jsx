import React from 'react'
import './TopDestinations.css'

const destinations = [
  { name: 'Lakshadweep', image: '/images/lakshadweeb.jpg' },
  { name: 'Bali', image: '/images/bali.jpg' },
  { name: 'Kashmir', image: '/images/kashmir.webp' },
  { name: 'Goa', image: '/images/goa.jpg' },
  { name: 'Thailand', image: '/images/tayland.webp' },
  { name:'Taj', image: '/images/taj.jpg'},
  { name: 'Munnar', image: '/images/munnar.webp' }
]

const TopDestinations = () => {
  return (
    <section className="top-destinations">
      <div className="header">
        <h1>Top Destinations</h1>
        <p>Let's Explore with us</p>
      </div>
      <div className="gallery">
        {destinations.map((dest, index) => (  
          <div
            key={index}
            className={`gallery-item ${index === 0  ? 'large' : ''}`}
          >

            <div className='overlay'>
              <h4>{dest.name}</h4>
            </div>
            <img src={dest.image} alt={dest.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopDestinations
