import { useContext } from "react"
import { MediaContext } from "../context/contextProvider"
import { HomeCard } from "../all-cards/homeCard"

export const HomePage =()=>{


const {post} =useContext(MediaContext)

    return(
        <div>
            <h2>This is Home page</h2>
            {
                post.map((element)=><HomeCard {...element}/>)
            }
        </div>
    )
}