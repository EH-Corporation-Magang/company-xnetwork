import React from 'react';

const HeaderContent = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval={5000}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Attendance does not need to be complicated with this apps.</h1>
                                <p className="text-dark">He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement.</p>
                                <button className="btn btn-danger mb-4">Read More!</button>
                                <div className="my-2">
                                    <p className="header-app-download-title">GET OUR MOBILE APP</p>
                                </div>
                                <div>
                                    <button className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="images/Group 21.png" alt="app" width="388px" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval={5000}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>A peer to peer chat application that allows you to communicate between individuals.</h1>
                                <p className="text-dark">Secure chat application, with Peer to Peer technology, messages and data are sent directly between users, without being stored on the server All Control is in your hands.</p>
                                <button className="btn btn-danger mb-4">Read More!</button>
                                <div className="my-2">
                                    <p className="header-app-download-title">GET OUR MOBILE APP</p>
                                </div>
                                <div>
                                    <button className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="images/Group 222.png" alt="app" width="388px" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval={5000}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>X-Channel Radio. Set the Best Music Radio.</h1>
                                <p className="text-dark">The best X-channel Set Radio Music. serving you with the newest and the best music around 24 hours a day, and 7 days a week.</p>
                                <button className="btn btn-danger mb-4">Read More!</button>
                                <div className="my-2">
                                    <p className="header-app-download-title">GET OUR MOBILE APP</p>
                                </div>
                                <div>
                                    <button className="btn btn-app-download"><img src="images/android.svg" alt="play store" /></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="images/Group 231.png" alt="app" width="388px" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderContent