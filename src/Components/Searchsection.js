import { useContext, useEffect, useState } from "react";
import{ Moviecontext } from "../Contextprovier/Moviecontext";
import { useNavigate } from "react-router";

function Searchsection(){
    let [background,setbackground]=useState(null);
    let {getdata,imgurl}=useContext(Moviecontext);
    let [searchvalue,setsearchvalue]=useState("");
    let navigate=useNavigate();
      async function fetchdata(){
        let data=await getdata("movie/popular");
        let {results}=data;
  let a=imgurl+results[Math.floor(Math.random()*results.length)].poster_path;
        setbackground(a);
      }
      function searchhandler(event){
         setsearchvalue(event.target.value)
      }
      function submithandler(e){
        e.preventDefault();
        if(searchvalue!=null){
          navigate(`${searchvalue}`);
        }
      }
     useEffect(()=>{
        fetchdata();
     },[])
    return (
        <div className={`w-full relative`}>
            <div className="w w-full flex flex-col items-center">
                <img src={background} className="  w-[100vw] h-[60vh] -z-50"></img>
            </div>
            <div className="absolute bottom-0 left-4  right-4"> 
           <form onSubmit={submithandler}>
           <input className=" w-full p-3  bg-transparent border-2 rounded-md border-white text-white" type="text" onChange={searchhandler} placeholder="Search for  movie or anything...." value={searchvalue}></input>
           </form>
            </div>
        </div>
    )
}

export default Searchsection;