

import React from 'react'
import Common from './Common';
import Img6 from '../assests/images/img5.png';

function Home() {
  return (
    <>
    <div className='home-cont'>
      <div className='home-name'><Common 
       Name="Panchu LaL Saini"
        Profession="Web Devlovper" />
      </div>
      <div className='home-img'>
      <img src={Img6} alt="img"/>
      {/* <p contentEditable="true">Hi My Name</p> */}
    </div>
    </div>
    
    </>
  )
}

export default Home;
