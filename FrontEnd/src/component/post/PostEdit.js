import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function PostEdit() {
    const {id:tid}=useParams();
    const [title,setTitle]=useState('');
    const [slug,setSlug]=useState('');
    const [excerpt,setExcerpt]=useState('');
    const [content,setContent]=useState('');
    const [category,setCategory]=useState('');
    useEffect(() => {
        getData();
        }, []);
    async function getData(){
    axios.get('posts/edit/' + tid)
      .then(res => {
          console.log(res);
          setTitle(res.data.event.title);
          setSlug(res.data.event.slug);
          setExcerpt(res.data.event.excerpt);
          setContent(res.data.event.content);
          setCategory(res.data.event.category_id);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const [data, setData] = useState([]);
        useEffect(() => {
        getData2();
        }, []);
  async function getData2() {
    const get2 = async () => {
      const response = await axios
        .get("categories")
        .catch((error) => console.log(error.resp));
        setData(response.data.category);
        console.log(response.data);
    };
    get2();
  }
  async function editSubmit (e) { 
    e.preventDefault();
    
    const data = {
        'title':title,
        'slug':slug,
        'excerpt':excerpt,
        'content':content,
        'category_id':category
      };
      axios
      .post("posts/edit/" + tid, data)
      .then((response) => {
        setTitle("");
        setSlug("");
        setContent("");
        setExcerpt("");
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
                                <h1 class="m-0 text-dark">Post Edit</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/#">Posts</a></li>
                                    <li class="breadcrumb-item active">Edit</li>
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
                            <h3 class="card-title">Edit Post</h3>
                            <a href="/admin/post/manage" class="btn btn-primary">Go Back to Post List</a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <form onSubmit={editSubmit}>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name">Post Title</label>
                                            <input type="text" name="title" class="form-control" id="name" placeholder="Enter Post title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Slug</label>
                                            <textarea name="slug" id="slug" rows="2" class="form-control"
                                                placeholder="Enter slug" value={slug} onChange={(e)=>setSlug(e.target.value)}></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Excerpt</label>
                                            <textarea name="excerpt" id="excerpt" rows="2" class="form-control"
                                                placeholder="Enter excerpt" value={excerpt} onChange={(e)=>setExcerpt(e.target.value)}></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Content</label>
                                            <textarea name="content" id="content" rows="2" class="form-control"
                                                placeholder="Enter content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Choose Post Category</label>
                                            <select class="form-select form-control" aria-label="Default select example" name="category" value={(category)} onChange={(e)=>setCategory(e.target.value)}>
                                            {
                                                data.map((i)=>(
                                                    <option value={i.id}>{i.name}</option>
                                                ))
                                            }
                                            
                                            </select>
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
