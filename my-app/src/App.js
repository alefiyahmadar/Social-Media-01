import "./App.css";
import logo from "./logo.png";
import React from "react";
import { Route,Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "./pages/Home";
import { PostDetail } from "./pages/PostDetails";
import { GetProfile } from "./pages/profilePage";

function App() {
  return (
    <div className="App">
     
      
     <Routes>
      <Route path="/" element={<HomePage/>}>

      </Route>
      <Route path="/singlePost/:postId" element={<PostDetail/>}></Route>
      <Route path="/profile/:userProfile" element={<GetProfile/>}></Route>
      <Route path="mockman" element={<Mockman/>}></Route>
     </Routes>



    </div>
  );
}

export default App;

