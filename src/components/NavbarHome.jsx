import React from 'react'

const NavbarHome = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TIST</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href="/a">Admin</a>
              <a class="nav-link" href="/s">Security Guards</a>
              <a class="nav-link disabled" aria-disabled="true"></a>
            </div>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success me-2" type="submit">LogOut</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarHome