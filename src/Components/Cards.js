import React from 'react'
function Cards(props) {
  return (
    <div className='cards'>
      <div className='cards-img'>
        <img src={props.imgSrc} alt="img2" />
        </div>
        <h3>Title:{props.Title}</h3>
      <p><b>discription :</b>{props.discription}</p>
       {/* {props.btn} */}
       <button><a href={props.btnLink}>Click Here</a></button>
    </div>
  ) 
}

export default Cards;
