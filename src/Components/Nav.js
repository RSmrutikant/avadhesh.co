import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Images from '../Data/imageSet';


const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
  <nav role="navigation" className='#'>
    <a href="javascript:void(0);" className="ic menu" tabindex="1">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </a>
    <a href="javascript:void(0);" className="ic close"></a>
    <ul className="main-nav">
      <li className="top-level-link">
      <img className='nav-logo' src={Images.logo} alt="logo" />
      </li> 
      
      <li className="top-level-link">
        <a href="javascript:void(0);" className="mega-menu"><span>Products</span></a>
        <div className="sub-menu-block">
        <h1 className='submenu-tag'>Products</h1>
        <hr/>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Clothing</h2>
              <ul className="sub-menu-lists">
                <li><a>Mens</a></li>
                <li><a>Womens</a></li>
                <li><a>Kids</a></li>
                <li><a>New Born</a></li>
                <li><a>View All</a></li>
              </ul>           
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Handbags</h2>
              <ul className="sub-menu-lists">
                <li><a>Wallets</a></li>
                <li><a>Athletic bag</a></li>
                <li><a>Backpack</a></li>
                <li><a>Bucket Bag</a></li>
                <li><a>View All</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Shoes</h2>
              <ul className="sub-menu-lists">
                <li><a>Mens</a></li>
                <li><a>Womens</a></li>
                <li><a>Kids</a></li>
                <li><a>View All</a></li>
              </ul>
            </div>
          </div>
          
          {/* <div className="row banners-area">
            <div className="col-md-3 col-lg-3 col-sm-3">
              <img src="https://resources.ediblearrangements.com/resources/en-us/i/revamp_p/ETGMegaMenu.jpg" width="100%;"/>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3">
              <img src="https://resources.ediblearrangements.com/resources/en-us/i/revamp_p/ETGMegaMenu.jpg" width="100%;"/>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3">
              <img src="https://resources.ediblearrangements.com/resources/en-us/i/revamp_p/ETGMegaMenu.jpg" width="100%;"/>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3">
              <img src="https://resources.ediblearrangements.com/resources/en-us/i/revamp_p/ETGMegaMenu.jpg" width="100%;"/>
            </div>
          </div> */}
          
        </div>
      </li>
      <li className="top-level-link">
        <a><span>Services</span></a>    
      </li>
      <li className="top-level-link">
        <a href="javascript:void(0);" className="mega-menu"><span>About</span></a>
        <div className="sub-menu-block">
        <h1 className='submenu-tag'>About Us</h1>
        <hr/>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Company</h2>
              <ul className="sub-menu-lists">
                <li><a>About</a></li>
                <li><a>Mission</a></li>
                <li><a>Community</a></li>
                <li><a>Team</a></li>
              </ul>           
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Media</h2>
              <ul className="sub-menu-lists">
                <li><a>News</a></li>
                <li><a>Events</a></li>
                <li><a>Blog</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <h2 className="sub-menu-head">Careers</h2>
              <ul className="sub-menu-lists">
                <li><a>New Opportunities</a></li>
                <li><a>Life @ Company</a></li>
                <li><a>Why Join Us?</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </li>
      <li className="top-level-link">
        <a><span>Contact</span></a>      
      </li>
    </ul> 
  </nav>
  </div>
  )
}

export default NavBar;