import React, {
    useState
} from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ContactScreens = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const Swal = withReactContent(MySwal)
    const URL_API = `http://localhost:8000`

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const data = await fetch(`${URL_API}/contact/store`, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await data.json()
            console.log(resp)
            if (resp.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success send a message',
                    text: 'Well get back to you in 1-2 business days'
                }).then(function () {
                    setEmail('')
                    setMessage('')
                    setName('')
                    Swal.fire({
                        title: 'Loading...',
                        timer: 1000,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                    })
                })
            }
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

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
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">YOUR NAME <sup>*</sup></label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name *"
                                onChange={e => setName(e.target.value)}
                                value={name}
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
                                onChange={e => setEmail(e.target.value)}
                                value={email}
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
                                onChange={e => setMessage(e.target.value)}
                                value={message}
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