import { useContext } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import noposter from "../images/no-poster.png"
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
function Format({id,original_title,backdrop_path,poster_path,release_date,vote_average,name,first_air_date}){
    let {imgurl}=useContext(Moviecontext);
    return (
      <Link to={`movie/${id}`}>
          <div className="  p-1 rounded-lg w-[250px] h-[390px] truncate text-whit">
         <img src={backdrop_path!=null?imgurl+backdrop_path:poster_path!=null?imgurl+poster_path:noposter} className="rounded-md h-[300px] w-[250px]"></img>
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
      </Link>
    )
}

export default Format;