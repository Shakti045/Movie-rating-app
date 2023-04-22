import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import noresult from "../images/no-results.png"

import Img from "./Lazyload";
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
        <div className=" ovf cursor-pointer  flex overflow-x-auto gap-3">
     
          {
            videodata.length>0?(videodata?.map((data)=>{
              return <><img key={data?.key} className="w-[250px] rounded-lg" onClick={()=>you(data?.key)} src={`https://img.youtube.com/vi/${data?.key}/mqdefault.jpg`}></img>
                   
                     </>
          })):(<Img className={"h-[200px]"} src={noresult}></Img>)
          }
        </div>
    )
}

export default Video;