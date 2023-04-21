import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import noinfo from "../images/no-poster.png"
import  PlayIcon from "../Components/Playbotton"
import Playvideo from "../Components/Playvideo";
import { FcNext,FcPrevious } from 'react-icons/fc';
import Video from "../Components/Video";
function About(){
    let {imgurl,getdata}=useContext(Moviecontext)
    let location =useLocation();
    let type=location.pathname.split("/").at(-2);
    let id=location.pathname.split("/").at(-1);
    let [about,setabout]=useState(null);
    let [pid,setpid]=useState(null);
    let [images,setimages]=useState([]);
    let [imageindex,setimageindex]=useState(0);

    async function fetchdata(){
     let result=await getdata(`${type}/${id}`);
     setabout(result);
     console.log(result);
    }
    async function fetchimage(){
        let {backdrops}=await getdata(`movie/${id}/images`)
        setimages(backdrops);
        console.log(backdrops[0]?.file_path);
    }
 
 
    useEffect(()=>{
        fetchdata();
        fetchimage();
    },[type,id])
    return (
        <div className=" pl-6 relative">
       <div>
        <img className=" w-[100vw] h-[80vh]  opacity-10 -z-30" src={imgurl+about?.poster_path}></img>
       
       
        </div>
        <div className=" text-white absolute top-0">
            <div className=" lg:flex gap-12">
            <img src={about?.backdrop_path===null?noinfo:imgurl+images[imageindex]?.file_path}></img>
            {
                pid===null?"":<Playvideo  id={pid}></Playvideo>
            }
            </div>
            <div className=" flex gap-2">
            <FcPrevious onClick={()=>setimageindex(imageindex-1)} className=" cursor-pointer font-bold text-3xl"></FcPrevious>
           <FcNext onClick={()=>setimageindex(imageindex+1)}  className=" font-bold text-3xl cursor-pointer "></FcNext>
            </div>
        <h1>{about?.original_title}</h1>
        <h2>{about?.overview}</h2>
        <CircularProgressbar className="h-[100px]" value={about?.vote_average} maxValue={10} text={about?.vote_average} styles={buildStyles({
            pathColor:
            about?.vote_average<5?"red":about?.vote_average<7?"orange":"green",
            textColor:"white",
    
         })}></CircularProgressbar>
          
      <Video vid={id} pid={setpid}></Video>
         
        </div>
        </div>
    )
}

export default About;