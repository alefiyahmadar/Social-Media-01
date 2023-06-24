import { useContext } from "react"
import { useParams , NavLink } from "react-router-dom"

import { MediaContext } from "../context/contextProvider"

export const PostDetail =()=>{


    const {postId} = useParams()
    const {post} = useContext(MediaContext)
    
    const getPost = post.filter((element) =>element.id === postId)
    

    return(
        <div>
            <h2>Single Post</h2>

            {
                getPost.map((element)=>{

                 const   {id ,content ,likes:{likeCount , likedBy , dislikedBy} , username , comments ,createdAt , updatedAt , date
                } =element

                return(
                    <div>
                         <NavLink to={`/profile/${username}`}>{username}</NavLink>
                        <p><h2>{content}</h2> {date}</p>
                        <p>{likeCount} Likes   {comments.length} Comments</p>
                       
                        {
                            comments.map((e)=>
                                <div key={e._id}>
                                    <p>{e.username}</p>
                                    <h3>{e.text}</h3>
                                </div>
                            )
                        }
                    </div>
                )

                    
                }
                )
            
            }



        </div>
    )
}