import React, {
    useState
} from 'react';


const ContactScreens = () => {
    return (
        <>
            <section className="page-header">
                <h2>Tell us about yourself</h2>
                <h5>Whether you have questions or you would just like to say hello, contact us.</h5>
            </section>
            <section className="contact-content">
                <div className="contact-widget media">
                    <img src="images/icon-4.png" alt="monitor" width="50px" />
                    <div className="media-body">
                        <h6 className="widget-title">Administrator</h6>
                        <p className="widget-content">info@xnetwork.com</p>
                    </div>
                </div>
            </section>
            <section className="contact-form-wrapper">
                <form >
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">YOUR NAME <sup>*</sup></label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name *"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">YOUR EMAIL ADDRESS <sup>*</sup></label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="message">YOUR MESSAGE <sup>*</sup></label>
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                rows={7}
                                placeholder="Hi there, I would like to ..."
                                required
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-danger mb-4">Submit</button>
                        <p className="form-footer-text">We'll get back to you in 1-2 business days.</p>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ContactScreens