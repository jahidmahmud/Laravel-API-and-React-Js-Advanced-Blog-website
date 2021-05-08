import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';

export default function PendingPost() {
    const [data, setData] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("posts/pending")
        .catch((error) => console.log(error.resp));
        setData(response.data.event);
        console.log(response.data);
    };
    get();
  }

  async function approve (id) { 
    //e.preventDefault();
    
    const data = {
        'uid':id
      };
      axios
      .post("posts/approve/" + id, data)
      .then((response) => {
        getData();
      }).catch((err) => {
        console.log( err.data );
      });
    
 }
 async function deny (id) { 
    //e.preventDefault();
    
    const data = {
        'uid':id
      };
      axios
      .post("posts/deny/" + id, data)
      .then((response) => {
        getData();
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
                            <h1 class="m-0 text-dark">Pending Post List</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                <li class="breadcrumb-item active">Pending Post list</li>
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
                                                {
                                                    data.map((data)=>(

                                                    
                                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.excerpt}</td>
                                        <td>{data.content}</td>
                                        <td>{data.category_id}</td>
                                        <td>{data.user_id}</td>
                                        <td>"Pending"</td>
                                        <td class="d-flex">
                                            <a onClick={()=>approve(data.id)} class="btn btn-sm btn-primary mr-1"> <i class="fas fa-check-double"></i> </a>
                                                <button type="submit" class="btn btn-sm btn-danger"> <i class="fas fa-trash" onClick={()=>deny(data.id)}></i> </button>
                                            <a href={"/admin/post/details" + data.id} class="btn btn-sm btn-success mr-1"> <i class="fas fa-eye"></i> </a>
                                        </td>
                                    </tr>
                                    ))}
                                                
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
