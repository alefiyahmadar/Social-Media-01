import { useContext ,useEffect,useState } from "react"
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";


import { MediaContext } from "../context/contextProvider"
import { HomeCard } from "../all-cards/homeCard"



export const HomePage =()=>{
  
    const {arr , setArr  , setUsersArr , filters} =useContext(MediaContext)
    const { userLoggedIn  , id ,SetId } = useContext(MediaContext)
    const {newUser} = useContext(MediaContext)
    


    const [newPost , setNewPost] =useState("")
    
   


   

   
    


    


     

  
    
    

const getUserData = ()=>{

    
    console.log(arr)


    setArr((prevArr)=>prevArr.map((e)=>e.username === userLoggedIn ? {...e , follow:true} : e))
    setUsersArr((prevArr)=>prevArr.map((e)=>e.username === userLoggedIn ? {...e , follow:true} : e))
}



useEffect(()=>{
    
    getUserData()
},[])

console.log(arr)



const addNewPostHandler =()=>{
    
    let highestId = 0

    arr.map((e)=>{
        if(e.id > highestId ){
            highestId = e.id
        }
      
        return e
    })

    SetId(highestId + 1)
    
    
setArr([...arr , { _id: uuid(),id:id ,follow:true, isLiked:false,
    isBookMarked:false,
     content:newPost ,  likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
  },
  username: userLoggedIn,
  createdAt: formatDate(),
  updatedAt: formatDate(),
  comments: [],
  firstName:newUser.firstName,
  lastName: newUser.lastName
}])

setNewPost("")


}


console.log(arr)







const getOldest = [...arr].sort((a,b)=>{
    
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateA - dateB;

})

const getTrending =  filters === "Trending" ? [...getOldest].sort((a,b)=>b.likes.likedBy.length - a.likes.likedBy.length) : getOldest 


const LatestsortedPosts = [...getTrending].sort((a, b) => {

 
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    
    return dateB - dateA;
  });

  





const getLatest = filters ==="Latest" ? LatestsortedPosts : getTrending













    return(
        <div className="mainBody" style={{}}>



<p style={{fontWeight:"bold" , color:"white" ,   }}>Home</p>

<hr style={{border:"0.1px #0e7490 solid"}}></hr>

            <div   style={{display:"flex"  , boxSizing:"border-box"   , backgroundColor:"#083344" , borderBottom:"none" ,paddingBottom:"1rem" , width:"50%" , margin:"auto"  }}>


            

            <input style={{  width:"100%" , margin:"auto" , boxSizing:"border-box" ,padding:"2rem" , backgroundColor:"#083344" , border:"none" , outline:"none" , fontSize:"large" , color:"white"}} type="text"  placeholder="Add A Post" value={newPost} onChange={(e)=>setNewPost(e.target.value)  }/>


            <button style={{display:"flex" , margin:"auto" , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"20%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" , marginRight:"2rem" , marginTop:"2rem"}}  onClick={addNewPostHandler}>Post</button>

            </div>
            <div style={{display:"flex" , justifyContent:"flex-start" , backgroundColor:"#164e63" ,width:"100%" , color:"white" , fontSize:"1rem" , border:"0.1px solid #0e7490" , margin:"auto" , padding:"1rem"}}>
                <p style={{margin:"auto"}}>{filters} Post </p>
            </div>


            {
                getLatest.map((element)=><HomeCard {...element}  />)
            }

            
        </div>
    )
}