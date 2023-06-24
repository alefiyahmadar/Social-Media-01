import { useContext, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { MediaContext } from "../context/contextProvider"
import { HomeCard } from "../all-cards/homeCard"

export const GetProfile = ()=>{

    
    const [userArr , setUserArr] =useState([{name:"AdarshIsBalik" , bio:"Hey There Im Adarsh" , link:"https://www.youtube.com/watch?v=C7dPqrmDWxs"}])
    const [profileName , setProfileName] = useState("")
    const [profileBio , setProfileBio] =useState("")
    const [userLink , setUserLink] = useState("")
    const [showEdit , setEdit] = useState(false)


    const {userProfile} =useParams()
    const {post} = useContext(MediaContext)



const getUser = post.filter((e)=>e.username === userProfile)
const saveProfileHandler =()=>{

    setUserArr([{name:profileName ,bio:profileBio , link:userLink}])
    setEdit(false)

    
}
console.log(userArr)
console.log(userArr)
    return(<div>
        <h2>Profile</h2>
        <div style={{display: userProfile === "adarshbalika" ? "block" :"none"}}>
        {
            userArr.map(({name , bio , link})=><div>
                <h3>{name}</h3>
                <p>{bio}</p>
                <NavLink to={link}>{link}</NavLink>
            </div>)
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

<button onClick={()=>setEdit(true)}  style={{display: userProfile === "adarshbalika" ? "inline" :"none"}}>Edit</button>
<div  style={{display : showEdit ? "block" :"none"}}>
    <h2>Edit Profile</h2>
    {
        userArr.map(({name , bio , link})=><div>
            <input type="text" onChange={(e)=>setProfileName(e.target.value)} placeholder={name}/>
    <input type="text" onChange={(e)=>setProfileBio(e.target.value)} placeholder={bio}/>
    <input type="text" onChange={(e)=>setUserLink(e.target.value)} placeholder={link} />
        </div>)
    }
    <button  onClick={saveProfileHandler}>Save</button>
    <button onClick={()=>setEdit(false)}>Back</button>

</div>


<div>
    {
        getUser.map((e)=><HomeCard {...e}/>)
    }
</div>

    </div>)
}