import React, { useEffect, useState } from 'react'
import SecurityNavbar from './SecurityNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ViewLogSecurity = () => {
    const navigate=useNavigate()
    useEffect(
        ()=>{
            console.log(sessionStorage.getItem("stoken"))
            if (sessionStorage.getItem("stoken")==null) {
                navigate("/s")
            }
        }
    )



    const [data, changeData] = useState([   ])

    const fetchData = () => {
        axios.get("http://18.144.111.41:3000/api/security/view-logs", {
                    headers: { Authorization: 'Bearer stoken' }
                }).then(
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