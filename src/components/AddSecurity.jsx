import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const AddSecurity = () => {
  <AdminNavbar />
  const [input, setInput] = new useState(
    {
      "name": "",
      "email": "",
      "phone_no": "",
      "employee_code": "",
      "address": "",
      "date_of_birth": "",
      "password": "",
      "created_by": "",
      "cnfPass": ""
    }
  )
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    if (input.password == input.cnfPass) {

      let newInput = {
        "name": input.name,
        "email": input.email,
        "phone_no": input.phone_no,
        "employee_code": input.employee_code,
        "address": input.address,
        "date_of_birth": input.date_of_birth,
        "password": input.password,
        "created_by": "admin"
      }
      axios.post("http://18.144.111.41:3000/api/admin/add-security", newInput).then(
        (response) => {
          console.log(response.data)
          if (response.data.message == "Security guard added") {
            alert("New Security Guard Added Successfully")
            setInput({
              "name": "",
              "email": "",
              "phone_no": "",
              "employee_code": "",
              "address": "",
              "date_of_birth": "",
              "password": "",
              "created_by": "",
              "cnfPass": ""
            })
          } else {
            alert("Failed to add new Security Guard")
            setInput({
              "name": "",
              "email": "",
              "phone_no": "",
              "employee_code": "",
              "address": "",
              "date_of_birth": "",
              "password": "",
              "created_by": "",
              "cnfPass": ""
            })
          }
        }
      ).catch(
        (error) => {
          console.log(error)
        }

      )

    } else {
      alert("Password and Confirm Password doesn't match")
    }
  }

  return (
    <div>
      <AdminNavbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Phone no</label>
                <input type="text" className="form-control" name='phone_no' value={input.phone_no} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Employee Code</label>
                <input type="text" className="form-control" name='employee_code' value={input.employee_code} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">Address</label>
                <textarea cols="10" rows="4" className="form-control" name='address' value={input.address} onChange={inputHandler}></textarea>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" name='date_of_birth' value={input.date_of_birth} onChange={inputHandler} />

              </div>
            </div>
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <button onClick={readValue} className="btn btn-success">Submit</button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddSecurity