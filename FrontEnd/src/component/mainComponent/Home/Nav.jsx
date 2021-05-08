import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Nav = () => {
  const [cookies, setCookie] = useCookies([ 'user']);
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
            {
              (cookies.uid !=null)?
              <>
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
              </>
              :
              <>
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/auth/login">
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/auth/registration">
                  Registration
                </Link>
              </li>
              </>
            }
            </ul>
          </div>
        </nav> 
        </>
    )
}

export default Nav
