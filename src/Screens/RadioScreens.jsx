import React, {
    useState,
    useEffect
} from 'react';

const RadioScreens = () => {
    const [radio, setRadio] = useState('')
    const URL_API = 'http://localhost:8000'

    const fetchRadio = async () => {
        try {
            const data = await fetch(`${URL_API}/radiocoverage`, {
                method: 'GET'
            })
            const resp = await data.json()
            setRadio(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchRadio()
    }, [])

    return (
        <>
            {/* header */}
            <div className="header-content" style={{ marginTop: '7%' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/logochannel.png" width="300px" style={{ marginBottom: '3%' }} alt="icon_apk" />
                        <p className="text-dark">
                            XChannel radio broadcasts from Bogor, West Java, on the local frequency of 87.8 FM. This radio presents the world's best hits music and various entertainment programs and information suitable for young listeners. </p>
                        <a href="https://xchannel.id/" className="btn btn-danger mb-4">See The Website</a>
                        <div className="my-2">
                            <p className="header-app-download-title">GET OUR MOBILE APP</p>
                        </div>
                        <div>
                            <a href="https://play.google.com/store/apps/developer?id=sakti+developer" className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images/Group 231.png" alt="app" width="388px" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* content */}
            <section className="foi-page-section" style={{ marginBottom: '5%', marginTop: '5%' }}>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <img src="images/podcast.svg" alt="about 2" className="w-100 img-fluid pr-md-5" width="437px" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="about-section-two-title">Demographic </h2>
                        <div className="about-section-two-content">
                            <p>
                                <b>ONAIR NAME</b>	:	X CHANNEL <br />
                                <b>SLOGAN</b>	:	SETEL MUSIK TERBAIK <br />
                                <b>FORMAT</b>	:	MUSIC RADIO, LIFESTYLE & HUMAN INTEREST <br />
                                <b>MUSIC</b>	:	100%
                            </p>
                            <h2 className="about-section-two-title">Listener Profile </h2>
                            <p>
                                <b>PROFILE</b>	:	18-35 <br />
                                <b>AGE GROUP</b>	:	A,B+ <br />
                                <b>SES</b>	:	ENGLISH - 50%, INDONESIA - 50% <br />
                                <b>GENDER</b>	:	MALE - 45%, FEMALE - 55%
                                </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="foi-page-section" style={{ marginBottom: '5%', marginTop: '5%' }}>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h2 className="about-section-two-title">Radio Coverage </h2>
                        <div className="about-section-two-content">
                            <p className="mb-5">
                                the coverage of a radio station is the geographic area where the station can communicate. Broadcasters and telecommunications companies frequently produce coverage maps to indicate to users the station's intended service area.
                            </p>
                            <div className="row">
                                {radio.length > 0 ?
                                    radio.map((item) => {
                                        return (
                                            <div className="col-md-6 mb-3">
                                                <div className="media landing-feature">
                                                    <span className="landing-feature-icon" />
                                                    <div className="media-body">
                                                        <h5>{item.fm}</h5>
                                                        <p>
                                                            {item.provinsi}, {item.kota}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="images/audience.svg" alt="about 2" className="w-100 img-fluid pr-md-5" width="437px" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default RadioScreens