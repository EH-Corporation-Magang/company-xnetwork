import React from 'react';

const MessagingScreens = () => {
    return (
        <>
            <section className="page-header">
                <h1>Messaging Solution</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb foi-breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><b>Messaging Solution</b></li>
                    </ol>
                </nav>
            </section>

            <section className="blog-post-header">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 mb-5">
                        <ol>
                            <li style={{ fontSize: '40px', fontWeight: 'bolder' }}>
                                SMS Bulk
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="blog-post-content">
                <div className="row">
                    <div className="col-12 mb-5">
                        <img src="images/chatgroup.svg" alt="blog details" className="img-fluid" width="70%" style={{ marginLeft: '15%' }} />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-10 offset-lg-1">
                        <p className="mb-5">
                            Bulk messaging is the dissemination of large numbers of SMS messages for delivery to mobile phone terminals. It is used by media companies, enterprises, banks (for marketing and fraud control) and consumer brands for a variety of purposes including entertainment, enterprise and mobile marketing. This is an example of a bulk sms that we are currently developing and are making a product or service :
                        </p>
                        <div className="card faq-card">
                            <div className="card-header bg-white" id="faqOneTitle">
                                <a href="#faqOneCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                    <h6 className="mb-0">SMS Bulk - OTP</h6> <i className="far fa-plus-square ml-auto" style={{ color: 'black' }} />
                                </a>
                            </div>
                            <div id="faqOneCollapse" className="collapse" aria-labelledby="faqOneTitle">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src="images/smsotp.png" alt="smsotp" style={{ marginLeft: '25%' }} />
                                        </div>
                                        <div className="col">
                                            <p className="mb-0 text-gray">
                                                SMS Bulk send with Sender Masking ID (SID) for real time transactional information message such One Time Password (OTP), Password, PIN, etc. Our robust and highly reliable SMS Gateway Messaging Platform will enables Clients send this SMS type to their end customers through integration with our highly standard and secured API connections, where we provide 100 TPS for SMS sending.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card faq-card">
                            <div className="card-header bg-white" id="faqTwoTitle">
                                <a href="#faqTwoCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                    <h6 className="mb-0">SMS BULK - SMS BROADCAST</h6> <i className="far fa-plus-square ml-auto" style={{ color: 'black' }} />
                                </a>
                            </div>
                            <div id="faqTwoCollapse" className="collapse" aria-labelledby="faqTwoTitle">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src="images/smsbrc.png" alt="smsbrc" style={{ marginLeft: '25%' }} />
                                        </div>
                                        <div className="col">
                                            <p className="mb-0 text-gray">
                                                SMS Bulk send using Sender ID (SID) Masking to deliver massive broadcast message to multi end users. Our robust and highly reliable SMS Gateway Platform will sent many SMS to large numbers of recipients at one time with excellent delivery time and success rate. SMS Broadcast can be send through Web SMS or Auto Send with API connection, where we provide 100 TPS for SMS sending.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card faq-card">
                            <div className="card-header bg-white" id="faqThreeTitle">
                                <a href="#faqThreeCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                    <h6 className="mb-0">SMS BULK - SMS LONG NUMBER</h6> <i className="far fa-plus-square ml-auto" style={{ color: 'black' }} />
                                </a>
                            </div>
                            <div id="faqThreeCollapse" className="collapse" aria-labelledby="faqThreeTitle">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img src="images/smslong.png" alt="smslong" style={{ marginLeft: '25%' }} />
                                        </div>
                                        <div className="col">
                                            <p className="mb-0 text-gray">
                                                SMS Bulk send using Sender Long Number to deliver massive broadcast message to multi end users. Our robust and highly reliable SMS Gateway Platform will sent many SMS to large numbers of recipients at one time with excellent delivery time and success rate. SMS Long Number can be send through Web SMS or Auto Send through API or SMPP connection, where we provide 75 TPS that can be extend for more TPS according to Client’s requirement.
                                            </p>
                                        </div>
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

export default MessagingScreens