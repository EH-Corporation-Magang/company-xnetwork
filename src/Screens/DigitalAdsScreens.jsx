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
                            <p className="mb-4">
                                Reach Mobile Users worldwide using HTTP / HTTPS insertion connected to various advertisements on a number of mobile sites or applications and browsers accessed via the mobile network.
                            </p>
                            <h3 className="section-title">More About Digital Advertising</h3>
                            <div className="card feature-faq-card">
                                <div className="card-header bg-white" id="featureFaqOneTitle">
                                    <a href="#featureFaqOneCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0" style={{ marginLeft: '5%' }}>What is the cost per mile?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="featureFaqOneCollapse" className="collapse" aria-labelledby="featureFaqOneTitle">
                                    <div className="card-body">
                                        <p className="mb-2 text-gray">
                                            Cost per mille (CPM), also called cost ‰ and Cost Per Thousand (CPT) (in Latin mille means thousand), is a measurement commonly used in advertising. Radio, television, newspapers, magazines and online advertisements can be purchased on the basis of showing advertisements for a thousand viewers. For example, $ 1 CPM means $ 1 for 1000 ads shown to the audience. Metrics (CPM) are calculated by dividing the cost of placing an ad by the number of impressions (expressed in thousands) it generated. CPM is useful for comparing the relative efficiency of various advertising or media opportunities and in evaluating the overall cost of an advertising campaign.
                                        </p>
                                        <a href="https://id.wikipedia.org/wiki/Cost_per_mille" class="feature-link" style={{ fontSize: '13px' }}>Find out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card feature-faq-card">
                                <div className="card-header bg-white" id="featureFaqTwoTitle">
                                    <a href="#featureFaqTwoCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0" style={{ marginLeft: '5%' }}>What is the cost per acquisition?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="featureFaqTwoCollapse" className="collapse" aria-labelledby="featureFaqTwoTitle">
                                    <div className="card-body">
                                        <p className="mb-2 text-gray">
                                            The CPA marketing business is one of the easiest and most profitable businesses. Then what is CPA? CPA is Cost Per Acquisition which is a derivative of Affiliate Marketing.
                                        </p>
                                        <a href="https://www.bigcommerce.com/ecommerce-answers/what-is-cost-per-acquisition-cpa-what-is-benchmark-retailers/" class="feature-link" style={{ fontSize: '13px' }}>Find out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card feature-faq-card">
                                <div className="card-header bg-white" id="featureFaqThreeTitle">
                                    <a href="#featureFaqThreeCollapse" className="d-flex align-items-center" data-toggle="collapse">
                                        <h6 className="mb-0" style={{ marginLeft: '5%' }}> What is cost per sale?</h6> <i className="far fa-plus-square ml-auto" />
                                    </a>
                                </div>
                                <div id="featureFaqThreeCollapse" className="collapse" aria-labelledby="featureFaqThreeTitle">
                                    <div className="card-body">
                                        <p className="mb-2 text-gray">
                                            Cost Per Sale, or CPS is a marketing method where advertisers pay publishers when they convert traffic or leads into real sales.
                                        </p>
                                        <a href="https://www.wordstream.com/cost-per-sale#:~:text=Cost%20per%20sale%2C%20also%20known,generated%20by%20a%20particular%20ad." class="feature-link" style={{ fontSize: '13px' }}>Find out More!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-posts-section" style={{ marginBottom: '10%' }}>
                <section className="py-5 mb-5">
                    {digitalads.length > 0 &&
                        digitalads.map((item) => {
                            return (
                                <>
                                    <h4 className="related-posts-section-title mb-4">How digital advertising works?</h4>
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
                                </>
                            )
                        })
                    }
                    {digitalads.length === 0 &&
                        <p></p>
                    }
                </section>
            </section>
        </>
    )
}

export default DigitalAdsScreen
