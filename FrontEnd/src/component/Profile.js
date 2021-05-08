import React,{useState,useEffect} from 'react'
import Header from './mainComponent/Header'
import Sidebar from './mainComponent/Sidebar'
import Footer from './mainComponent/Footer'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import image from '../component/image/12.jpg'

export default function Profile() {
    const [cookies, setCookie] = useCookies([ 'user']);
    console.log(cookies.uid);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    useEffect(() => {
        getData3();
        }, []);
    async function getData3(){
        axios.get('user/edit/' + cookies.uid)
          .then(res => {
              console.log(res);
              setName(res.data.event.name);
              setEmail(res.data.event.email);
          })
          .catch((error) => {
            console.log(error);
          })
        }
        async function updateProfile (e) { 
            e.preventDefault();
            if(password==""){

                const data = {
                    'name':name,
                    'email':email
                  };
                axios
              .post("user/edit/" + cookies.uid, data)
              .then((response) => {
                getData3();
              }).catch((err) => {
                console.log( err.data );
              });

            }
            else{
                const data = {
                    'name':name,
                    'email':email,
                    'password':password
                  };
                axios
              .post("user/edit/" + cookies.uid, data)
              .then((response) => {
                getData3();
              }).catch((err) => {
                console.log( err.data );
              });
            }
            
         }
    return (
        <div>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
                <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0 text-dark">Profile</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                        <li class="breadcrumb-item active">Profile</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                </div>

        <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3 class="card-title">Profile</h3>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-12 col-lg-9">
                                            <form onSubmit={updateProfile}>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label for="name">User name</label>
                                                                <input type="name" name="name" class="form-control" id="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="email">User email</label>
                                                                <input type="email" name="email" class="form-control" id="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="password">User password<small class="text-info">(Enter password if you want change.)</small></label>
                                                                <input type="password" name="password" class="form-control" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label for="image">User image</label>
                                                                    <div class="custom-file">
                                                                    <input type="file" class="custom-file-input" name="image" id="exampleInputFile" />
                                                                    <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <button type="submit" class="btn btn-lg btn-primary">Update Profile</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="card">
                                                <div class="card-body text-center">
                                                    <div class="m-auto">
                                                        <img src={image} alt="no data" class="img-fluid rounded-circle img-rounded" />
                                                    </div>
                                                    <div class="mt-2">
                                                        <h5>{name}</h5>
                                                        <p>{email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <Footer />
            
        </div>
    )
}
