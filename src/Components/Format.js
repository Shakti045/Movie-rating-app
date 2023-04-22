import { useContext } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import noposter from "../images/no-poster.png"
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Img from "./Lazyload";
function Format({id,original_title,backdrop_path,poster_path,release_date,vote_average,name,first_air_date}){
    let {imgurl}=useContext(Moviecontext);
    let navigate=useNavigate();
    return (
          <div onClick={()=>navigate(`movie/${id}`)} className=" cursor-pointer">
          <div className="rounded-lg w-[250px]  truncate text-whit">
         <Img src={backdrop_path!=null?imgurl+backdrop_path:poster_path!=null?imgurl+poster_path:noposter} className="rounded-md "></Img>
         <h2>{original_title || name}</h2>
         <div className="flex justify-between">
         <p>{dayjs(release_date || first_air_date).format("MMM D, YYYY")}</p>
         <p>Rating:{vote_average}</p>
          <CircularProgressbar className="   h-[40px]" value={vote_average} maxValue={10}  styles={buildStyles({
            pathColor:
            vote_average<5?"red":vote_average<7?"orange":"green",
             trailColor:"white",
         })}></CircularProgressbar>
         </div>
    
        </div>
        </div>
    )
}

export default Format;

