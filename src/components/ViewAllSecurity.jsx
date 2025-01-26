import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const ViewAllSecurity = () => {

    const [data, setData] = useState([


    ])


    const fetchData = () => {
        axios.get("", {}, {
            Headers: { Authorization: 'Bearer jwt_token' }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => { console.log(error) }
        )

    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>

            <AdminNavbar />

            <div className="container">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>

                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    data.map(
                                        (value, index) => {

                                            return (

                                                <tr>
                                                    <td>{value}</td>
                                                    <td>{value}</td>
                                                    <td>{value}</td>
                                                    <td>{value}</td>

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
    )
}

export default ViewAllSecurity