import ReactPlayer from "react-player";
import { useContext } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
function Playvideo(props){
    let {screenwidth}=useContext(Moviecontext);
    console.log(screenwidth<=600);
    return (
        <ReactPlayer width={screenwidth<=700?"100vw":"50vw"}  url={`https://www.youtube.com/watch?v=${props.id}`} controls={true} playing={true} ></ReactPlayer>
    )
}

export default Playvideo;