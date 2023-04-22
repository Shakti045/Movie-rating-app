import { useContext, useEffect } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import Format from "./Format";
import { useState } from "react";
function Upcoming(){
    let [type,settype]=useState("movie");
    let [data,setdata]=useState([]);
    let {getdata}=useContext(Moviecontext);
    async function fetchdata(){
       let {results}= await getdata(`${type}/upcoming`);
       setdata(results);
      
    }
    useEffect(()=>{
        fetchdata();
    },[type])

    return (
        <div className=" text-white pt-6">
            <div className=" flex justify-around">
            <h1 className=" font-bold text-xl bg-red-800 text-white p-2 flex items-center justify-center rounded-md">Upcoming</h1>
            <div className=" text-lg bg-white rounded-md p-2  text-blue-950  flex gap-4">
                <button className="  p-2 rounded-md focus:bg-yellow-500" onClick={()=>settype("movie")}>Movies</button>
                <button  className="  p-2 rounded-md focus:bg-yellow-500"onClick={()=>settype("tv")}>Tv Shows</button>
            </div>
            </div>
            <div className=" ovf flex gap-4 pt-6 overflow-x-auto">
         {
            data.map((item)=>{
                return <Format key={item?.id} {...item}></Format>
            })
         }
         </div>
        </div>
    )
}

export default Upcoming;