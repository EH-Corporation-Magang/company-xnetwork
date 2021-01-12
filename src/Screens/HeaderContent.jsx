import React, {
    useState,
    useEffect
} from 'react';


const HeaderContent = () => {
    const [product, setProduct] = useState('')
    const URL_API = `http://localhost:8000`;

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
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval={5000}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Welcome To <span style={{ color: 'red' }}>XNetwork</span> Company Profile.</h1>
                                <p className="text-dark">XNETWORK is a New Media Company focused to provide services related to IT Services, Mobile Apps and Digital Advertising. </p>
                                <button className="btn btn-danger mb-4">About Us</button>
                            </div>
                            <div className="col-md-6">
                                <img src="images/company.svg" alt="app" width="298px" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {product.length > 0 &&
                        product.map((item) => {
                            return (
                                <div className="carousel-item" data-interval={5000}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1>{item.description.slice(0, 57)}</h1>
                                            <p className="text-dark">{item.description.slice(0, 120)}...</p>
                                            <button className="btn btn-danger mb-4">Read More!</button>
                                            <div className="my-2">
                                                <p className="header-app-download-title">GET OUR MOBILE APP</p>
                                            </div>
                                            <div>
                                                <button className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></button>
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
        </>
    )
}

export default HeaderContent