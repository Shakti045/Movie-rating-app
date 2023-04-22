import { useContext, useEffect } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import Format from "./Format";
import { useState } from "react";
import { FcNext,FcPrevious } from 'react-icons/fc';
import { useRef } from "react";
function Trending(){
    let [type,settype]=useState("movie");
    let [data,setdata]=useState([]);
    let [period,setperiod]=useState("week")
    let reference=useRef();
    let {getdata}=useContext(Moviecontext);
    async function fetchdata(){
       let {results}= await getdata(`trending/${type}/${period}`);
       setdata(results);
      
    }
  
    useEffect(()=>{
        fetchdata();
    },[type,period])
     function directionhandler(dir){
      const scrollby=
      dir==="left"?( reference.current.scrollLeft- reference.current.offsetWidth):( reference.current.scrollLeft+ reference.current.offsetWidth)
      reference.current.scrollTo({
        left:scrollby,
        behavior:"smooth"
      })
     }
    return (
        <div className="text-white pt-6">
            <div className=" lg:flex justify-around">
            <h1 className=" font-bold text-xl bg-red-800 text-white p-2 flex items-center justify-center rounded-md">Trending</h1>
            <div className=" text-lg   bg-white rounded-md p-2 text-blue-950  flex items-center justify-center lg:gap-4">
                <button  className="  p-2 rounded-md focus:bg-yellow-500"  onClick={()=>settype("movie")}>Movies</button>
                <button  className=" p-2 rounded-md focus:bg-yellow-500" onClick={()=>settype("tv")}>Tv Shows</button>
                <button  className=" p-2 rounded-md focus:bg-yellow-500" onClick={()=>setperiod("day")}>Day</button>
                <button  className=" p-2 rounded-md focus:bg-yellow-500" onClick={()=>setperiod("week")}>Week</button>
            </div>
            </div>
            <div ref={reference} className=" ovf relative flex gap-4 pt-6 overflow-x-auto">
         {
            data.map((item)=>{
                return <Format key={item?.id} {...item}></Format>
            })
         }
         {/* <FcPrevious onClick={()=>directionhandler("left")} className=" font-bold text-6xl fixed top-[200px] left-2"></FcPrevious>
         <FcNext onClick={()=>directionhandler("right")} className=" font-bold text-6xl fixed top-[200px] right-2"></FcNext > */}
         </div>
       
        </div>
    )
}

export default Trending;