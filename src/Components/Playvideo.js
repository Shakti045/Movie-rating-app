import ReactPlayer from "react-player";
import { useContext } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
function Playvideo(props){
    let {screenwidth}=useContext(Moviecontext);
    let handler=props.pid;
    console.log(screenwidth<=600);
    return (
        <div className=" flex flex-col items-center gap-2">
        <ReactPlayer width={screenwidth<=700?"100vw":"50vw"}  url={`https://www.youtube.com/watch?v=${props.id}`} controls={true} playing={true} ></ReactPlayer>
         <button onClick={()=>handler(null)} className=" p-2 font-bold bg-red-900 rounded-md text-white">CLOSE VIDEO</button>
         </div>
    )
}

export default Playvideo;