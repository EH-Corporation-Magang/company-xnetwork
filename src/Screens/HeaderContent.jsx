import React from 'react';

const HeaderContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h1>Attendance does not need to be complicated with this apps</h1>
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
        </>
    )
}

export default HeaderContent