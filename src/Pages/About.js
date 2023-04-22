import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import noinfo from "../images/no-poster.png"
import Playvideo from "../Components/Playvideo";
import { FcNext,FcPrevious } from 'react-icons/fc';
import Video from "../Components/Video";
import Img from "../Components/Lazyload";
import Cast from "../Components/Cast";
import Similarmovies from "../Components/Similarmovies";
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
        <div>
         <div className=" flex flex-col gap-5 relative">
           <div className=" lg:flex justify-around ">
            <div>
             <Img className="rounded-lg max-h-[300px] " loading="lazy" src={about?.backdrop_path===null?noinfo:imgurl+images[imageindex]?.file_path}></Img>
             <div className=" flex justify-around">
          <FcPrevious onClick={()=>setimageindex(imageindex-1)} className=" bg-red-700  rounded-md text-3xl cursor-pointer font-bold  last-of-type:text-3xl"></FcPrevious>
         <FcNext onClick={()=>setimageindex(imageindex+1)}  className=" bg-red-700  rounded-md font-bold text-3xl cursor-pointer "></FcNext>
            </div>
            </div>
             <div className=" flex flex-col justify-around lg:max-w-[40vw] text-white">    
             <h1 className=" font-extrabold text-2xl border-b-4">{about?.original_title}</h1>
             <h2>{about?.overview}</h2>
              <h1>Rating:{about?.vote_average}</h1>
            
            </div>
              
           </div>
           <div className=" lg:mx-auto" >
            {     
               pid===null?"":<Playvideo pid={setpid}  id={pid}></Playvideo>

               }
            </div>
           <div classname="flex flex-col">
           <h1 className="  font-extrabold text-white text-3xl">Actors</h1>
              <Cast vid={id}></Cast>
           </div>

          <div className=" flex flex-col gap-2">
          <h1 className=" font-extrabold text-white text-3xl">Official Videos</h1>
          <Video vid={id} pid={setpid}></Video>
          </div>
            
          <div className=" flex flex-col gap-2">
          <h1 className=" font-extrabold text-white text-3xl">Related Movies</h1>
           <Similarmovies vid={id}></Similarmovies>
          </div>

        </div>
       
        </div>
    )
}

export default About;







// <div className="lg:max-w-[50vw] bg-red-950 text-white absolute top-0">
// <div className=" lg:flex gap-12">
// <img className=" rounded-lg " loading="lazy" src={about?.backdrop_path===null?noinfo:imgurl+images[imageindex]?.file_path}></img>
// {
//     pid===null?"":<Playvideo  id={pid}></Playvideo>
// }
// </div>

// <div className=" flex justify-around">
// <FcPrevious onClick={()=>setimageindex(imageindex-1)} className=" cursor-pointer font-bold text-3xl"></FcPrevious>
// <FcNext onClick={()=>setimageindex(imageindex+1)}  className=" font-bold text-3xl cursor-pointer "></FcNext>
// </div>

// <h1>{about?.original_title}</h1>
// <h2>{about?.overview}</h2>
// <CircularProgressbar className="h-[100px]" value={about?.vote_average} maxValue={10} text={about?.vote_average} styles={buildStyles({
// pathColor:
// about?.vote_average<5?"red":about?.vote_average<7?"orange":"green",
// textColor:"white",

// })}></CircularProgressbar>
// </div>