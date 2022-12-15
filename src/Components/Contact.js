import { useState } from "react";
import React  from 'react'

function Contact() {
  const[formData,setFormData] =useState({
    Cname :"",
    phone :"",
    email : "",
    textarea:""
  });
  const getData =(event) =>{
    const name = event.target.name;
    const value = event.target.value;
      setFormData((previous) =>{ 
        return{ ...previous, [name]: value};

        })
        
      
  }
  const printData = ()=>{
    alert(`Hey ${formData.Cname}, Your mob. is ${formData.phone}, Your email is ${formData.email}. Thankyou for contacting us`)


  }
  return (
    <>
    <div className='container'>
    <h1>Contact Us</h1>
<form className='about-form'>
<div className="fdesign"> 


   <input type="text" name="Cname"  placeholder='Enter Name'
    value={formData.Cname}
     onChange={getData}
     /><br/>
 </div>
 <div className="fdesign">
 <input type="phone" name="phone" placeholder='Enter your phone no.'
   value={formData.phone}
   onChange={getData}
   /><br/>
    </div>
    <div className="fdesign">   
       <input type="email" name="email" placeholder='Enter email id'
         value={formData.email}
         onChange={getData}
         /><br/>
        </div>
      <div >
        <textarea className='textarea' name='textarea' 
          value={formData.textarea}
          onChange={getData} >Write Some text.....</textarea>
      </div>
        <button class="but" type="submit" onClick={printData}> Submit</button>
    </form>
    <div>

    </div>
</div>
    

    </>
  )
}

export default Contact;
