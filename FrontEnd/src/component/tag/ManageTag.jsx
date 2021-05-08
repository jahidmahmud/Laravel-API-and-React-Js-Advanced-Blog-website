import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';

export default function ManageTag() {
    const [data, setData] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("tags")
        .catch((error) => console.log(error.resp));
        setData(response.data.tag);
        console.log(response.data);
    };
    get();
  }
  async function submitDelete(id) {
    await axios
        .delete("tags/delete/"+id)
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
                            <h1 class="m-0 text-dark">Tag List</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                <li class="breadcrumb-item active">Tag list</li>
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
                                            <h3 class="card-title">Tag List</h3>
                                            <a href="/admin/tag/create" class="btn btn-primary">Create Tag</a>
                                        </div>
                                    </div>

                                    <div class="card-body p-0">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th >id</th>
                                                    <th >Name</th>
                                                    <th>Slug</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {/* {data.map((item) => (
                                                console.log(item)
                                            ))} */}
                                            {data.map((item) =>(
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.slug}</td>
                                                    <td class="d-flex">
                                                        <a href={"/admin/tag/edit/"+item.id} class="btn btn-sm btn-primary mr-1"> <i class="fas fa-edit"></i> </a>
                                                            <button type="submit" class="btn btn-sm btn-danger" onClick={()=>submitDelete(item.id)}> <i class="fas fa-trash"></i> </button>
                                                        <a href={"/admin/tag/details/"+item.id} class="btn btn-sm btn-success mr-1"> <i class="fas fa-eye"></i> </a>
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
