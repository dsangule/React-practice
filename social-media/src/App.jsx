import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import Post from "../pages/Post"
import ShowPost from "../pages/ShowPost"
import Home from "../pages/Home"

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post />} />
            <Route path="/show-post" element={<ShowPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}