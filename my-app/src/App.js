import "./App.css";

import React, { useContext, useState } from "react";
import { Route,Routes , NavLink } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "./pages/Home";
import { PostDetail } from "./pages/PostDetails";
import { GetProfile } from "./pages/profilePage";
import { BookMark } from "./pages/BookMarked";
import { ExplorePage } from "./pages/Explore";
import { LoginPage } from "./pages/login";
import { SignUpPage } from "./pages/signup";
import { MediaContext } from "./context/contextProvider";
import { AlertMessage } from "./pages/AlertMsg";

function App() {

const {isLoggedIn , usersArr , setFilter , searchHand , setSearch , logOutHandler ,showAlert , handleAlertClose ,alertMsg , setAlertMsg} = useContext(MediaContext)
const {userLoggedIn} = useContext(MediaContext)
const { getFollowHandler,getUnfollowHandler } = useContext(MediaContext)
const [searchVisible , setVisible] = useState(false)
const [searchResult , setResult] = useState("")
const filterHandler =(e)=>{
  setFilter(e.target.value)
 

  
  }

  const searchHandler =(e)=>{
    
    setResult(e.target.value)
    const userInput = e.target.value.toLowerCase()

    const GetUser = usersArr.filter((e)=>e.username.includes(userInput) )

    setSearch(GetUser)

    

    setVisible(GetUser.length > 0 ? true : false)




  }
  

  return (
    <div className="App">

     <div className="sideBar left-sideB" style={{ display:isLoggedIn ? "flex" : "none"  }}>
  
<h3 style={{ color:"#fb7185" , paddingRight:"2rem" }}>Instagram</h3>
        
        <NavLink className="NavLink" to="/" style={{marginTop:"1rem"  ,padding:"1rem", paddingRight:"2rem" , fontSize:"large" , color:"white" , fontWeight:"bold" , textDecoration:"none"  }}>Home</NavLink>
        
  
        <NavLink className="NavLink" to="/Bookmark" style={{padding:"1rem",paddingRight:"2rem" , fontSize:"large" , color:"white" , fontWeight:"bold" , textDecoration:"none"}}>  BookMark</NavLink> 
  
        <NavLink className="NavLink" to="/explore" style={{padding:"1rem",paddingRight:"2rem" ,fontSize:"large" , color:"white" , fontWeight:"bold" , textDecoration:"none"}} >Explore</NavLink> 
  
        <p className="NavLink" onClick={logOutHandler} style={{padding:"1rem", paddingRight:"2rem",fontSize:"large" , color:"white" , fontWeight:"bold" , textDecoration:"none"}} >Log Out</p>


        {
          usersArr.map((e)=>e.username ===userLoggedIn ? <div style={{  display:"flex" , flexDirection:"column" ,paddingTop:"25rem",color:"white" , fontWeight:"bold"}}>
            <NavLink style={{marginBlockEnd:"0%" ,paddingRight:"2rem" , textDecoration:"none" , color:"white" , fontSize:"large"}} to={`/profile/${e.username}`} >{e.firstName} {e.lastName}</NavLink>
            <p style={{fontSize:"0.8rem" , marginBlockStart:"0%" ,paddingRight:"2rem" }} >@{e.username}</p>
          </div>:"")
        }
        
                
        </div>

        <div className="sideBar right-sideB" style={{display:isLoggedIn ? "flex" : "none"  }}>

        
          
                
    
  


                <div style={{padding:"2rem"}}>
                    <button style={{padding:"0.5rem" , backgroundColor:"#083344" , width:"7rem" , border:"0.1px solid #fb7185" , color:"white" }}  value="Latest"  onClick={filterHandler}>Latest</button>
                    <button style={{marginLeft:"1rem" , padding:"0.5rem" , backgroundColor:"#083344" , width:"7rem" , border:"0.1px solid #fb7185" , color:"white"}} value="Trending"  onClick={filterHandler}>Trending</button>
                </div>

                
               



                <div className="SearchContainer" >

                <input placeholder="Search User" style={{background:"#083344" , width:"15rem" ,marginLeft:"2rem", padding:"0.5rem"  , border:"0.1px #fb7185 solid" , borderRadius:"1rem" , color:"white" }} type="search" onChange={searchHandler}/>

              <div style={{display:searchResult === "" ? "none": "flex" , flexDirection:"column" , border:"0.01px solid #fb7185" , width:"15rem" , borderTop:"none" , left:"0" , backgroundColor:"#164e63" ,  borderRadius:"1rem" , marginLeft:"2rem" }}>
                
<p className="search-result" style={{display:searchVisible ? "none" : "flex" , color:"white"}}>No User Found</p>
                  
                  
                  
                  
                  {
                    searchHand.map((e)=><div   className={`search-result${searchVisible ? "visible" :""}`} >
                      <p style={{marginBlockEnd:"0%" , marginBlockStart:"0%" , paddingTop:"0.5rem" , color:"white" , fontWeight:"bold" , paddingLeft:"1rem"}}><NavLink   to={`/profile/${e.username}`}  style={{textDecoration:"none" ,color:"white"}}  >{e.firstName} {e.lastName}</NavLink></p>
                      <p style={{marginBlockStart:"0%" , marginBlockEnd:"0%" , paddingBottom:"0.5rem" , color:"grey" , paddingLeft:"1rem"}}>@{e.username}</p>
                    </div>)
                  }

                  </div>
                </div>


               <div style={{ display:"flex" ,flexDirection:"column", justifyContent:"center", backgroundColor:"#083344" , marginLeft:"1rem" , marginRight:"1rem" , padding:"1rem" , marginTop:"4rem" , borderRadius:"1rem" , width:"15rem"}}>

                <h3 style={{ fontWeight:"bold" , color:"white" , marginBlockEnd:"0%" }}>Suggested Users</h3>
                
                {

                    usersArr.map((e)=><div style={{display:e.follow ? "none" : "flex"  , justifyContent:"center" }} ><p style={{fontWeight:"bold",marginBlockEnd:"0%" , display:"block"  }}><NavLink style={{textDecoration:"none" , color:"white" }}  to={`/profile/${e.username}`}>{e.firstName},{e.lastName}</NavLink> <p  style={{ color:"grey" , marginBlockStart:"0%"}} >@{e.username}</p></p>
                   <button style={{display:"flex" , margin:"auto" , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"30%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" }} onClick={e.follow ? ()=>getUnfollowHandler(e.username) : ()=>getFollowHandler(e.username)}  >{e.follow ? "UnFollow" : "Follow"}</button></div>)
                }
            

</div>

{showAlert && (
        <AlertMessage message={alertMsg} onClose={handleAlertClose} />
      )}

            </div>

     <Routes>
      <Route path="/" element={ isLoggedIn ?
      <HomePage/> : <LoginPage/>}>
        
      </Route>
      <Route path="/singlePost/:postId" element={<PostDetail/>}></Route>
      <Route path="/profile/:userProfile" element={<GetProfile/>}></Route>
      <Route path="/Bookmark" element={<BookMark/>}></Route>
      <Route path="/explore" element={<ExplorePage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignUpPage/>}></Route>
      <Route path="mockman" element={<Mockman/>}></Route>
     </Routes>



    </div>
  );
}

export default App;

