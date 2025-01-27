import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const SearchDailyLogs = () => {
    const token = sessionStorage.getItem('token')

    const [security, changeSecurity] = useState(
        []
    )

    const [searchItem, setSearchItem] = useState(
        {
            "searchKey": ""
        }
    )

    const searchHandle = (event) => {

        setSearchItem({ ...searchItem, [event.target.name]: event.target.value })

    }

    const submitSearch = (e) => {
        console.log(searchItem)

        e.preventDefault();
        axios.post("apilink", searchItem, {
            headers: { 'token': token, "Content-Type": "application/json" }
        }).then(
            (response) => {
                changeSecurity(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )


    }




    return (
        <div>

            <AdminNavbar />

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Search DailyLogs</label>
                                <input type="date" className="form-control" name='searchKey' value={searchItem.searchKey} onChange={searchHandle} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={submitSearch}>Search</button>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">ID</th>
                                        <th scope="col">USERNAME</th>

                                        <th scope="col"> CONTACT INFO</th>
                                        <th scope="col">PURPOSE OF VISIT</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        security.map(
                                            (i) => {
                                                return (

                                                    <tr>

                                                        <td>{i._id}</td>
                                                        <td>{i.username}</td>
                                                        <td>{i.contactinfo}</td>
                                                        <td>{i.purposeofvisit}</td>

                                                    </tr>

                                                )
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>






        </div>
    )
}

export default SearchDailyLogs