import React, {
    useState,
    useEffect
} from 'react';

const DigitalAdsScreen = () => {
    const [digitalads, setDigitalAds] = useState('')
    const URL_API = `http://localhost:8000`

    const fetchAds = async () => {
        try {
            const data = await fetch(`${URL_API}/ads`, {
                method: 'GET'
            })
            const resp = await data.json()
            setDigitalAds(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchAds()
    }, [])

    return (
        <>
            <section className="page-header">
                <h1>Digital Advertising</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb foi-breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><b>Digital Advertising</b></li>
                    </ol>
                </nav>
            </section>

            {/* Content */}
            <section className="foi-page-section" style={{ marginTop: '-5%', marginBottom: '5%' }}>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h2 className="about-section-two-title">Background </h2>
                        <div className="about-section-two-content">
                            <p>
                                Programmatic mobile digital ads are not user friendly, sometimes encouraging viewers to view their ads in inappropriate ways.
                                </p>
                            <p>
                                Programmatic requires a number of strategies that only expert designers know how to do.
                                </p>
                            <p>
                                Programmatic mobile digital advertising has large publishers but cannot reach all Publishers.
                                </p>
                                    Programmatic does not have the sharpest or most detailed target or profile features.
                            </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images/back.svg" alt="about 2" className="w-100 img-fluid pr-md-5" width="437px" />
                    </div>
                </div>
            </section>
            <section className="foi-page-section pt-0 mb-4">
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
                                            <p>
                                                User Interface Design or user interface engineering is a design for software applications, and websites that focuses on user experience and interaction.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Avaible Any Devices</h5>
                                            <p>
                                                Because it can be accessed in a browser, all cellphones that have an internet connection can be connected.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="media landing-feature">
                                        <span className="landing-feature-icon" />
                                        <div className="media-body">
                                            <h5>Can reach all publishers at the same time</h5>
                                            <p>All the basics for businesses that are just getting started.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-posts-section" style={{ marginBottom: '10%' }}>
                <h4 className="related-posts-section-title mb-4">How digital advertising works?</h4>
                <section className="py-5 mb-5">
                    {digitalads.length > 0 &&
                        digitalads.map((item) => {
                            return (
                                <div className="card faq-card" key={item.id}>
                                    <div className="card-header bg-white">
                                        <a href={`#faq${item.id}Collapse`} className="d-flex align-items-center" data-toggle="collapse">
                                            <h6 className="mb-0">
                                                {item.title}
                                            </h6>
                                            <i className="far fa-plus-square ml-auto" />
                                        </a>
                                    </div>
                                    <div id={`faq${item.id}Collapse`} className="collapse">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={item.image} alt="content1" width="60%" style={{ marginLeft: '20%' }} />
                                                </div>
                                                <div className="col-md-6">
                                                    <h2>
                                                        {item.subtitle}
                                                    </h2>
                                                    <p className="mb-0">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {digitalads.length === 0 &&
                        <div>Data Kosong</div>
                    }
                </section>
            </section>
        </>
    )
}

export default DigitalAdsScreen
