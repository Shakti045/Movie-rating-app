import { useContext, useEffect, useState } from "react";
import{ Moviecontext } from "../Contextprovier/Moviecontext";
import { useNavigate } from "react-router";
import Img from "./Lazyload";

function Searchsection(){
    let [background,setbackground]=useState(null);
    let {getdata,imgurl,screenwidth}=useContext(Moviecontext);
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
            <div className=" opacity-40 w-full flex items-center">
              {
                screenwidth>700 &&
                <>
                <Img src={background} className="  w-[50vw] h-[70vh] -z-50"></Img>
                <Img src={background} className="  w-[50vw] h-[70vh] -z-50"></Img>
                </>
              }
              {
               screenwidth<700 &&
               <img src={background} className="  w-[100vw] h-[60vh] -z-50"></img>
              }
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