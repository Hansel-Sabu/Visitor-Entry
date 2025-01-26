import React from 'react'

const SecurityNavbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Security</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="addlog">Add Daily Log</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="viewlogsecurity">View Daily Log</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="editlog">Edit Daily Log</a>
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

export default SecurityNavbar