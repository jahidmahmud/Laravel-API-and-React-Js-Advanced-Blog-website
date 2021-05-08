import React,{useState} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';

export default function CreateTag() {
    const [name,setName]=useState('');
    const [slug,setSlug]=useState('');
    async function tagSubmit(e){
        if(name!="" || slug!=""){
            e.preventDefault();
            const data = {
                'name':name,
                'slug':slug
            };
        axios.post("/tags/add", data)
          .then((response) => {
            setName("");
            setSlug("");
          }).catch((err) => {
            console.log( err.data );
          });
        }
        else{
            alert("all fields are required");
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
                            <h1 class="m-0 text-dark"> Create Tag</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                <li class="breadcrumb-item"><a href="/#">Tag list</a></li>
                                <li class="breadcrumb-item active">Create Tag</li>
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
                                            <h3 class="card-title">Create Tag</h3>
                                            <a href="/admin/tag/manage" class="btn btn-primary">Go Back to Tags List</a>
                                        </div>
                                    </div>
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                                <form onSubmit={tagSubmit}>
                                                    <div class="card-body">
                                                        <div class="form-group">
                                                            <label for="name">Tag name</label>
                                                            <input type="text" name="name" class="form-control" id="name" placeholder="Enter Tag name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="exampleInputPassword1">Slug</label>
                                                            <textarea name="slug" id="slug" rows="4" class="form-control"
                                                                placeholder="Enter slug" value={slug} onChange={(e)=>setSlug(e.target.value)}></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="card-footer">
                                                        <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                                                    </div>
                                                </form>
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
