import React from 'react'
import NavbarHome from './NavbarHome'

const Securityguard = () => {
  return (
    <div>
      <NavbarHome />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <center>
              <div class="card" >
              <h5 class="card-title"><b>SECURITY LOGIN</b></h5>
                <img height="300px" width="" src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  
                  <p class="card-text">
                    <div className="row g-3">
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form_label"><b>User Name</b></label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form_label"><b>Password</b></label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success"><b>Login</b></button>
                      </div>

                    </div>
                  </p>
                  <a href="#" class="btn btn-primary"><b>Forgot Password</b></a>








                </div>
              </div>
            </center>

















          </div>
        </div>
      </div>

    </div>
  )
}

export default Securityguard