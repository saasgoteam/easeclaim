import React from 'react'

import logo from '../../src/assets/img/images/logo.png'
function Header() {
  return (
    <div>
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <a href="/" className="logo d-flex align-items-center">
                <img src={logo} alt="" />
                {/* <span>FlexStart</span> */}
              </a>
              <nav id="navbar" className="navbar">
                <ul>
                
                  <li><a className="nav-link scrollto" href="#contact">Claim Now</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>
              {/* .navbar */}
            </div>
          </header>{/* End Header */}
    </div>
  )
}

export default Header