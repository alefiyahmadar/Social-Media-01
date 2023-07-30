import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { MediaContext } from "../context/contextProvider";

export const HomeCard = (element) => {



    const { id, content, likes: { likeCount, likedBy, dislikedBy }, username, comments,  date, follow, singlePost, isLiked, isBookMarked ,firstName , lastName} = element


    const { getFollowHandler , getUnfollowHandler } = useContext(MediaContext)
    const { arr, setArr } = useContext(MediaContext)
    
    const { userLoggedIn  } = useContext(MediaContext)


    const {   AddToBookmarks , RemoveBookMark  } = useContext(MediaContext)
    const { usersArr } = useContext(MediaContext)

    const [showCmt, setShowCmt] = useState(false)
    const [userCmt, setUserCmt] = useState("")

    const [userMenue, setUserMenue] = useState(false)
    const [genMenue, setGenMenue] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    

    const [cmtHandler, setCmtHandler] = useState(false)


    const [editText, setText] = useState(content)
    const [changeContent, setChange] = useState(false)








    const navigate = useNavigate()
    const MainUser = userLoggedIn


    console.log(username)



    const likeHandler = (id) => {



        if (likedBy.find((e) => e === MainUser)) {

            const useFilter = likedBy.filter((e) => e !== MainUser)


            setArr((prevArr) => prevArr.map((arr) => id === arr.id ? { ...arr, isLiked: !arr.isLiked, likes: { likeCount, dislikedBy, likedBy: useFilter } } : arr))



        } else {

            


            setArr((prevArr) => prevArr.map((arr) => id === arr.id ? { ...arr, isLiked: !arr.isLiked, likes: { likeCount, dislikedBy, likedBy: likedBy } } : arr))


        }


    }
    

    const commentHandler = () => {


        setShowCmt(!showCmt)
    }

    const PostCmtHandler = (id) => {

    


        setArr((prevArr) => prevArr.map((arr) => id === arr.id ? { ...arr, comments: comments } : arr))

        setShowCmt(false)
        setUserCmt("")


    }


    const DeleteCmt = (element) => {

        const useFilter = comments.filter((e) => e.username !== MainUser)

        setArr((prevArr) => prevArr.map((arr) => element.id === arr.id ? { ...arr, comments: useFilter } : arr))
        setCmtHandler(false)

    }



    const postMenueHandler = () => {


        if (username === MainUser) {

            setUserMenue(!userMenue)
        } else {

            setGenMenue(!genMenue)
        }
    }

    const postDeleteHandler = (id) => {

        const useFilter = arr.filter((e) => e.id !== id)

        setArr(useFilter)

        setUserMenue(false)



    }
    const editPostHandler = () => {


        setShowEdit(!showEdit)
        setUserMenue(!userMenue)

    }

    const SaveEditHandler = (e) => {



        setShowEdit(false)
        setUserMenue(false)
        setChange(true)


    }

         
      

    
    
   
    
 
    








    return (
        <div style={{  borderBottom:"0.1px solid #0e7490" , margin:"auto" ,width:"50%" ,justifyContent:"left" }}>
            
        <button onClick={postMenueHandler} style={{   display: follow ? "flex" : "none", float:"right",  border: "none", backgroundColor: "#083344" ,margin:"auto" , justifyContent:"right" , paddingTop:"1rem" , paddingRight:"1rem" ,width:"40%" }}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/ellipsis.png" alt="ellipsis"/></button>
            
            
        <div id={id} className="mainDivHome" style={{ display: follow ? "flex" : "none"  ,textAlign:"left" , padding:"1rem" , }}  >

            
           <p style={{fontWeight:"bold",marginBlockEnd:"0%" , display:"block" }}>
            <NavLink style={{textDecoration:"none" , fontSize:"large" , color:"white"  }} to={`/profile/${username}`}>{ firstName} {lastName}</NavLink>
            <p style={{marginBlockStart:"0%" ,marginBlockEnd:"0%", color:"grey" , fontSize:"1rem" }}>@{username}</p>
            

          
            
            </p>
       <div className="SearchContainer" >
    
            {
                userMenue && <div  style={{display:"flex" , flexDirection:"column" , backgroundColor:"#164e63"  , marginLeft:"85%" , marginBlock:"0%" , padding:"0.5rem" , width:"7rem",position:"absolute" , justifyContent:"space-around" , border:"0.1px solid #0e7490" , borderRadius:"1rem"}} ><button onClick={() => postDeleteHandler(id)} style={{padding:"0.5rem" , color:"white" , border:"none" , backgroundColor:"#164e63"}}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/delete.png" alt="delete"/>Delete</button> <button style={{padding:"0.5rem" , color:"white" , border:"none" , backgroundColor:"#164e63"}} onClick={editPostHandler}><img width="30" height="30" src="https://img.icons8.com/material-rounded/24/FFFFFF/edit--v1.png" alt="edit--v1"/>Edit</button> </div>
            }
          

            {
                genMenue && usersArr.map((e)=> e.username === username ? <button style={{display:"flex" ,position:"absolute" ,padding:"1rem" , marginLeft:"85%", backgroundColor:"#164e63" , border:"0.1px solid #0e7490" , borderRadius:"1rem" ,color:"white" }} onClick={ e.follow  ? ()=>getUnfollowHandler(e.username): ()=>getFollowHandler(e.username)}>{e.follow ? "UnFollow" : "Follow"}</button> : "")
            }

            </div>
            
            <div onClick={() => navigate(`/singlePost/${id}`)}>
                <p><h2>{changeContent ? editText : content}</h2><p>{date}</p> </p>


            </div>

            <div style={{padding:"1rem" , display:"flex"}}>

                <button  style={{ backgroundColor:"#083344" , border:"none" }}  onClick={() => likeHandler(id)} >{isLiked ?  <img width="30" height="30" src="https://img.icons8.com/emoji/48/heart-suit.png" alt="heart-suit"/>
 :<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png" alt="like--v1"/>} </button>
                <p style={{color:"white"}}>{likedBy.length} </p>


               

                <button style={{ backgroundColor:"#083344" , border:"none" }}   onClick={commentHandler}> <img  width="30" height="30" src="https://img.icons8.com/ios/50/000000/speech-bubble--v1.png" alt="speech-bubble--v1" /></button>
                <p style={{color:"white"}}>{comments.length} </p>


                <div style={{ display: showCmt ? "flex" : "none" , justifyContent: "center" ,  position:"absolute" , width:"25rem" , padding:"1rem" , backgroundColor:"#083344" ,border:"0.1px solid #0e7490" , borderRadius:"1rem"}}><input type="text" style={{width:"100%" , padding:"1rem" , backgroundColor:"#083344" ,color:"white" , outline:"none" , border:"none"}} onChange={(e) => setUserCmt(e.target.value)} placeholder="Post your reply" value={userCmt} /> <button style={{padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , borderRadius:"1rem" , color:"white" , width:"5rem" ,margin:"auto", display:"block" , marginRight:"1rem"}} onClick={() => PostCmtHandler(id)}>Post</button> <button style={{display:"block" , margin:"auto" , padding:"0.5rem" , background:"#083344" , border:"0.1px solid #fb7185" , borderRadius:"1rem" , color:"white" , marginRight:"1rem"}} onClick={() => setShowCmt(false)}>Cancel</button></div>





                <button style={{ backgroundColor:"#083344" , border:"none" }}  onClick={ isBookMarked ? ()=>RemoveBookMark(element) :() => AddToBookmarks(element)}><img alt="" width="30" height="30" src={isBookMarked ? "https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png" : "https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png "}
                /></button>


            </div>

            
<div>

            {
                singlePost && <div style={{   marginLeft:"0rem"  }} > 
                <p>Comments</p>
                      
                     <div style={{ display:"flex", justifyContent: "center"   , backgroundColor:"#083344"  ,padding:"1rem" ,border:"0.1px solid #0e7490"}}>
                       
                        <input type="text" style={{width:"100%" , padding:"0.5rem" , backgroundColor:"#083344" ,color:"white" , outline:"none" , border:"none"}} onChange={(e) => setUserCmt(e.target.value)} placeholder="Post your reply" value={userCmt} /> <button style={{padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , borderRadius:"1rem" , color:"white" , width:"5rem" ,margin:"auto", display:"block" , marginRight:"1rem"}} onClick={() => PostCmtHandler(id)}>Post</button> </div>
                     
                    
                 </div>


            }{
                singlePost && comments.map((e) => <div key={e.id} style={{display: "flex", justifyContent: "center"  , width:"100%"  , backgroundColor:"#083344"  ,flexDirection:"column" }}>
                <p style={{ display:"block", marginBlock:"0%"  }}>
                    <button onClick={() => setCmtHandler(!cmtHandler)} style={{ display: e.username === MainUser ? "flex" : "none" , float:"right" , backgroundColor:"#083344" , border:"none" ,marginBlock:"0%" }}><img width="25" height="25" src="https://img.icons8.com/sf-black/64/000000/horizontal-line.png" alt="horizontal-line"/></button>

                    
                    {
                        e.username === userLoggedIn ?  <button style={{ display:cmtHandler ? "flex" :"none" , float:"right" , marginBlock:"0%" ,padding:"1rem" , backgroundColor:"#083344" , border:"1px solid #0e7490" , borderRadius:"1rem",color:"white" }} onClick={() => DeleteCmt(element)}>Delete</button> :""

                    }
                   
                    <p>{e.username}</p>
                </p>
                <h3 style={{marginBlockStart:"0%" }}>{e.text}</h3>
            </div>)
            }
            
          
            </div>



<div style={{margin:"auto"  }}>
            {showEdit && <div style={{display:"flex" , flexDirection:"column" ,position:"absolute", backgroundColor:"#083344"  ,padding:"1rem" , width:"25rem"   , border:"0.1px solid #0e7490" , borderRadius:"1rem"}}>
                <textarea type="text" defaultValue={editText}  style={{width:"100%" ,outline:"none", margin:"auto"  , backgroundColor:"#083344" , color:"white" , border:"none" ,fontSize:"large" , wordWrap:"break-word" , whiteSpace:"pre-wrap"   }} wrap="soft" onChange={(e) => setText(e.target.value)} />
                <p style={{display:"flex" , justifyContent:"flex-end", margin:"0%" }}><button onClick={SaveEditHandler} style={{display:"flex"  , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"20%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" }}>Save</button><button style={{display:"flex"  , padding:"0.5rem" , backgroundColor:"#fb7185" , border:"none" , width:"20%" , justifyContent:"center" , fontWeight:"bold" , color:"white" , borderRadius:"1rem" }} onClick={() => setShowEdit(false)}>Cancel</button></p></div>}
</div>




        </div>
        </div>
    )



}