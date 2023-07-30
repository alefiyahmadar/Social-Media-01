import { useContext } from "react"
import { useParams , NavLink } from "react-router-dom"

import { MediaContext } from "../context/contextProvider"
import { HomeCard } from "../all-cards/homeCard"

export const PostDetail =()=>{


    const {postId} = useParams()
    
    const {   updatedPost} = useContext(MediaContext)
    const {arr , setArr } = useContext(MediaContext)
    

    console.log(arr)
    
    
    const getPost =  arr.filter((element) => Number(element.id) === Number(postId))
    
    
    

    
    return(
        <div style={{width:"100%" , margin:"auto" , padding:"1rem" , }}>
           
            
          <div >
    

            {
                getPost.map((element)=><HomeCard {...element} singlePost  />

                
            
                )


            
            }
            </div>
    




        </div>
    )
}