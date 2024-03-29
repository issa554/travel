import React from 'react'
import '../css/header.scss'
import {Link} from "gatsby"

const header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">LOGO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav me-lg-auto linksul">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default header
