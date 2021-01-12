/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, {
  useState
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HeaderContent from './Screens/HeaderContent';
import HomeScreens from './Screens/HomeScreens';
import ContactScreens from './Screens/ContactScreens';
import HeaderContent2 from './Screens/HeaderContent2';

function App() {
  const routepath = window.location.pathname
  console.log(routepath)

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
                        &&
                        <HeaderContent />

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
                    <button className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></button>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <nav>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="#!" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">Services</a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">Careers <span className="badge badge-pill badge-secondary ml-3">Hiring</span></a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">Shop with us</a>
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
