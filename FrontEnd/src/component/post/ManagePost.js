import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';

export default function ManagePost() {
    const [data, setData] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("posts")
        .catch((error) => console.log(error.resp));
        setData(response.data.posts);
        console.log(response.data);
    };
    get();
  }
  async function deletePost(id) {
    await axios
        .delete("posts/delete/"+id)
        .catch((error) => console.log(error.resp));
    getData();
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
                            <h1 class="m-0 text-dark">Post List</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                <li class="breadcrumb-item active">Post list</li>
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
                                                <h3 class="card-title">Posts List</h3>
                                                <a href="/admin/post/create" class="btn btn-primary">Create Post</a>
                                            </div>
                                        </div>

                                        <div class="card-body p-0">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th >id</th>
                                                        <th>Title</th>
                                                        <th>Slug</th>
                                                        <th>Excerpt</th>
                                                        <th>Category</th>
                                                        <th>Author</th>
                                                        <th>Status</th>
                                                        <th >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {data.map((item)=>(
                                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.slug}</td>
                                        <td>{item.excerpt}</td>
                                        <td>{item.category_id}
                                            {/* @foreach($post->categories as $category)
                                                <span class="badge badge-primary">{{ $category->name }} </span>
                                            @endforeach */}
                                        </td>
                                        <td>{item.user_id}</td>
                                        <td>
                                            {item.status}
                                        </td>
                                        <td class="d-flex">
                                            <a href={"/admin/post/edit"+item.id} class="btn btn-sm btn-primary mr-1"> <i class="fas fa-edit"></i> </a>
                                                <button type="submit" class="btn btn-sm btn-danger"> <i class="fas fa-trash" onClick={()=>deletePost(item.id)}></i> </button>
                                            <a href={"/admin/post/details"+item.id} class="btn btn-sm btn-success mr-1"> <i class="fas fa-eye"></i> </a>
                                        </td>
                                    </tr>
                                                ))
                                                }
                                                
                                                </tbody>
                                            </table>
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
