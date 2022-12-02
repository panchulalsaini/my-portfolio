  
import React from 'react';

 import{ Link } from 'react-router-dom';
  function Header() {
    return (
        <>
           <div >
            <div>
                <nav className="navbar">
                    <a href="/">Panchu</a>
                    <ul className="manu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="AboutUs">AboutUs</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                        <li><Link to="MyProjects">MyProjects</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </>
    )
  }
  
  export default Header;
  