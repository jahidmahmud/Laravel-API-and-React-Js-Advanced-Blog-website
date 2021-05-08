import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function DetailsCat() {
    const {id:tid}=useParams();
    const [name,setName]=useState('');
    const [slug,setSlug]=useState('');
    useEffect(() => {
        getData();
        }, []);
    async function getData(){
    axios.get('categories/details/' + tid)
      .then(res => {
          console.log(res);
          setName(res.data.event.name);
          setSlug(res.data.event.slug);
      })
      .catch((error) => {
        console.log(error);
      })
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
                                <h1 class="m-0 text-dark">Category Details</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/#">Categories</a></li>
                                    <li class="breadcrumb-item active">Details</li>
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
                            <h3 class="card-title">Details</h3>
                            <a href="/admin/category/manage" class="btn btn-primary">Go Back to Category List</a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <table class="table table-hover">
                                    <tr>
                                        <td><h3><b>Category Name</b></h3></td>
                                        <td><h4>{name}</h4></td>
                                    </tr>
                                    <tr >
                                        <td><h3><b>Slug</b></h3></td>
                                        <td ><h4>{slug}</h4></td>
                                    </tr>
                                </table>
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
