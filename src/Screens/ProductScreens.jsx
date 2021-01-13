import React, {
    useState,
    useEffect
} from "react";
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ProductScreens = () => {
    const [productapps, setProduct] = useState('')
    const [loading, setLoading] = useState(false)
    const Swal = withReactContent(MySwal)
    const URL_API = `http://localhost:8000`

    const fetchProduct = async () => {
        try {
            const data = await fetch(`${URL_API}/product`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp.result)
            setProduct(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchProduct()
            .then(() => {
                setLoading(true)
            })
    }, [])

    if (loading) {
        Swal.close()
        return (
            <>
                <section className="page-header">
                    <h1>Application Product</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb foi-breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><b>Application Product</b></li>
                        </ol>
                    </nav>
                </section>
                <section className="py-5 mb-5">
                    <div className="container">
                        {productapps.length > 0 ?
                            productapps.map((item) => {
                                if (item.id % 2 === 1) {
                                    return (
                                        <div className="row">
                                            <div className="col-md-6 mb-5 mb-md-0">
                                                <img src={item.image} alt="ss_apk" className="img-fluid" width="388px" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={item.icon} width="300px" alt="icon_apk" style={{ marginBottom: '5%' }} />
                                                <p className="mb-3">{item.description}</p>
                                                <h3 className="mb-4">Application Features</h3>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="media landing-feature">
                                                            <span className="landing-feature-icon" />
                                                            <div className="media-body">
                                                                <h5>{item.titlefiture1}</h5>
                                                                <p>{item.fiture1}.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {item.fiture2 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture2}</h5>
                                                                    <p>{item.fiture2}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture3 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture3}</h5>
                                                                    <p>{item.fiture3}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture4 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture4}</h5>
                                                                    <p>{item.fiture4}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture5 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture5}</h5>
                                                                    <p>{item.fiture5}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture6 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture6}</h5>
                                                                    <p>{item.fiture6}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="row" style={{ marginTop: '10%' }}>
                                            <div className="col-md-6 mb-5 mb-md-0">
                                                <img src={item.icon} width="300px" alt="icon_apk" style={{ marginBottom: '5%' }} />
                                                <p className="mb-5">{item.description}</p>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="media landing-feature">
                                                            <span className="landing-feature-icon" />
                                                            <div className="media-body">
                                                                <h5>{item.titlefiture1}</h5>
                                                                <p>{item.fiture1}.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {item.fiture2 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture2}</h5>
                                                                    <p>{item.fiture2}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture3 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture3}</h5>
                                                                    <p>{item.fiture3}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture4 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture4}</h5>
                                                                    <p>{item.fiture4}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture5 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture5}</h5>
                                                                    <p>{item.fiture5}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                    {item.fiture6 ?
                                                        <div className="col-md-6 mb-3">
                                                            <div className="media landing-feature">
                                                                <span className="landing-feature-icon" />
                                                                <div className="media-body">
                                                                    <h5>{item.titlefiture6}</h5>
                                                                    <p>{item.fiture6}.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <p></p>
                                                    }

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={item.image} alt="special offers" className="img-fluid" width="388px" />
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            :
                            <div className="row">
                                <h2>No Data In Here!</h2>
                            </div>
                        }
                    </div>
                </section>
            </>
        )
    } else {
        Swal.fire({
            title: 'Loading...',
            didOpen: () => {
                Swal.showLoading()
            },
        })
    }
    return (
        <p></p>
    )
}

export default ProductScreens