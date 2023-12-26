import React from 'react'
import { tagocash_logo } from '../../assets'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 shadow-sm bg-primary-subtle z-3">
  <div className="container">
    <a className="navbar-brand" href="/">
        <img src={tagocash_logo} width={"218px"} height={"43px"} alt="" />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item me-5">
          <a className="nav-link fs-6 fw-normal text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item me-5">
          <a className="nav-link fs-6 fw-normal text-dark" href="/blogs">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 fw-normal text-dark" href="/contact">Contact</a>
        </li> 
      </ul>
      
      <div className="tagowallet_button my-2">
        <a href='/tagowallet' className='text-white fs-6 text-decoration-none fw-normal my-auto pb-1'>Open TagoWallet </a>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
