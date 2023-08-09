import { createContext, useEffect, useState } from "react"
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import {users} from "../backend/db/users"
import { useNavigate } from "react-router-dom";


export const MediaContext =createContext()


export const ContextProvider =({children})=>{
const [post , setPost] =useState([])
const [updatedPost , setUpdatedPost] = useState([])
const [bookMark , setBookMark] =useState([])

const [arr , setArr] = useState([])
const [ usersArr , setUsersArr] = useState(users)
const [userLoggedIn , setUserLoggedIn] = useState("")

const [Name , setFirst] = useState("")
const [lastName , setLast] = useState("")
const [UserName , setUserName] = useState("")
const [Password , setPassword] = useState("")
const [CPassword , setCPassword] = useState("")
const [newFollow , setNewFollow] = useState(false)
const [isLoggedIn , setIsLoggedIn] = useState(false)
const [id , SetId] =useState(7)
const [filters , setFilter] = useState("Oldest")
const [searchHand , setSearch] = useState([]) 
const [showAlert, setShowAlert] = useState(false);
const [alertMsg , setAlertMsg] = useState("")

const [newUser , setNewUser] = useState({
     _id:uuid(),

     
    firstName:Name ,
    lastName :lastName,
    username:UserName,
    follow:true ,
    password:Password,
    createdAt: formatDate(),
    updatedAt: formatDate(),
})

  const navigate = useNavigate()






const getData =async()=>{

    try{

        const res = await fetch("/api/posts")
        const response = await res.json()

        const data =  await response.posts
        setPost(data)
        setUpdatedPost(data)
        setArr(data)
        



    }catch(e){
console.error(e.message)

    }
}




useEffect(()=>{
    getData()
    
   
    
},[]
)




const getFollowHandler = (name)=>{

    setShowAlert(true)
    setAlertMsg(`You started following ${name}`)

    setArr((prevArr)=>prevArr.map((e)=>e.username === name ? {...e , follow:true } : e))
    setUsersArr((prevArr)=>prevArr.map((e)=> e.username === name ? {...e , follow:true} : e))

    

    
}

const getUnfollowHandler = (name)=>{

    setShowAlert(true)
    setAlertMsg(`You unfollowed ${name}`)

    setArr((prevArr)=>prevArr.map((e)=>e.username === name ? {...e , follow:false } : e))
    setUsersArr((prevArr)=>prevArr.map((e)=> e.username === name ? {...e , follow:false} : e))



    
}
const AddToBookmarks = (element) => {

    setShowAlert(true)

    setAlertMsg("Post added to bookmark")

    setArr((prevArr) => prevArr.map((arr) => element.id === arr.id ? { ...arr, isBookMarked: true } : arr))








    setBookMark([...bookMark, element])


}

const RemoveBookMark =(element)=>{

    
    setShowAlert(true)

    setAlertMsg("Post removed from bookmark")


    const useFilter = bookMark.filter((e)=>e.id !== element.id)
    setArr((prevArr)=>prevArr.map((arr)=>element.content === arr.content ? {...arr ,  isBookMarked:false } : arr))
    setBookMark(useFilter)
    
    }
    const logOutHandler =()=>{

        navigate("/login")
        setIsLoggedIn(false)

        setShowAlert(true)
        setAlertMsg("Logged out")
     
        setArr((prevArr)=>prevArr.map((e)=>e.follow === true ? {...e , follow:false}: e))
        setUsersArr((prevArr)=>prevArr.map((e)=>e.follow === true ? {...e , follow:false}:e))
    
    
        
       
    
    
        }

        const handleAlertClose =()=>{
            setShowAlert(false)
        }









    return(
        <MediaContext.Provider value={{ post , updatedPost ,setUpdatedPost   , bookMark ,setBookMark  , arr , setArr , getFollowHandler,getUnfollowHandler ,  usersArr , setUsersArr ,AddToBookmarks , RemoveBookMark , userLoggedIn , setUserLoggedIn  ,newUser,setNewUser , Name ,setFirst ,lastName , setLast , UserName , setUserName , Password , setPassword , CPassword , setCPassword ,newFollow , setNewFollow , isLoggedIn , setIsLoggedIn ,id,SetId , filters , setFilter , searchHand , setSearch , logOutHandler ,showAlert , setShowAlert , handleAlertClose , alertMsg , setAlertMsg}}>
            {children}
        </MediaContext.Provider>
    )



}