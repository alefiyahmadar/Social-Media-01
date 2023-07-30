import { useContext } from "react"
import { MediaContext } from "../context/contextProvider"
import { HomeCard } from "../all-cards/homeCard"


export const ExplorePage =()=>{



    const {arr } = useContext(MediaContext)

    return(
    <div style={{width:"100%", margin:"auto" , padding:"1rem"}}>
        <h2 style={{color:"white"}}>ExplorePage</h2>
        {
            arr.map((e)=><HomeCard{...e}/>)
        }
        </div>
    )
}