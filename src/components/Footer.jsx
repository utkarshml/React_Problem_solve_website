import React from 'react'
import { BiLogoTwitter , BiLogoFacebook , BiLogoInstagram, BiLogoLinkedin, BiCopyright} from "react-icons/bi";
function Footer() {
  return (
    <>
  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <span>PROBLEM</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div className="social-links d-flex mt-4">
            <a href="#" className="twitter"><BiLogoTwitter/></a>
            <a href="#" className="facebook"><BiLogoFacebook/></a>
            <a href="#" className="instagram"><BiLogoInstagram/></a>
            <a href="#" className="linkedin"><BiLogoLinkedin/></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br/>
            New York, NY 535022<br/>
            United States <br/>
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>

        </div>

      </div>
    </div>

    <div className="container mt-4">
      <div className="copyright">
        <BiCopyright/> Copyright <strong><span>Logis</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/" target='blank'>BootstrapMade</a>
      </div>
    </div>

  </footer>
    </>
  )
}

export default Footer
