import { useContext, useEffect } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import Format from "./Format";
import { useState } from "react";
function Toprated(){
    let [type,settype]=useState("movie");
    let [data,setdata]=useState([]);
    let {getdata}=useContext(Moviecontext);
    async function fetchdata(){
       let {results}= await getdata(`${type}/top_rated`);
       setdata(results);

    }
    useEffect(()=>{
        fetchdata();
    },[type])

    return (
        <div className=" text-white">
            <div className=" flex justify-around">
            <h1>Top Rated</h1>
            <div className=" flex gap-4">
                <button onClick={()=>settype("movie")}>Movies</button>
                <button onClick={()=>settype("tv")}>Tv Shows</button>
            </div>
            </div>
            <div className="flex gap-4 p-6 overflow-x-auto">
         {
            data.map((item)=>{
                return <Format key={item?.id} {...item}></Format>
            })
         }
         </div>
        </div>
    )
}

export default Toprated;