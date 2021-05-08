import React,{useState} from 'react'
import Nav from '../mainComponent/Home/Nav'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie'

const Login = () => {
  const [cookies, setCookie] = useCookies([ 'user']);
  const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function login(e){
      e.preventDefault();
      const data = {
        'email':email,
        'password':password
      };
      axios.post("/login", data)
          .then((response) => {
            setEmail("");
            setPassword("");
            if(response.data.user[0].name!=""){
              setCookie('uid', response.data.user[0].id, { path: '/' });
              history.push("/admin/dashboard");
            }
          }).catch((err) => {
            alert("incorrect username or password");
          });
      
    }
    return (
      <>
        <Nav />
        <div className="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>Admin</b>LTE
              </a>
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={login}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" /> Sign in using
                    Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" /> Sign in using
                    Google+
                  </a>
                </div>
                {/* /.social-auth-links */}
                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">
                    Register a new membership
                  </a>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
        </div>
      </>
    );
}

export default Login
