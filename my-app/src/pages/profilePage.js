import { useContext, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { MediaContext } from "../context/contextProvider"

import { HomeCard } from "../all-cards/homeCard";



export const GetProfile = ()=>{

    
    const [userArrMain , setUserArr] =useState([{name:"UserName" , bio:"Bio" , link:"link"}])
    const [profileName , setProfileName] = useState("AdarshIsBalik")
    const [profileBio , setProfileBio] =useState("Hey,Adarsh here!")
    const [userLink , setUserLink] = useState("Portfolio")
    const [edit , setEdit] = useState(false)


    const {userProfile} =useParams()
    console.log(userProfile)
    const { arr  , getUnfollowHandler , getFollowHandler , userLoggedIn , logOutHandler} = useContext(MediaContext)
    const { usersArr  } = useContext(MediaContext)
    

  
   
   
   
   
  

 const getPost = arr.filter((e)=>e.username === userProfile)






const saveProfileHandler =()=>{

    setUserArr([{name:profileName ,bio:profileBio , link:userLink}])
    setEdit(false)

    
}


    




    return(<div style={{width:"100%" , margin:"auto" , padding:"1rem"}}>
        <h2>Profile</h2>

        
        <div style={{display: userProfile === userLoggedIn ? "block" :"none"}}>
           
        {
            
            userArrMain.map((element)=>{ 

                console.log(element)
                const {name , bio , link} = element
                
                return(<div style={{ color:"white"}}>
                <h3>{name}</h3>
                <p>{bio}</p>
                <NavLink to={link}>{link}</NavLink>
                
            </div>)})
        }

        </div>
    
        
       



        <div style={{display:userProfile === "shubhamsoni" ? "block" : "none"}}>
            <h3>ShubhamSonayy</h3>
            <p>Hi Im Shubham</p>
            <NavLink to="">PortFolio</NavLink>
        </div>
        <div style={{display : userProfile === "sohamshah" ? "block" : "none"}}>
            <h3>Soham Shah</h3>
            <p>Hey Im Soham</p>
            <NavLink to="">Wired</NavLink>
        </div>
        <div style={{display : userProfile === "maryjane" ? "block" : "none"}}>
            <h3>Mary Jane</h3>
            <p>Hey Mary Here</p>
            <NavLink to="">Food</NavLink>
        </div>
        
<div style={{display:"flex" , width:"50%" , margin:"auto" , padding:"1rem"}}>
<button onClick={()=>setEdit(!edit)}  style={{display: userProfile === userLoggedIn ? "inline" :"none" , display:"flex" , margin:"auto" , padding:"0.5rem" , backgroundColor:"#083344" , border: " 0.1px solid #fb7185" , width:"20%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" }}>Edit</button>

<button onClick={logOutHandler} style={{display:userProfile === userLoggedIn ? "inline" :"none", display:"flex" , margin:"auto" , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"20%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" }} >Log out</button>
</div>

<div  style={{display : edit ? "block" :"none"}}>
    <h2>Edit Profile</h2>
    {
      edit &&   userArrMain.map(({name , bio , link})=><div style={{display:"flex" , flexDirection:"column" ,padding:"1rem" , width:"20%",  margin:"auto" , justifyContent:"center" ,border:"1px solid #0e7490" , borderRadius:"1rem"}}>
            
            <input style={{border:"0.1px solid #0e7490" , backgroundColor:"#083344" , padding:"1rem" , marginBottom:"1rem" , color:"white"}} type="text" onChange={(e)=>setProfileName(e.target.value)} placeholder={name}/>
    <input style={{border:"0.1px solid #0e7490" , backgroundColor:"#083344" , padding:"1rem" , marginBottom:"1rem" ,color:"white"}} type="text" onChange={(e)=>setProfileBio(e.target.value)} placeholder={bio}/>
    <input style={{border:"0.1px solid #0e7490" , backgroundColor:"#083344" , padding:"1rem" , marginBottom:"1rem" ,color:"white"}} type="text" onChange={(e)=>setUserLink(e.target.value)} placeholder={link} />
    <button style={{display:"flex" , margin:"auto" , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"30%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem"}}  onClick={saveProfileHandler}>Save</button>
    
        </div>)
    }
  
 

</div> 
<div>
    {
        usersArr.map((e)=> e.username === userProfile ? <button style={{display: e.username === userLoggedIn ?"none" :"inline"}} onClick={ e.follow  ? ()=>getUnfollowHandler(e.username): ()=>getFollowHandler(e.username)}>{e.follow ? "Unfollow" : "Follow"}</button> : "")
    }
</div>


<div>
    {
        getPost.map((element)=><HomeCard{...element}/>)
    }
</div>

    </div>)
}