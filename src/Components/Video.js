import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
function Video(props){
    let you=props.pid;
    let {getdata}=useContext(Moviecontext);
    let [videodata,setvideodata]=useState([]);
    async function getvideo(){
    let {results}=await getdata(`movie/${props.vid}/videos`)
    setvideodata(results);
    
    }
  
    useEffect(()=>{
      getvideo();
    },[])
    return (
        <div className=" cursor-pointer  flex overflow-x-auto gap-6">
          {
            videodata?.map((data)=>{
                return <img key={data?.key} onClick={()=>you(data?.key)} src={`https://img.youtube.com/vi/${data?.key}/mqdefault.jpg`}></img>
            })
          }
        </div>
    )
}

export default Video;