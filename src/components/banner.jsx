import React from 'react'
import "../css/banner.scss"
const banner = () => {
    return (
        <div className="banner">
            <div className="container">

            <div className="row ">
                <div className="col-lg-6 text">

                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis minima sed a,
                     ullam tempora minus quod dolores deleniti autem doloremque suscipit!</p>
                </div>
            </div>
            </div>

            <div className="search">
            <div className="container">
            <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success" type="submit">Search</button>
    </form>
            </div>
            </div>
        </div>
    )
}

export default banner
