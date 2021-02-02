/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HeaderContent2 = (theme) => {
    console.log(theme)

    return (
        <>
            <header className="foi-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
                        <a className="navbar-brand" href="/">
                            {theme.theme === 'light' ?
                                <img src="images/xlogohitam.png" width="95px" alt="Xnetwork" />
                                :
                                <img src="images/xlogo.png" width="95px" alt="Xnetwork" />
                            }
                        </a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
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
        </>
    )
}

export default HeaderContent2