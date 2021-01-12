import React from 'react';

const HomeScreens = () => {
    return (
        <>
            <h2 className="section-title">Application Features</h2>
            <div className="row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                    <h5>Secure Data</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" className="text-primary mb-5">Find out More</a></p>
                    <h5>Fully functional</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" className="text-primary mb-5">Find out More</a></p>
                </div>
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <h5>Live Chat</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" className="text-primary mb-5">Find out More</a></p>
                    <h5>Powerful dashboard</h5>
                    <p className="text-dark">No matter what kind of home you have to share, you can increase your earnings.</p>
                    <p className="mb-5"><a href="#!" className="text-primary mb-5">Find out More</a></p>
                </div>
                <div className="col-lg-4">
                    <h6 className="text-gray font-os font-weight-semibold">Trusted by the world's best</h6>
                    <div id="landingClientCarousel" className="carousel slide landing-client-carousel" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="d-flex flex-wrap justify-content-center">
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/slack.svg" alt="Slack" className="img-fluid" />
                                    </div>
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/spotify.svg" alt="Spotify" className="img-fluid" />
                                    </div>
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/paypal.svg" alt="Paypal" className="img-fluid" />
                                    </div>
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/amazon.svg" alt="Amazon" className="img-fluid" />
                                    </div>
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/google.svg" alt="Google" className="img-fluid" />
                                    </div>
                                    <div className="clients-logo">
                                        <img src="assets/images/clients/samsung.svg" alt="Samsung" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#landingClientCarousel" data-slide-to={0} className="active" />
                        </ol>
                    </div>
                </div>
            </div>
            <section className="py-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <img src="assets/images/app_2.png" alt="special offers" className="img-fluid" width="492px" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title">Get special offers on the things you love</h2>
                            <p className="mb-5">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.</p>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Essentials</h5>
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
                                        <h6 className="mb-0">What is Foi app?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqOneCollapse" className="collapse" aria-labelledby="faqOneTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqTwoTitle">
                                    <a href="#faqTwoCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">Why should I use Foi app?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqTwoCollapse" className="collapse" aria-labelledby="faqTwoTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqThreeTitle">
                                    <a href="#faqThreeCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">How can I use Foi app?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqThreeCollapse" className="collapse" aria-labelledby="faqThreeTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqFourTitle">
                                    <a href="#faqFourCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">Who will see my updates?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqFourCollapse" className="collapse" aria-labelledby="faqFourTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqFiveTitle">
                                    <a href="#faqFiveCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">Can people see my connections?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqFiveCollapse" className="collapse" aria-labelledby="faqFiveTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 landing-faq-card">
                                <div className="card-header bg-white" id="faqSixTitle">
                                    <a href="#faqSixCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0">Being a user, what all rights I have?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="faqSixCollapse" className="collapse" aria-labelledby="faqSixTitle">
                                    <div className="card-body">
                                        <p className="mb-0 text-gray">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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