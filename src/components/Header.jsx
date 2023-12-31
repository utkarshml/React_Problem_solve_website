import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronDown, BiListCheck, BiListUl, BiX } from "react-icons/bi"
import { HashLink } from 'react-router-hash-link';
function Header() {
  
   const [toggle , setToggle]  = useState(true)
   const toggleEffect = () =>{
    setToggle(!toggle)
    if(toggle){
      document.body.classList.add('mobile-nav-active')
    }
    else{
      document.body.classList.remove('mobile-nav-active')
    }
   }
 
  useEffect(function(){
    const selectHeader = document.querySelector('#header');
     if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  })
 
  return (
   <>
   {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1>Logic</h1>
      </a>

      <BiListUl  onClick={toggleEffect} className={`mobile-nav-toggle ${toggle ? "mobile-nav-show" : "mobile-nav-show d-none"} `}/>
      <BiX onClick={toggleEffect} className={`mobile-nav-toggle ${toggle ? "mobile-nav-hide d-none" : "mobile-nav-hide" }`}/>
      <nav id="navbar"  className="navbar">
        <ul>
          <li ><HashLink to={"/#hero-section"} className="active">Home</HashLink></li>
          <li ><HashLink to={"/#about"}>About</HashLink></li>
          <li ><HashLink to={"/#contact"}>Services</HashLink></li>
          <li ><HashLink to={"/#brands"}>Brands</HashLink></li>
          <li><Link to={"/#contact"}>Contact</Link></li>
          <li><a className="get-a-quote" href="get-a-quote.html">Get Now</a></li>
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
  {/* <!-- End Header --> */}
   </>
  )
}

export default Header
