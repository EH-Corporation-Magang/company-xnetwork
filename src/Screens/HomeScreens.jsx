import React from 'react';

const HomeScreens = () => {
    return (
        <>
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <img src="images/collab.svg" alt="special offers" className="img-fluid" width="492px" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title">Advertising Solution</h2>
                            <p className="mb-5">
                                Reach Mobile Users worldwide using HTTP / HTTPS insertion connected to various advertisements on a number of mobile sites or applications and browsers accessed via the mobile network.</p>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Has UI & UX</h5>
                                            <p>All the basics for businesses that are just getting started.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Premium</h5>
                                            <p>All the basics for businesses that are just getting started.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Standard</h5>
                                            <p>All the basics for businesses that are just getting started.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 mb-5">
                <div className="container">
                    <h2>FAQ</h2>
                    <p className="section-subtitle">Frequently Asked Questions</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqOneTitle">
                                    <a href="#faqOneCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">What is XNetwork?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqOneCollapse" className="collapse" aria-labelledby="faqOneTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">XNETWORK is a New Media Company focused to provide services related to IT Services, Mobile Apps and Digital Advertising. Supported by young creative minds who are experienced in this field and guided by a strong commitment to providing an integrated service with the latest technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqTwoTitle">
                                    <a href="#faqTwoCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">Where are we located?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqTwoCollapse" className="collapse" aria-labelledby="faqTwoTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">We are located in Gedung Bima Juara
                                        Jl. Utan Kayu Raya no.40
                                        Jakarta Timur

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeScreens