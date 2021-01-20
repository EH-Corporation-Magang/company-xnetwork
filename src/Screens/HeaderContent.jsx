/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
    useState,
    useEffect
} from 'react';

const HeaderContent = () => {
    const [product, setProduct] = useState('')
    const URL_API = `http://localhost:8000`

    const fetchApps = async () => {
        try {
            const data = await fetch(`${URL_API}/product`, {
                method: 'GET'
            })
            const datapps = await data.json()
            console.log(datapps.result)
            setProduct(datapps.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchApps()
    }, [])

    return (
        <>
            {/* Header */}
            <header className="foi-header landing-header">
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
                                    <a className="nav-link dropdown-toggle" href="#" id="productMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Services <i class="fas fa-caret-down" style={{ marginLeft: '5%' }}></i></a>
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
                    <div className="header-content">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval={5000}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1>Welcome To <span style={{ color: 'red' }}>XNetwork</span> Company Profile.</h1>
                                            <p className="text-dark">XNETWORK is a New Media Company focused to provide services related to IT Services, Mobile Apps and Digital Advertising. </p>
                                            <a href="/aboutus" className="btn btn-danger mb-4">About Us</a>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/company.svg" alt="app" width="298px" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {product.length > 0 &&
                                    product.map((item) => {
                                        return (
                                            <div className="carousel-item" data-interval={5000} key={item.id}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src={item.icon} width="300px" style={{ marginBottom: '3%' }} alt="icon_apk" />
                                                        <p className="text-dark">{item.description}</p>
                                                        <a href="appsproduct" className="btn btn-danger mb-4">Read More!</a>
                                                        <div className="my-2">
                                                            <p className="header-app-download-title">GET OUR MOBILE APP</p>
                                                        </div>
                                                        <div>
                                                            <a href="https://play.google.com/store/apps/developer?id=sakti+developer" className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <img src={item.image} alt="app" width="388px" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderContent