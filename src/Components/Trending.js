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
        <div className="text-white">
            <div className=" flex justify-around">
            <h1>Trending</h1>
            <div className=" flex gap-4">
                <button onClick={()=>settype("movie")}>Movies</button>
                <button onClick={()=>settype("tv")}>Tv Shows</button>
                <button onClick={()=>setperiod("day")}>Day</button>
                <button onClick={()=>setperiod("week")}>Week</button>
            </div>
            </div>
            <div ref={reference} className=" relative flex gap-4 p-6 overflow-x-auto">
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