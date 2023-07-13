import React from 'react'
import '../../src/assets/css/style.css'
// import '../../src/assets/css/industry.css'
import '../../src/assets/css/main.css'
import '../../src/assets/css/responsive.css'
// import '../../src/assets/css/scrolleffect.css'
import '../../src/assets/css/slick-slider.css'

import logo from '../../src/assets/img/images/logo.png'
import banner1 from '../../src/assets/img/images/svg/banner1.svg'
import banner2 from '../../src/assets/img/images/svg/banner2.svg'
import banner3 from '../../src/assets/img/images/svg/banner3.svg'
import banner5 from '../../src/assets/img/images/svg/banner-5.svg'
import slider1 from '../../src/assets/img/images/card-slider1.png'
import img1 from '../../src/assets/img/images/svg/providing-financing.svg'
import slider4 from '../../src/assets/img/images/card-slider4.png'
import advisory from '../../src/assets/img/images/svg/get-policy-advisory.svg'
import policy from '../../src/assets/img/images/svg/buy-policy.svg'
import slider5 from '../../src/assets/img/images/card-slider5.png'
import streamline from '../../src/assets/img/images/svg/streamline-left.svg'
import s1 from '../../src/assets/img/images/svg/s1.svg'
import s2 from '../../src/assets/img/images/svg/s2.svg'
import s3 from '../../src/assets/img/images/svg/s3.svg'
import s4 from '../../src/assets/img/images/svg/s4.svg'
import s5 from '../../src/assets/img/images/svg/s5.svg'
import s6 from '../../src/assets/img/images/svg/s6.svg'
import circle from '../../src/assets/img/images/circle.png'
import circlelast from '../../src/assets/img/images/circle-last.png'
import bluecircle from '../../src/assets/img/images/blue-circle.png'
import circleleaf from '../../src/assets/img/circle-leaf.png'
import menlap from '../../src/assets/img/images/men-lap.svg'
import step1 from '../../src/assets/img/images/step1.png'
import step2 from '../../src/assets/img/images/step2.png'
import step3 from '../../src/assets/img/images/step3.png'
import simplestep from '../../src/assets/img/images/simple-step.png'
import claimsettled from '../../src/assets/img/images/claim-settled.png'
import networkright from '../../src/assets/img/images/network-right.png'
import trustedright from '../../src/assets/img/images/trusted-right.png'
import trustedleft from '../../src/assets/img/images/trusted-left.png'
import sendo from '../../src/assets/img/images/svg/fa_send-o.svg'
import contacticon from '../../src/assets/img/images/svg/contact-icon.svg'
import joinus from '../../src/assets/img/images/join-us.png'
import leafimg from '../../src/assets/img/images/leaf-img.png'
import surendra from '../../src/assets/img/images/teams/surendra.png'
import adesh from '../../src/assets/img/images/teams/adesh.png'
import srinivas from '../../src/assets/img/images/teams/srinivas.png'
import scrolltop from '../../src/assets/img/images/scroll-top.png'
function Home() {
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
          {/* ======= Hero Section ======= */}
          <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
              <div id="carouselExampleIndicators" className="carousel slide banner" data-ride="carousel">
               
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column justify-content-center banner-text">
                        <p className="para-text-wel">Welcome to</p>
                        <h1 data-aos="fade-up">ease<span className="claim">claim</span></h1>
                        <h2 data-aos="fade-up" data-aos-delay={400}>Say Goodbye to
                          Claim Frustrations</h2>
                        <div data-aos="fade-up" data-aos-delay={600}>
                          <div className="text-left text-lg-start get-start-btn">
                            <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                              <span>Know More</span>
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                        <img src={banner1} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column justify-content-center banner-text">
                        <div className="btn-text">
                          <span>Insurance</span>
                        </div>
                        <div className="heading-content">
                          <h2 data-aos="fade-up" className="insurance-heading">Life is Unpredictable, 
                            Your Insurance Shouldn't Be</h2>
                          <p>Be prepared for life's surprises with a tailored insurance policy.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay={600}>
                          <div className="text-left text-lg-start">
                            <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                              <span>Get a Quote</span>
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                        <img src={banner2} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{marginLeft: '30px'}}>
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column justify-content-center test-banner">
                        <div className="vector-bg">
                          <div className="frame">
                            <span>Insurance</span>
                          </div>
                          <h3 className="experts-insurance">Expert Insurance Advice at Your Fingertips</h3>
                          <h4 className="experts-insurance-sub">Get professional guidance for all your insurance needs.</h4>
                          <div data-aos="fade-up" data-aos-delay={600}>
                            <div className="text-lg-start text-left get-white-bg">
                              <a href="#about" className="btn-get-started-white scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Get a Quote</span>
                                <i className="bi bi-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                        <img src={banner3} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column justify-content-center banner-text">
                        <div className="btn-text">
                          <span>Insurance</span>
                        </div>
                        <p className="para-text-wel flexible-finance">Flexible Financing Solutions for Every Need</p>
                        <h2 data-aos="fade-up" className="flexible-finance-sub" data-aos-delay={400}>Never before opportunity for customers to achieve their financial goals with the NBFC's services</h2>
                        <div data-aos="fade-up" data-aos-delay={600}>
                          <div className="text-left text-lg-start get-start-btn">
                            <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                              <span>Know More</span>
                              <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
                        <img src={banner5} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a> */}
              </div>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= About Section ======= */}
            <section className="card-slider">
              <div className="container">
                <div id="carouselCard" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item px-4 active">
                      <div className="row card-layout">
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={slider1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Claim assistance from experts</h3>
                              <p>Expert guidance and support throughout the claim
                                settlement process to ensure a hassle-free
                                experience for our clients.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={img1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Providing Financing Aids</h3>
                              <p>Unlock financial opportunities with us and empower growth through flexible financing solutions according to your needs.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={slider4} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Get best claims consultation</h3>
                              <p>Maximize your claim settlements with our consultative
                                approach, providing strategic advice and personalized
                                solutions for optimal outcomes.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={advisory} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Get Policy Advisory</h3>
                              <p>Navigate the complex world of insurance with confidence. Our expert advisors ensure you have the right coverage for your peace of mind.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={policy} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Buy Policy</h3>
                              <p>Comprehensive evaluation of insurance policies to ensure proper coverage, identify gaps, and recommend suitable enhancements for optimal protection.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 card-body-layout">
                          <div className="row">
                            <div className="col-lg-3">
                              <img src={slider5} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-9">
                              <h3>Group insurance upto 1 Crore</h3>
                              <p>Secure Your Health, Upto 1 Crore Coverage, Cashless
                                Insurance - Peace of Mind for Unexpected Medical
                                Expenses.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="carousel-item px-4">
                  <div class="row card-layout">
                    <div class="col-lg-4 card-body-layout">
                      <div class="row">
                        <div class="col-lg-3">
                          <img src="assets/img/images/svg/get-policy-advisory.svg"
                            class="img-fluid" alt>
                        </div>
                        <div class="col-lg-9">
                          <h3>Get Policy Advisory</h3>
                          <p>Navigate the complex world of insurance with confidence. Our expert advisors ensure you have the right coverage for your peace of mind.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 card-body-layout">
                      <div class="row">
                        <div class="col-lg-3">
                          <img src="assets/img/images/svg/buy-policy.svg"
                            class="img-fluid" alt>
                        </div>
                        <div class="col-lg-9">
                          <h3>Buy Policy</h3>
                          <p>Comprehensive evaluation of insurance policies to ensure proper coverage, identify gaps, and recommend suitable enhancements for optimal protection.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 card-body-layout">
                      <div class="row">
                        <div class="col-lg-3">
                          <img src="assets/img/images/card-slider5.png"
                            class="img-fluid" alt>
                        </div>
                        <div class="col-lg-9">
                          <h3>Group insurance upto 1 Crore</h3>
                          <p>Secure Your Health, Upto 1 Crore Coverage, Cashless
                            Insurance - Peace of Mind for Unexpected Medical
                            Expenses.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </section>
            {/* ======= Clients Section ======= */}
            {/* <section id="clients" class="clients">
  
          <div class="container" data-aos="fade-up">
            <div class="text-center client-header">
              <p>Trusted By Over 100+ Hospitals and Clinics</p>
            </div>
            
  
            <div class="clients-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide"><img
                    src="assets/img/images/client1.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client2.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client3.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client4.png" class="img-fluid" alt></div>
              </div>
            </div>
          </div>
  
        </section> */}
            {/* End Clients Section */}
            {/* ======= Streamline Section ======= */}
            <section id="features" className="streamline">
              <div className="container" data-aos="fade-up">
                <header className="section-header">
                  <p>Streamline Your Claim Settlement Process
                    with Our Powerful Features</p>
                  <h2>Efficiency, Transparency, and Control - Unleash the Potential of
                    our Claim Settlement Software</h2>
                </header>
                <div className="row">
                  <div className="col-lg-6 left-img">
                    <img src={streamline} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <ul className="right-element">
                      <li className="first-element opacity-5">
                        <div className="stream-img">
                          <img src={s1} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Automated Claim Processing
                        </div>
                      </li>
                      <li className="sec-element opacity-7">
                        <div className="stream-img">
                          <img src={s2} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Claims Tracking
                        </div>
                      </li>
                      <li className="third-element">
                        <div className="stream-img">
                          <img src={s3} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Document Management
                        </div>
                      </li>
                      <li className="four-element opacity-8">
                        <div className="stream-img">
                          <img src={s4} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Analytics and Reporting
                        </div>
                      </li>
                      <li className="five-element opacity-7">
                        <div className="stream-img">
                          <img src={s5} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Communication and Collaboration
                        </div>
                      </li>
                      <li className="six-element opacity-5">
                        <div className="stream-img">
                          <img src={s6} className="img-fluid" alt="" srcSet />
                        </div>
                        <div className="stream-text">
                          Customer Support
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>{/* End streamline Section */}
            <section className="unlock-benift">
              <div className="container">
                <div className="row unlock-row">
                  <div className="col-lg-6">
                    <h2>Unlock the <span>Benefits!</span></h2>
                  </div>
                  <div className="col-lg-6">
                    {/* <div class="animation-img">
                    <img src="assets/img/images/unlock-benifits.png" class="img-fluid" alt>
                  </div> */}
                    <img src={circle} className="img-fluid light-circle animation" alt="" />
                    <img src={circlelast} className="img-fluid light-circle animation" alt="" />
                    <img src={bluecircle} className="img-fluid animation" alt="" />
                    <img src={circleleaf} className="img-fluid animation-none" alt="" />
                    <img src={menlap} className="img-fluid benifit animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* Start Simple Step Section */}
            <section id="claim-process" className="about">
              <div className="simple-step" />
              <div className="container" data-aos="fade-up">
                <div className="simple-step-gap">
                  <h3>Settle your Claim in <span>3 Simple Steps</span></h3>
                </div>
                <div className="row">
                  <div className="col-lg-9 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                    <div className="row step-row">
                      <div className="col-lg-3 step-icon">
                        <img src={step1} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-9 step-content">
                        <h4>Connect with our expert</h4>
                        <p>Call or reach to our experienced and qualified experts to
                          get the best advise and solutions.</p>
                      </div>
                    </div>
                    <div className="row step-row">
                      <div className="col-lg-3 step-icon">
                        <img src={step2} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-9 step-content">
                        <h4>Register &amp; Upload your Documents</h4>
                        <p>Register your documents with us, via expert or directly
                          upload on our website to get further assistance. Remember,
                          we always insure your data security first.</p>
                      </div>
                    </div>
                    <div className="row step-row">
                      <div className="col-lg-3 step-icon">
                        <img src={step3} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-9 step-content">
                        <h4>Voila! Your claim is Processed</h4>
                        <p>Well done! Your claim is processed now, get the updates
                          direct over the website, or you can always reach to our
                          experts available always to help you out.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                    <img src={simplestep} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* End Simple Step Section */}
            <section className="claim-settled-test">
              <div className="row claim-settled-body">
                <div className="col-lg-4 order2">
                  <img src={claimsettled} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="row claim-settled-content">
                    <div className="col-lg-8">
                      <div className="content">
                        Get Your Claims Settled in a <span>Snap!</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-4">
                      <div className="claim-now-btn claim-dotted ">
                        <a href="#about" className="btn-claim-now  btn-out-dashed btn-square scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                          <span>Claim Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* network of hospitals */}
            <section className="netword-of-hospital" id="our-hospital">
              <div className="row">
                <div className="col-lg-8 network-bg">
                  <div className="network-content">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="content-network">
                          <h3>Ever growing network of hospitals (IPD + OPD)</h3>
                          <p>Ready to offer convenience, cost savings, streamlined
                            processes, improved access to quality care, and better
                            financial planning for patients.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 btn-col">
                        <div className="btn-grid">
                          <a href="#about" className="btn-view-hospitals btn-out-dashed btn-square scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                            <span>View Hospitals </span>
                          </a>
                          <div className="view-hospitals-dot" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src={networkright} className="img-fluid" alt="" />
                </div>
              </div>
            </section>
            {/* ======= Clients Section ======= */}
            {/* <section id="clients" class="clients" style="padding-bottom: 60px;">
  
          <div class="container" data-aos="fade-up">
            <div class="clients-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide"><img
                    src="assets/img/images/client1.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client2.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client3.png" class="img-fluid" alt></div>
                <div class="swiper-slide"><img
                    src="assets/img/images/client4.png" class="img-fluid" alt></div>
              </div>
              
            </div>
          </div>
  
        </section> */}
            {/* End Clients Section */}
            {/* Get consultation with expert doctors from our 100+ Trusted Hospitals */}
            <section className="trusted-hospital">
              <div className="container">
                <div className="text-right right-img">
                  <img src={trustedright} className="img-fluid" alt="" />
                </div>
                <div className="text-center flite-img">
                </div>
                <div className="text-center center-content">
                  <h3>Get consultation with expert doctors from our <span>100+ Trusted
                      Hospitals</span></h3>
                </div>
                <div className="text-left left-img">
                  <img src={trustedleft} className="img-fluid" alt="" />
                </div>
              </div>
            </section>
            <section className="join-us">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="join-us-dot-border">
                      <h3>Want to join us as <span>partner</span></h3>
                      <h4>Let's <span>connect!</span></h4>
                    </div>
                    <div className="info-grid row d-flex">
                      <div className="col-lg-6">
                        <a href="mailto:info@easeclaim.com" className="d-flex contact-link">
                          <img src={sendo} className="img-fluid" alt="" />
                          <span>info@easeclaim.com</span>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a href="tel:+91 98765 43210" className="d-flex contact-link">
                          <img src={contacticon} className="img-fluid" alt="" />
                          <span>+91 98765 43210</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-1">
                    <img src={joinus} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="our-team faq" id="our-team">
              <div className="container" data-aos="fade-up">
                <header className="section-header ">
                  <p>Our <span>Team</span></p>
                  <div className="leaf-img">
                    <img src={leafimg} className="img-fluid" alt="" srcSet />
                  </div>
                </header>
                <div className="row owl-carousel-slider">
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={100}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-surendra" />
                      </svg>
                      <img className="img-fluid" src={surendra} alt="First slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Surender Yadav</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/surender-yadav-11b3a7188/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={200}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-adesh" />
                      </svg>
                      <img className="img-fluid" src={adesh} alt="Second slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Adesh Chauhan</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/adesh25/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={300}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-sirinivas" />
                      </svg>
                      <img className="img-fluid" src={srinivas} alt="Third slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>RC Srinivasan</h3>
                          <p>Chief Technology Officer</p>
                        </div>
                        <a href="https://www.linkedin.com/in/rcsrinivasan/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={400}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-surendra" />
                      </svg>
                      <img className="img-fluid" src={surendra} alt="First slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Surender Yadav</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/surender-yadav-11b3a7188/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={500}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-adesh" />
                      </svg>
                      <img className="img-fluid" src={adesh} alt="Second slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Adesh Chauhan</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/adesh25/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay={600}>
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-sirinivas" />
                      </svg>
                      <img className="img-fluid" src={srinivas} alt="Third slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>RC Srinivasan</h3>
                          <p>Chief Technology Officer</p>
                        </div>
                        <a href="https://www.linkedin.com/in/rcsrinivasan/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row owl-carousel-slider-mob">
                  <div className="col-lg-12 col-12">
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-surendra" />
                      </svg>
                      <img className="img-fluid" src={surendra} alt="First slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Surender Yadav</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/surender-yadav-11b3a7188/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-adesh" />
                      </svg>
                      <img className="img-fluid" src={adesh} alt="Second slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>Adesh Chauhan</h3>
                          <p>Director &amp; Founder</p>
                        </div>
                        <a href="https://www.linkedin.com/in/adesh25/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div className="teams-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={295} height={180} viewBox="0 0 295 180" fill="none">
                        <path d="M255.304 21.8139L66.3763 0.997695C56.8995 -0.0464652 48.0033 5.74393 45.1214 14.8321L1.25893 153.157C-2.83008 166.052 6.79555 179.202 20.3234 179.202H274.943C287.452 179.202 296.891 167.848 294.606 155.549L272.777 38.0408C271.167 29.3714 264.068 22.7796 255.304 21.8139Z" fill="white" id="team-img-sirinivas" />
                      </svg>
                      <img className="img-fluid" src={srinivas} alt="Third slide" />
                      <div className="team-content">
                        <div className="content">
                          <h3>RC Srinivasan</h3>
                          <p>Chief Technology Officer</p>
                        </div>
                        <a href="https://www.linkedin.com/in/rcsrinivasan/" className="view-linkin">View LinkedIn <i className="bi bi-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ======= F.A.Q Section ======= */}
            <section id="faq" className="faq">
              <div className="container" data-aos="fade-up">
                <header className="section-header ">
                  <p>Frequently asked <span>Questions</span></p>
                  <div className="leaf-img">
                    <img src={leafimg} className="img-fluid" alt="" srcSet />
                  </div>
                </header>
                <div className="row">
                  <div className="col-lg-12">
                    {/* F.A.Q List 1*/}
                    <div className="accordion accordion-flush" id="faqlist1">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                            What is a claim settlement?
                          </button>
                        </h2>
                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                          <div className="accordion-body">
                            A claim settlement refers to the process of resolving an insurance claim by determining the coverage, assessing the damages or losses, and providing the appropriate compensation to the policyholder.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                            How long does it take to settle a claim?
                          </button>
                        </h2>
                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                          <div className="accordion-body">
                            The time it takes to settle a claim varies depending on various factors such as the complexity of the claim, availability of required documents, and the cooperation of all parties involved. Generally, it can take anywhere from a few days to several weeks.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                            What documents are needed for a claim settlement?
                          </button>
                        </h2>
                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                          <div className="accordion-body">
                            The required documents may vary depending on the type of claim, but commonly needed documents include the claim form, supporting evidence such as receipts, invoices, medical reports, and any other relevant documentation related to the claim.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                            What is the role of an insurance adjuster in the claim settlement process?
                          </button>
                        </h2>
                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                          <div className="accordion-body">
                            An insurance adjuster assesses the damages or losses claimed by the policyholder and determines the coverage and compensation based on the terms and conditions of the insurance policy. They play a crucial role in evaluating the claim and facilitating the settlement process.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* F.A.Q List 2*/}
                    <div className="accordion accordion-flush collapse" id="faqlist2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                            What is subrogation in claim settlement?
                          </button>
                        </h2>
                        <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                          <div className="accordion-body">
                            Subrogation is the process in which an insurance company recovers the claim amount from a third party who may be responsible for the damages or losses incurred by the policyholder. It allows the insurance company to seek reimbursement for the claim amount paid to the policyholder.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                            Can I dispute a claim settlement decision?
                          </button>
                        </h2>
                        <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                          <div className="accordion-body">
                            Yes, if you disagree with a claim settlement decision, you have the right to dispute it. Contact your insurance company, provide any additional supporting evidence, and request a review or reconsideration of the settlement decision.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                            What is depreciation in claim settlement?
                          </button>
                        </h2>
                        <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                          <div className="accordion-body">
                            Depreciation refers to the decrease in the value of an insured item over time due to factors such as age, wear and tear, or obsolescence. In claim settlement, depreciation may be considered when determining the compensation amount for damaged or lost property.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-4">
                            What is a cashless claim settlement?
                          </button>
                        </h2>
                        <div id="faq2-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                          <div className="accordion-body">
                            A cashless claim settlement allows the policyholder to receive medical treatment at network hospitals without making upfront payments. The insurance company directly settles the medical bills with the hospital, subject to policy terms and conditions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-5">
                            What happens if there is a discrepancy in the claim settlement amount?
                          </button>
                        </h2>
                        <div id="faq2-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                          <div className="accordion-body">
                            If you believe there is a discrepancy in the claim settlement amount, you should reach out to your insurance company to discuss the matter. Provide any supporting evidence or documentation that may help rectify the discrepancy and request a review or clarification of the settlement amount.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                            Can a claim be denied?
                          </button>
                        </h2>
                        <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                          <div className="accordion-body">
                            Yes, a claim can be denied if it does not meet the terms and conditions outlined in the insurance policy. Reasons for claim denial may include policy exclusions, insufficient evidence, or failure to report the claim within the specified timeframe.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="see-faq-btn">
                  <div className="see-more">
                    <a className="btn-see-more" data-toggle="collapse" href="#faqlist2" role="button" aria-expanded="false" aria-controls="collapseExample">
                      See all
                    </a>
                    <div className="see-more-dotted" />
                  </div>
                </div>
              </div>
            </section>{/* End F.A.Q Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-5 col-md-12 footer-info">
                    <a href="index.html" className="logo d-flex align-items-center">
                      <img src={logo} alt="" />
                    </a>
                    <p>EaseClaim is a leading solution for handling insurance claims,
                      with an emphasis on delivering effective and efficient
                      management of the whole claim lifecycle through a single
                      integrated platform.</p>
                    <h4>Follow Us</h4>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li> <a href="#features">Features</a></li>
                      <li> <a href="#claim-process">Claim Process</a></li>
                      <li> <a href="#our-hospital">Our Hospital</a></li>
                      <li> <a href="#our-team">Our Team</a></li>
                      <li> <a href="#faq">FAQs</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-6 footer-links">
                    {/* <h4>Our Services</h4>
                <ul>
                  <li> <a href="#">Web Design</a></li>
                  <li> <a href="#">Web
                      Development</a></li>
                  <li> <a href="#">Product
                      Management</a></li>
                  <li> <a href="#">Marketing</a></li>
                  <li> <a href="#">Graphic
                      Design</a></li>
                </ul> */}
                  </div>
                  <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                    <h4>Contact Us</h4>
                    <p>Tech Garden, Sector 35,<br />
                      Gurugram, Haryana 122004,<br /><br />
                      help@easeclaim.com<br />
                      +91 85068 84052<br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="container border-top">
                <div className="d-flex">
                  <div className="copyright">
                    Copyright © 2023 <strong>| <span>easeclaim.com </span>|
                    </strong>All Rights Reserved
                  </div>
                  <div className="credits">
                    <div className="d-flex justify-content-end">
                      <div className="footer-te">
                        <a href="#">Privacy Policy</a>
                        <a href="#">| Cancellation &amp; Refund </a>
                        <a href="#">| Terms &amp; Conditions </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
            <img src={scrolltop} alt="" />
          </a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
  
}

export default Home