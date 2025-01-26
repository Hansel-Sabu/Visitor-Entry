import React from 'react'

const AdminNavbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Admin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="addsecurity">Add Security</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="searchsecurity">Search Security</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="viewsecurity">View All Security</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="removesecurity">Remove Security</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="viewlog">View Daily Log</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="searchlog">Search Daily Log</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="changepass">Change Password</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="statistics">Visitor Statistics</a>
                            </li>
                            <form class="d-flex" role="search">
                                <button class="btn btn-outline-success me-2" type="submit">LogOut</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default AdminNavbar