import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'


const VisitorStatistics = () => {
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

                                    <th scope="col"> NAME</th>
                                    <th scope="col"> CONTACT INFO</th>
                                    <th scope="col">PURPOSE OF VISIT</th>
                                    <th scope="col">DATE AND TIME OF ENTRY</th>
                                    <th scope="col">DATE AND TIME OF EXIT</th>
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
export default VisitorStatistics