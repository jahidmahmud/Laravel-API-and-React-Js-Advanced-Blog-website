import React from 'react'
import axios from "axios";
import { BrowserRouter,Route } from 'react-router-dom'

import Manage from './component/categories/Manage'
import Create from './component/categories/Create'
import EditCategory from './component/categories/EditCategory'
import Dashboard from './component/mainComponent/Dashboard'
import Home from './component/mainComponent/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import ManageTag from './component/tag/ManageTag'
import CreateTag from './component/tag/CreateTag'
import EditTag from './component/tag/EditTag'
import TagDetails from './component/tag/TagDetails'
import DetailsCat from './component/categories/DetailsCat'
import ManagePost from './component/post/ManagePost'
import CreatePost from './component/post/CreatePost'
import PostEdit from './component/post/PostEdit'
import PostDetails from './component/post/PostDetails'
import PendingPost from './component/post/PendingPost'
import AdminPost from './component/post/AdminPost'
import Profile from './component/Profile'
axios.defaults.baseURL = 'http://localhost:8000/';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/auth/login"><Login /></Route>
        <Route exact path="/auth/registration"><Register /></Route>
        <Route exact path="/admin/dashboard"><Dashboard /></Route>
        <Route exact path="/admin/category/manage"><Manage /></Route>
        <Route exact path="/admin/category/create"><Create /></Route>
        <Route exact path="/admin/category/details/:id"><DetailsCat /></Route>
        <Route exact path="/admin/category/edit/:id"><EditCategory /></Route>
        <Route exact path="/admin/tag/manage"><ManageTag /></Route>
        <Route exact path="/admin/tag/create"><CreateTag /></Route>
        <Route exact path="/admin/tag/edit/:id"><EditTag /></Route>
        <Route exact path="/admin/tag/details/:id"><TagDetails /></Route>
        <Route exact path="/admin/post/manage"><ManagePost /></Route>
        <Route exact path="/admin/post/create"><CreatePost /></Route>
        <Route exact path="/admin/post/pending"><PendingPost /></Route>
        <Route exact path="/admin/post/edit:id"><PostEdit /></Route>
        <Route exact path="/admin/post/details:id"><PostDetails /></Route>
        <Route exact path="/admin/post/self"><AdminPost /></Route>
        <Route exact path="/admin/profile"><Profile /></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
