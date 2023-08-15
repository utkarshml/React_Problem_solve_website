import React from 'react'
import { BiEnvelope, BiGlobeAlt, BiPhone } from "react-icons/bi"
import "../styles/service.scss"

function Service() {
  return (
   <>
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div>
          {/* <iframe style="border:0; width: 100%; height: 340px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen /> */}
        {/* </div><!-- End Google Maps --> */}

        <div className="row gy-4 mt-4">

          <div className="col-lg-4">

            <div className="info-item d-flex">
             <BiGlobeAlt className="flex-shrink-0"/>
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

            <div className="info-item d-flex">
            <BiEnvelope className='flex-shrink-0' />
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

            <div className="info-item d-flex">
            <BiPhone  className='flex-shrink-0' />
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
          {/* <!-- End Contact Form --> */}

        </div>

      </div>
      </div>
    </section>
    {/* <!-- End Contact Section --> */}
   </>
  )
}

export default Service
