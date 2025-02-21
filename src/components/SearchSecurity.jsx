import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const SearchSecurity = () => {
    const token = sessionStorage.getItem('token')

    const [security, changeSecurity] = useState(
        []
    )

    const [searchItem,setSearchItem]=useState(
        {
            "name" :""
        }
    )

    const searchHandle = (event)=>{

        setSearchItem({...searchItem,[event.target.name]:event.target.value})

    }

    const submitSearch = (e)=>{
        e.preventDefault();
        axios.post("http://18.144.111.41:3000/api/admin/search-security",searchItem,{
            headers:{'Authorization':`Bearer ${token}`, "Content-Type": "application/json" }}).then(
                (response)=>{
                    changeSecurity(response.data)
                    
                }
            ).catch(
                (error)=>{

                    console.log(error)
                    if (error.response.status === 401) {
                        alert("Login Again")
                    } else if(error.response.status === 400) {
                        alert("Name field empty!!")
                    }
                    
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
                                <label htmlFor="" className="form-label">Search for security guard</label>
                                <input type="text" className="form-control" name='name' value={searchItem.name} onChange={searchHandle} />
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

                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Employee Code</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Active Status</th>
                                        <th scope="col">Date Created</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        security.map(
                                            (i) => {
                                                return (

                                                    <tr>

                                                        <td>{i.name}</td>
                                                        <td>{i.email}</td>
                                                        <td>{i.phone_no}</td>
                                                        <td>{i.employee_code}</td>
                                                        <td>{i.address}</td>
                                                        <td>{new Date(i.date_of_birth).toLocaleDateString()}</td>
                                                        <td>{(()=>{
                                                            if (i.is_active) {
                                                                return 'Active'
                                                            }
                                                            else{
                                                                return 'Inactive'
                                                            }
                                                        })()}</td>
                                                        <td>{new Date(i.created_date).toLocaleDateString()}</td>

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

export default SearchSecurity