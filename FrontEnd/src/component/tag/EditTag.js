import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function EditTag() {
    const {id:tid}=useParams();
    console.log(tid);
    const [name,setName]=useState('');
    const [slug,setSlug]=useState('');
    useEffect(() => {
        getData();
        }, []);
    async function getData(){
    axios.get('tags/edit/' + tid)
      .then(res => {
          console.log(res);
          setName(res.data.event.name);
          setSlug(res.data.event.slug);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    async function tagEdit (e) { 
        e.preventDefault();
        
        const data = {
            'name':name,
            'slug':slug
          };
          axios
          .post("tags/edit/" + tid, data)
          .then((response) => {
            setName("");
            setSlug("");
          }).catch((err) => {
            console.log( err.data );
          });
        
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
                                <h1 class="m-0 text-dark">Tag List</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/#">Tags</a></li>
                                    <li class="breadcrumb-item active">Edit Tag</li>
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
                            <h3 class="card-title">Edit tag</h3>
                            <a href="/admin/tag/manage" class="btn btn-primary">Go Back to Tag List</a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <form onSubmit={tagEdit}>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name">Tag name</label>
                                            <input type="text" name="name" class="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Slug</label>
                                            <textarea name="slug" id="slug" rows="4" class="form-control"
                                            value={slug} onChange={(e)=>setSlug(e.target.value)}>{slug}</textarea>

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
