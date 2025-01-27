import React, { useEffect, useState } from 'react'
import SecurityNavbar from './SecurityNavbar'
import axios from 'axios'

const ViewLogSecurity = () => {

    const [data, changeData] = useState([   ])

    const fetchData = () => {
        axios.get("").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => { fetchData() }, []
    )

    return (





        <div>

            <SecurityNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Visitor Name</th>
                                    <th scope="col">Purpose</th>
                                </tr>
                            </thead>

                            <tbody>
                                {

                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.date}</td>
                                                <td>{value.visitorName}</td>
                                                <td>{value.purpose}</td>

                                            </tr>
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

export default ViewLogSecurity