import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import { useLocation } from "react-router";
import Img from "./Lazyload";
function Person(){
    let location =useLocation();
    let {getdata}=useContext(Moviecontext);
    let [details,setdetails]=useState([]);
    let [det,setdet]=useState([]);
    let pid=location.pathname.split("/").at(-1);
    let imgurl ="https://image.tmdb.org/t/p/w500/";
    async function getpersondata(){
       let {profiles}=await getdata(`person/${pid}/images`);
   
        setdetails(profiles);
    }
    async function getpersondetails(){
        let profiles=await getdata(`person/${pid}`);
  
        setdet(profiles);
    }
    useEffect(()=>{
           getpersondetails();
        getpersondata();
    },[location.pathname])
    return (
        <div>
        <div>
          <h1 className=" text-white text-2xl font-bold">{det?.name}</h1>
          <h1 className=" text-white">{det?.birthday}</h1>
          <h1 className=" text-white">{det?.place_of_birth}</h1>
          <h1 className=" text-white">{det?.known_for_department}</h1>
        </div>
        <div className="flex justify-between gap-y-5 flex-wrap">
           {
            details.map((data,index)=>{
                return <Img key={index} className={" h-[300px] w-[250px] border-4 border-pink-700  rounded-lg "} src={imgurl+data?.file_path}></Img>
            })
           }
        </div>
        </div>
    )
}

export default Person;

// h-[200px] w-[200px]