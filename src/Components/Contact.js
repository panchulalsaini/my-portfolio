import React from 'react'

function Contact() {
  return (
    <>
    <div className='container'>
    <h1>Contact Us</h1>
<form className='about-form'>
<div className="fdesign">  
   <input type="text" name="Cname"  placeholder='Enter Name'/><br/>
 </div>
 <div className="fdesign">
 <input type="phone" name="phone" placeholder='Enter your phone no. '/><br/>
    </div>
    <div className="fdesign">   
       <input type="email" name="email" placeholder='Enter email id'/><br/>
        </div>
      <div >
        <textarea className='textarea'>Write Some text.....</textarea>
      </div>
        <button class="but" type="submit"> Submit</button>
    </form>
</div>
    

    </>
  )
}

export default Contact;
