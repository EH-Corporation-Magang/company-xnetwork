import React, {
    useState,
    useEffect
} from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CareerScreens = () => {
    const [career, setCareer] = useState('')
    const [loading, setLoading] = useState(false)
    const Swal = withReactContent(MySwal)
    const URL_API = `http://localhost:8000`

    const fetchCareer = async () => {
        try {
            const data = await fetch(`${URL_API}/job`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp.result)
            setCareer(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchCareer()
            .then(() => {
                setLoading(true)
            })
    }, [])

    if (loading) {
        Swal.close()
        return (
            <>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <section className="page-header">
                            <h2>Recent jobs</h2>
                            <h5>Find a job that suits your abilities and be part of us</h5>
                        </section>
                        <section className="career-section">
                            <div className="card career-card">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush careers-list-group">
                                        {career.length > 0 ?
                                            career.map((item) => {
                                                return (
                                                    <li className="list-group-item">
                                                        <div>
                                                            <h6 className="position-title">{item.job_position}</h6>
                                                            <p className="position-location">{item.job_location}</p>
                                                        </div>
                                                        <a href={`//${item.job_link}`} className="btn btn-danger apply-btn">Apply Now</a>
                                                    </li>
                                                )
                                            })
                                            :
                                            <li className="list-group-item">
                                                <div>
                                                    <h5 className="position-title">No data job!</h5>
                                                </div>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
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

export default CareerScreens