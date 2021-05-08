import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function PostDetails() {
    const {id:tid}=useParams();
    const [title,setTitle]=useState('');
    const [slug,setSlug]=useState('');
    const [excerpt,setExcerpt]=useState('');
    const [content,setContent]=useState('');
    const [category,setCategory]=useState('');
    const [author,setAuthor]=useState('');
    useEffect(() => {
        getData();
        }, []);
    async function getData(){
    axios.get('posts/details/' + tid)
      .then(res => {
          console.log(res);
          setTitle(res.data.event.title);
          setSlug(res.data.event.slug);
          setExcerpt(res.data.event.excerpt);
          setContent(res.data.event.content);
          setCategory(res.data.event.category_id);
          setAuthor(res.data.event.user_id);
          getData2(res.data.event.category_id);
          getData3(res.data.event.user_id);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    async function getData2(cid){
        axios.get('categories/edit/' + cid)
          .then(res => {
              console.log(res);
              setCategory(res.data.event.name);
          })
          .catch((error) => {
            console.log(error);
          })
        }
        async function getData3(uid){
            axios.get('user/edit/' + uid)
              .then(res => {
                  console.log(res);
                  setAuthor(res.data.event.name);
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
                                <h1 class="m-0 text-dark">Post Details</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/#">Posts</a></li>
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
                            <a href="/admin/post/manage" class="btn btn-primary">Go Back to Post List</a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                            <table class="table table-hover">
                                    <tr>
                                        <td><h3><b>Title</b></h3></td>
                                        <td><h4>{title}</h4></td>
                                    </tr>
                                    <tr >
                                        <td><h3><b>Slug</b></h3></td>
                                        <td ><h4>{slug}</h4></td>
                                    </tr>
                                    <tr>
                                        <td><h3><b>Excerpt</b></h3></td>
                                        <td><h4>{excerpt}</h4></td>
                                    </tr>
                                    <tr >
                                        <td><h3><b>Content</b></h3></td>
                                        <td ><h4>{content}</h4></td>
                                    </tr>
                                    <tr>
                                        <td><h3><b>Category</b></h3></td>
                                        <td><h4>{category}</h4></td>
                                    </tr>
                                    <tr >
                                        <td><h3><b>Author</b></h3></td>
                                        <td ><h4>{author}</h4></td>
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
