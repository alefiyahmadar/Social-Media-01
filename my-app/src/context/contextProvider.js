import { createContext, useEffect, useState } from "react"


export const MediaContext =createContext()


export const ContextProvider =({children})=>{
const [post , setPost] =useState([])

const getData =async()=>{

    try{

        const res = await fetch("/api/posts")
        const response = await res.json()

        const data =  await response.posts
        setPost(data)



    }catch(e){
console.error(e.message)

    }
}
useEffect(()=>{
    getData()
},[])



    return(
        <MediaContext.Provider value={{ post}}>
            {children}
        </MediaContext.Provider>
    )



}