import React from 'react'

function Common(Props) {
  return (
    <div className='common-cont'>
     <h2>{Props.Name}</h2> 
      <h3>{Props.Age}<br/>
      {Props.Education}<br/>
      {Props.Profession}<br/>
       {Props.Livein} </h3>
       <p> <b>  {Props.details} </b> </p>
    </div>
  )
}

export default Common;
