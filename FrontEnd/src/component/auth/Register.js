import React,{useState} from 'react'
import Nav from '../mainComponent/Home/Nav'
import axios from 'axios';
import Login from './Login';

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conPassword,setConPassword]=useState('');
    async function register(e){
      if(name!="" || email !="" || password !="" || conPassword !=""){
      if(password==conPassword){
      e.preventDefault();
      const data = {
        'name':name,
        'email':email,
        'password':password
      };
      axios.post("/register", data)
          .then((response) => {
            setName("");
            setEmail("");
            setPassword("");
            setConPassword("");
          }).catch((err) => {
            console.log( err.data );
          });
        }
        else{
          alert("password are not equal");
        }
      }
      else{
        alert("all fields are required");
      }
    }
    return (
      <>
        <Nav />
        <div className="hold-transition register-page">
          <div className="register-box">
            <div className="register-logo">
              <a href="../../index2.html">
                <b>Registration</b>
              </a>
            </div>
            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>
                <form onSubmit={register}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
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
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Retype password" value={conPassword} onChange={(e)=>setConPassword(e.target.value)}
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
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="terms"
                          defaultValue="agree"
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block" 
                      >
                        Register
                      </button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <div className="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" />
                    Sign up using Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" />
                    Sign up using Google+
                  </a>
                </div>
                <a href="login.html" className="text-center">
                  I already have a membership
                </a>
              </div>
              {/* /.form-box */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </>
    );
}

export default Register
