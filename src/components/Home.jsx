import React from 'react'
import NavbarHome from './NavbarHome'

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://images.unsplash.com/photo-1533745848184-3db07256e163?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src="https://c4.wallpaperflare.com/wallpaper/680/541/101/abstract-namaste-abstract-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                    </div>

                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="card text-center">
                  
                  <div class="card-body">
                    
                    <a href="/a" class="btn btn-primary">ADMIN LOGIN</a>
                  </div>
                </div>
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div class="card text-center">
                  
                  <div class="card-body">
                    
                    <a href="/s" class="btn btn-primary">SECURITY LOGIN</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    



  )
}

export default Home