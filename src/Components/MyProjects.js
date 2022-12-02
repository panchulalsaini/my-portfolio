

import React from 'react'
import Cards from './Cards';
import CData from './CData';

function MyProjects() {
  return (
  
    <div className='pro-name'>
  
      {
            CData.map((val, ind) => {
        return (
          <Cards
            imgSrc={val.imgSrc}
            Title={val.Title}
            discription={val.discription}
            btnLink={val.btnLink} />)
      })
    }
    </div>

  )
 
}

export default MyProjects;
