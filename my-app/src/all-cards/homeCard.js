import { NavLink, useNavigate } from "react-router-dom"

export const HomeCard = (element)=>{

    const {id ,content ,likes:{likeCount , likedBy , dislikedBy} , username , comments ,createdAt , updatedAt , date} = element

    console.log(createdAt)
    const navigate = useNavigate()


    return(
        <div id={id} className="mainDivHome" >
            <NavLink to={`/profile/${username}`}>{username}</NavLink>
            <div onClick={()=>navigate(`/singlePost/${id}`)}>
            <p><h2>{content}</h2> {date}</p>
            
            <p>{likeCount} Likes</p>
            <p>{comments.length} Comments</p>
            </div>

            
           
            
        </div>
    )



}