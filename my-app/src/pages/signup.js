
import { useContext } from "react" 
import { MediaContext } from "../context/contextProvider"
import {  useNavigate } from "react-router-dom";


export const SignUpPage =()=>{

    const {   setUserLoggedIn  ,newUser,setNewUser,   setIsLoggedIn} = useContext(MediaContext)

    const { usersArr , setUsersArr} =useContext(MediaContext)

    const navigate = useNavigate()

    



const signUpHandler =()=>{

    navigate("/")
    
setIsLoggedIn(true)

   setUsersArr([...usersArr , newUser])

   
      


   

   


}


setUserLoggedIn(newUser.username)






        



    return(<div style={{width:"20rem", margin:"auto" , padding:"1rem" , marginTop:"10rem" , boxSizing:"border-box",border:"solid 0.1rem #fb7185",backgroundColor:"#083344" , borderRadius:"0.5rem"}}>
        <h3 style={{color:"#fb7185"}}>Instagram</h3>
        <h2 style={{color:"white"}}>Sign Up</h2>
        <div style={{display:"flex" , flexDirection:"column"  , margin:"auto"  }}>
        <input  style={{  outline:"none", color:"white" ,  padding:"0.5rem" , marginBottom:"0.5rem" ,border:"solid 0.1rem #fb7185", backgroundColor:"#083344"  }} placeholder="First Name" onChange={(e)=>setNewUser({...newUser , firstName:e.target.value})}  />
        <input style={{  outline:"none", color:"white" ,  padding:"0.5rem" , marginBottom:"0.5rem" ,border:"solid 0.1rem #fb7185", backgroundColor:"#083344"  }} placeholder="Last Name" onChange={(e)=>setNewUser({...newUser , lastName:e.target.value})}  />
        <input style={{  outline:"none", color:"white" ,  padding:"0.5rem" , marginBottom:"0.5rem" ,border:"solid 0.1rem #fb7185", backgroundColor:"#083344"  }} placeholder="Username" onChange={(e)=>setNewUser({...newUser , username:e.target.value})} />
        <input style={{   outline:"none", color:"white" , padding:"0.5rem" , marginBottom:"0.5rem" ,border:"solid 0.1rem #fb7185", backgroundColor:"#083344"  }} placeholder="Password" onChange={(e)=>setNewUser({...newUser , password:e.target.value})} />
        
        <button  style={{padding:"0.4rem" , backgroundColor:"#083344" , marginTop:"1rem" , border:"solid 0.1rem #fb7185" , borderRadius:"1rem" , color:"white" , textDecoration:"none" , marginBottom:"1rem" }} onClick={signUpHandler}>Sign Up</button>
        </div>
    </div>)
}