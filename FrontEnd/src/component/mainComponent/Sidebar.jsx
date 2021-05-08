import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies([ 'user']);
  function logout(){
    setCookie('uid',null,{path:'/'});
    history.push("/");
  }
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/admin/dashboard" className="brand-link">
            <img
              src={process.env.PUBLIC_URL+"/dist/img/AdminLTELogo.png"}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Admin</span>
          </Link>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={process.env.PUBLIC_URL+"/dist/img/user2-160x160.jpg"}
                  //process.env.PUBLIC_URL+"/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User show"
                />
              </div>
              <div className="info">
                <Link to="/admin/profile" className="d-block">
                  Jahid Mahmud
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="/admin/category/manage" className="nav-link">
                  <i class="nav-icon fas fa-shopping-basket"></i>
                    <p>
                      Category management
                    </p>
                  </Link>
                </li>
                <li class="nav-item has-treeview ">
                    <a href="/admin/tag/manage" class="nav-link">

                    <i class="nav-icon fas fa-tags"></i>
                        <p>
                            Tag Management
                        </p>
                    </a>
                </li>
              <li class="nav-item has-treeview">
                  <a href="#/" class="nav-link ">

                  <i class="nav-icon fas fa-clipboard"></i>
                      <p>
                          Post Management
                          <i class="right fas fa-angle-left"></i>
                      </p>
                  </a>
                  <ul class="nav nav-treeview">
                      <li class="nav-item">
                          <a href="/admin/post/manage" class="nav-link">
                          <i class="fas fa-tasks nav-icon "></i>
                          <p>Manage Post</p>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a href="/admin/post/pending" class="nav-link">
                          <i class="fab fa-twitch nav-icon "></i>
                          <p>Pending Post</p>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a href="/admin/post/self" class="nav-link">
                          <i class="fas fa-user-shield nav-icon "></i>
                          <p>Admin Post</p>
                          </a>
                      </li>
                    </ul>
              </li>
                <li className="nav-item has-treeview">
                  <Link to="/admin/profile" className="nav-link">
                  <i class="nav-icon fas fa-user"></i>
                    <p>
                      Profile
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                      <a onClick={logout} class="nav-link" onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
                      <i class="nav-icon fas fa-sign-out-alt"></i>
                      <p>
                          Logout
                      </p>
                      </a>
                  </li>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
}

export default Sidebar
