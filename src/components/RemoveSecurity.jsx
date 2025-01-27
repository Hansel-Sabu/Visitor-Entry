import React from 'react'
import AdminNavbar from './AdminNavbar'

const RemoveSecurity = () => {
    return (
        <div>

            <AdminNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label"><b>USERNAME</b></label>
                                    <input type="text" className="form-control" />
                                    <label htmlFor="" className="form-label"><b>SECURITY ID</b></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             





        </div>
    )
}

export default RemoveSecurity