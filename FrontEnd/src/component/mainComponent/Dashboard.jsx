import React,{ useEffect, useState } from 'react'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'
import { useCookies } from 'react-cookie'
import axios from 'axios';

const Main = () => {
  const [cookies, setCookie] = useCookies([ 'user']);
  console.log(cookies.uid);
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
        useEffect(() => {
        getData();
        }, []);
        async function getData() {
          const get = async () => {
            const response = await axios
              .get("all")
              .catch((error) => console.log(error.resp));
              setData(response.data.categories);
              setData2(response.data.posts);
              setData3(response.data.tags);
              setData4(response.data.users);
          };
          get();
        }
        //console.log(response);

    return (
      <>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{data3}</h3>
                      <p>Tags</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        {data}<sup style={{ fontSize: 20 }}></sup>
                      </h3>
                      <p>Categories</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{data2}</h3>
                      <p>Posts</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>{data4}</h3>
                      <p>Users</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
}

export default Main
