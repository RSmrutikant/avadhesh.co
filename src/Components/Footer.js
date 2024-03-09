import React from 'react'
import Images from '../Data/imageSet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <footer className="global-footer">
  <div className="d-flex justify-content-end container-fluid go-top">
    <button type="button" aria-label="Back to top" className="bg-white d-flex align-items-center text-center text-body mt-n4 mb-n5"  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
      <span aria-hidden="true">↑</span>
    </button>
  </div>

  <div className="footer-content">
    <div className="container-fluid">
      <div className='logo-wrapper'>
      <a href="#"><img className='footer-logo mb-3' src={Images.logo} alt="logo" /></a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                        <div className="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, India.</h6>
                        <h6>+91 2345 6789 12<span>|</span>+91 1234 5634 45</h6>
      </div>
      <div className="row justify-content-md-between pt-lg-5 mb-n5">
        <div className="col-12 col-md py-3">
          <h2 className="footer-tag text-uppercase font-weight-bold mb-3 mb-md-2">
            Resources
          </h2>
          <ul className="list-unstyled d-sm-flex flex-wrap ml-sm-n4 mb-n2" style={{fontSize:"1rem"}}>
            <li className="pl-sm-4 pr-lg-3 pb-sm-2">
              <a style={{color: "#fff", textDecoration: "none", paddingRight: "20px"}} href="/contact-alight-sales">Talk to sales</a>
            </li>
            <li className="pl-sm-4 pr-lg-3 pb-sm-2">
              <a style={{color: "#fff", textDecoration: "none", paddingRight: "20px"}} href="/find-your-hr-website">Find your HR website</a>
            </li>
            <li className="pl-sm-4 pr-lg-3 pb-sm-2">
              <a style={{color: "#fff", textDecoration: "none", paddingRight: "20px"}} href="#careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-auto pb-3">
          <h2 className="footer-tag text-uppercase font-weight-bold mb-4 mb-md-2">
            Connect With Us
          </h2>
          <ul className="social-icons justify-content-between d-flex">
            <li className='list-icon'>
              <a className="social-icon" href="https://www.linkedin.com/company/avadhesh-co/" target="_blank" rel="noopener noreferrer">
                
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className='list-icon'>
              <a className="social-icon" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className='list-icon'>
              <a className="social-icon" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className='list-icon'>
              <a className="social-icon" href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer">
                
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className='list-icon'>
              <a className="social-icon" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="last-foot pt-3 px-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg">
          <ul className="list-unstyled row mb-0">
            <li className="col-6 col-sm-auto pb-3">
              <a style={{textDecoration:"underline"}} href="/office-locations">
                Office Directory
              </a>
            </li>
            <li className="col-6 col-sm-auto pb-3">
              <a style={{textDecoration:"underline"}} href="/legal-terms">
                Terms and Conditions
              </a>
            </li>
            <li className="col-6 col-sm-auto pb-3">
              <a style={{textDecoration:"underline"}} href="/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright col-lg-auto pb-3">
          © 2024 Avadhesh.co. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer