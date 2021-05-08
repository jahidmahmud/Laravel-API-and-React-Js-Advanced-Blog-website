import React,{useState,useEffect} from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import axios from 'axios';

export default function CreatePost() {
    const [title,setTitle]=useState('');
    const [slug,setSlug]=useState('');
    const [excerpt,setExcerpt]=useState('');
    const [content,setContent]=useState('');
    const [category,setCategory]=useState('');
    async function postSubmit(e){
        if(title!=="" || slug!==""||excerpt!=="" || content!==""){
            e.preventDefault();
            const data = {
                'title':title,
                'slug':slug,
                'excerpt':excerpt,
                'content':content,
                'category_id':category,
                'user_id':15
            };
        axios.post("/posts/add", data)
          .then((response) => {
            setTitle("");
            setSlug("");
            setContent("");
            setExcerpt("");
          }).catch((err) => {
            console.log( err.data );
          });
        }
        else{
            alert("all fields are required");
        }
    }

    const [data, setData] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("categories")
        .catch((error) => console.log(error.resp));
        setData(response.data.category);
        console.log(response.data);
    };
    get();
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
                            <h1 class="m-0 text-dark"> Create Post</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="/#">Home</a></li>
                                <li class="breadcrumb-item"><a href="/#">Post list</a></li>
                                <li class="breadcrumb-item active">Create Post</li>
                            </ol>
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
                            <h3 class="card-title">Create Post</h3>
                            <a href="/admin/post/manage" class="btn btn-primary">Go Back to Post List</a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <form  onSubmit={postSubmit}>
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
                                            <select class="form-select form-control" aria-label="Default select example" name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
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

        </div>
        <Footer />
            
        </div>
    )
}
