import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to Our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>subscribe</button>
        </div>
    </div>
  )
}
