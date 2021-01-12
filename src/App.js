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

function App() {
  return (
    <Router>
      <Switch>
        <div>
          {/* Header */}
          <header className="foi-header landing-header">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="Xnetwork" />
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="productMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Product <i class="fas fa-caret-down" style={{ marginLeft: '5%' }}></i></a>
                      <div className="dropdown-menu" aria-labelledby="productMenu">
                        <a className="dropdown-item" href="blog.html">Radio Channel</a>
                        <a className="dropdown-item" href="login.html">Digital Advertising</a>
                        <a className="dropdown-item" href="register.html">Application Product</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="features.html" >Career</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html" >About Us</a>
                    </li>
                  </ul>
                  <ul className="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item">
                      <a class="btn btn-secondary" href="login.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="header-content">

                {/* Header Content */}
                <Route path="/">
                  <HeaderContent />
                </Route>

              </div>
            </div>
          </header>

          {/* Content */}
          <main style={{ marginTop: '5%' }}>
            <div className="container">
              <Route exact path="/">
                <HomeScreens />
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
                  <a href="contact.html" className="btn btn-lg" style={{ backgroundColor: "white" }}>Contact form</a>
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
