import { useContext } from "react"
import { MediaContext } from "../context/contextProvider"
import { NavLink, useNavigate } from "react-router-dom"




export const LoginPage = ()=>{

    const navigate = useNavigate()

    const { setArr , arr } = useContext(MediaContext)
    const { setUserLoggedIn  , setIsLoggedIn , setUsersArr , newUser , setNewUser} =useContext(MediaContext)


const GuestModeHandler = ()=>{

    setIsLoggedIn(true)
 
  setUserLoggedIn("adarshbalika")
   

setArr((prevArr)=>prevArr.map((e)=>e.username === "adarshbalika"? {...e , follow:true} : e) )
setUsersArr((prevArr)=>prevArr.map((e)=>e.username ===  "adarshbalika" ? {...e , follow:true} : e))

setNewUser({...newUser , firstName:"Adarsh" , lastName:"Balika"})

navigate("/")

}
console.log(arr)


    return(<div style={{width:"20rem", margin:"auto" , padding:"1rem" , marginTop:"10rem" , boxSizing:"border-box",border:"solid 0.1rem #fb7185",backgroundColor:"#083344" , borderRadius:"0.5rem"}}>

<h3 style={{color:"#fb7185"}}>Instagram</h3>

        <h2 style={{color:"white"}}  >Log In</h2>
 
        <div style={{display:"flex" , flexDirection:"column"  , margin:"auto"  }}>

        <input  style={{   padding:"0.5rem" , marginBottom:"0.5rem" ,border:"solid 0.1rem #fb7185", backgroundColor:"#083344"  }}  placeholder="username" />
        <input style={{padding:"0.5rem" , marginBottom:"0.5rem" , border:"solid 0.1rem #fb7185" , backgroundColor:"#083344" , }} placeholder="password"/>
        
        <button style={{padding:"0.4rem" , backgroundColor:"#fb7185" , border:"none" , borderRadius:"1rem" , fontSize:"1rem"  , color:"white"}}>Log In</button>

<button style={{padding:"0.4rem" , backgroundColor:"#083344" , marginTop:"1rem" , border:"solid 0.1rem #fb7185" , borderRadius:"1rem" , color:"white"}} onClick={GuestModeHandler}>Guest Mode</button>
</div>


<p style={{color:"white"}}> Dont have an Account? <NavLink to="/signup" style={{color:"#fb7185"}}>Sign Up</NavLink></p>


    </div>)
}