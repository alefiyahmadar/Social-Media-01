import { useContext, useState } from "react"
import { MediaContext } from "../context/contextProvider"

import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const BookMark =()=>{



    
   

   

    const navigate = useNavigate()
   




const {bookMark , RemoveBookMark} =useContext(MediaContext)



console.log(bookMark)



    return(
        <div style={{width:"100%" , margin:"auto" , padding:"1rem"} }>
            <h2 style={{color:"white"}}>BookMark</h2>


            {

                bookMark.map((element)=>{
                    const {id ,content ,likes:{likeCount , likedBy , dislikedBy} , username , comments ,createdAt , updatedAt , date , follow } = element

                    

                    




                
                
                return(<div style={{  borderBottom:"0.1px solid #0e7490" , margin:"auto" ,width:"50%" }}>


                  



<p style={{fontWeight:"bold",marginBlockEnd:"0%" , display:"block"  }}>
            <NavLink style={{textDecoration:"none" , fontSize:"large" , color:"white"  }} to={`/profile/${element.username}`}>{ element.firstName} {element.lastName}</NavLink>
            <p style={{marginBlockStart:"0%" ,marginBlockEnd:"0%", color:"grey" , fontSize:"1rem" }}>@{username}</p>
            </p>





                   
           
            <div style={{color:"white"}} onClick={()=>navigate(`/singlePost/${id}`)}>
            <p><h2>{content }</h2 > {date}</p>

            </div>
                    


     <button style={{marginBottom:"1rem" , marginTop:"1rem" , backgroundColor:"#083344" , border:"none"}} onClick={()=>RemoveBookMark(element)}><img width="20" height="20" src= {"https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png"}></img></button>


                </div>)})
            }
        </div>
    )
}