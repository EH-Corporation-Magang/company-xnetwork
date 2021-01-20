import React from 'react';

const AboutUsScreens = () => {
    return (
        <>
            <section className="page-header">
                <h1>About</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb foi-breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><b>About</b></li>
                    </ol>
                </nav>
            </section>
            <section className="foi-page-section pt-0">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
                        <h2 className="about-section-one-title">
                            What is XNetwork?
                        </h2>
                        <div className="about-section-one-content">
                            <p>XNETWORK is a New Media Company focused to provide services related to IT Services, Mobile Apps and Digital Advertising.</p>
                            <p>Supported by young creative minds who are experienced in this field and guided by a strong commitment to providing an integrated service with the latest technology.</p>

                        </div>
                    </div>
                    <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
                        <img src="images/about.svg" alt="about" className="img-fluid" width="448px" />
                    </div>
                </div>
            </section>
            <section className="foi-page-section" style={{ marginBottom: '10%' }}>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <img src="images/resume.svg" alt="about 2" className="w-100 img-fluid pr-md-5" width="437px" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="about-section-two-title">Advertising Solutions </h2>
                        <div className="about-section-two-content">
                            <p>
                                Reach Mobile Users worldwide using HTTP / HTTPS insertion connected to various advertisements on a number of mobile sites or applications and browsers accessed via the mobile network.
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsScreens