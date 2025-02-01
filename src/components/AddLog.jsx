import React, { useState } from 'react'
import SecurityNavbar from './SecurityNavbar'
import axios from 'axios'

const AddLog = () => {
    const token = sessionStorage.getItem('token')

    const [input,setInput] =  useState(
        {"visitorName":"","purpose":""}
    )

    const inputHandler =(event) => {
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        const currentDateTime = new Date().toISOString();
        const updatedInput = { ...input, "entryTime": currentDateTime };

        console.log(updatedInput)

        axios.post("http://18.144.111.41:3000/api/security/add-log",updatedInput,{
            headers:{'token':token, "Content-Type": "application/json" }}
        ).then(
            (response)=>{
                if (response.data.message==='Log added') {
                    alert("Log added successfully")
                } else {
                    alert("Something went wrong")
                }
            }

        ).catch(
            (error)=>{console.log(error)}
        )
    }

    return (
        <div>

            <SecurityNavbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Visitor Name</label>
                                <input name='visitorName' type="text" className="form-control" onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Purpose</label>
                                <input name='purpose' type="text" className="form-control" onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddLog