/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HeaderContent from './Screens/HeaderContent';
import HomeScreens from './Screens/HomeScreens';
import ContactScreens from './Screens/ContactScreens';
import HeaderContent2 from './Screens/HeaderContent2';
import CareerScreens from './Screens/CareerScreens';
import AboutUsScreens from './Screens/AboutUsScreens';
import ProductScreens from './Screens/ProductScreens';
import DigitalAdsScreens from './Screens/DigitalAdsScreens';
import RadioScreens from './Screens/RadioScreens';
import MessagingScreens from './Screens/MessagingScreens';

function App() {
  const routepath = window.location.pathname

  return (
    <Router>
      <Switch>
        <div>

          {routepath === '/contact'
            ? <HeaderContent2 />
            : routepath === '/aboutus'
              ? <HeaderContent2 />
              : routepath === '/career'
                ? <HeaderContent2 />
                : routepath === '/radiochannel'
                  ? <HeaderContent2 />
                  : routepath === '/messaging'
                    ? <HeaderContent2 />
                    : routepath === '/digitalads'
                      ? <HeaderContent2 />
                      : routepath === '/appsproduct'
                        ? <HeaderContent2 />
                        : routepath === '/'
                          ? <HeaderContent />
                          : routepath &&
                          <>
                            <header className="foi-header">
                              <div className="container">
                                <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                                  <a className="navbar-brand" href="/">
                                    <img src="images/logo.png" alt="Xnetwork" />
                                  </a>
                                  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                  </button>
                                  <div className="collapse navbar-collapse" id="collapsibleNavId">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                      <li className="nav-item active">
                                        <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
                                      </li>
                                      <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="productMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Services <i className="fas fa-caret-down" style={{ marginLeft: '5%' }}></i></a>
                                        <div className="dropdown-menu animate slideIn" aria-labelledby="productMenu">
                                          <a className="dropdown-item" href="radiochannel">Radio Channel</a>
                                          <a className="dropdown-item" href="messaging">Messaging</a>
                                          <a className="dropdown-item" href="digitalads">Digital Advertising</a>
                                          <a className="dropdown-item" href="appsproduct">Application Product</a>
                                        </div>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="career" >Career</a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="aboutus" >About Us</a>
                                      </li>
                                    </ul>
                                    <ul className="navbar-nav mt-2 mt-lg-0">
                                      <li className="nav-item">
                                        <a className="btn btn-secondary" href="contact">Contact Us</a>
                                      </li>
                                    </ul>
                                  </div>
                                </nav>
                              </div>
                            </header>
                            <main className="page-error">
                              <div className="container">
                                <section className="error-section">
                                  <h1 className="error-code">404</h1>
                                  <p className="error-message">Sorry, the page you are looking for could not be found.</p>
                                  <img src="images/404.png" alt="page not found" className="error-img" />
                                  <a href="/" className="btn btn-danger btn-error-action">Return Home</a>
                                </section>
                              </div>
                            </main>
                          </>
          }

          {/* Content */}
          <main style={{ marginTop: '1px' }}>
            <div className="container">

              {/* HomeScreens */}
              <Route exact path="/">
                <HomeScreens />
              </Route>

              {/* ContactScreens */}
              <Route path="/contact">
                <ContactScreens />
              </Route>

              {/* CareerScreens */}
              <Route path="/career">
                <CareerScreens />
              </Route>

              {/* AboutUsScreens */}
              <Route path="/aboutus">
                <AboutUsScreens />
              </Route>

              {/* ProductScreens */}
              <Route path="/appsproduct">
                <ProductScreens />
              </Route>

              {/* DigitalScreens */}
              <Route path="/digitalads">
                <DigitalAdsScreens />
              </Route>

              {/* RadioScreens */}
              <Route path="/radiochannel">
                <RadioScreens />
              </Route>

               {/* MessagingScreens */}
               <Route path="/messaging">
                 <MessagingScreens/>
               </Route>

            </div>
          </main>

          {/* Footer */}
          <footer className="foi-footer text-white">
            <div className="container">
              <div className="row footer-content">
                <div className="col-xl-6 col-lg-7 col-md-8">
                  <h2 className="mb-0">Do you want to know more or just have a question? write to us.</h2>
                </div>
                <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
                  <a href="contact" className="btn btn-lg" style={{ backgroundColor: "white" }}>Contact form</a>
                </div>
              </div>
              <div className="row footer-widget-area">
                <div className="col-md-5">
                  <div className="py-3">
                    <img style={{ width: '35%' }} src="images/logox1.png" alt="XNetwork" />
                  </div>
                  <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
                  <div>
                    <a href
                      ="https://play.google.com/store/apps/developer?id=sakti+developer" className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></a>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <nav>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }} className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Services <i className="fas fa-caret-down"></i>
                        </a>
                        <div className="dropdown-menu animate slideIn" style={{ marginTop: '16%' }}>
                          <a className="dropdown-item" href="radiochannel">Radio Channel</a>
                          <a className="dropdown-item" href="messaging">Messaging</a>
                          <a className="dropdown-item" href="digitalads">Digital Advertising</a>
                          <a className="dropdown-item" href="appsproduct">Application Product</a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a href="/career" className="nav-link">Careers <span className="badge badge-pill badge-secondary ml-3">Hiring</span></a>
                      </li>
                      <li className="nav-item">
                        <a href="/aboutus" className="nav-link">About</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-3 mt-3 mt-md-0">
                  <p>
                    © XNetwork.  {(new Date().getFullYear())}
                  </p>
                  <p>All rights reserved.</p>
                  <nav className="social-menu">
                    <a href="#!"><img src="images/facebook.svg" alt="facebook" /></a>
                    <a href="#!"><img src="images/instagram.svg" alt="instagram" /></a>
                    <a href="#!"><img src="images/twitter.svg" alt="twitter" /></a>
                    <a href="#!"><img src="images/youtube.svg" alt="youtube" /></a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
