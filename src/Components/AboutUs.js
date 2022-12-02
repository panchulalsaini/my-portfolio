
import React from 'react'
import Common from './Common';
import Img5 from '../assests/images/p1.png'

function AboutUs() {
  return (
    <>
    <div className='about-cont'>
    <div className='about-name'>
      <h1> About@me</h1>
   <Common 
      Name = "Panchu lal saini"
      Age="28"
      Education="BCA"
      Profession="Web Devlovper" 
      Livein="tonk"
      details="I am a UI/UX Web devlovper I am a fronted/Backend Web devlovper. I am graduated at Rajsthan University.
      I am learn ReactJs web devlovper course from Samyak computer classes at jaipur; "
      
       />
    </div>
    <div className='about-img'>
      <img src={Img5} alt="img5" />
    </div>
    </div>
    </>
  )
}

export default AboutUs;
