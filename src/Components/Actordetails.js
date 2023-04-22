import Img from "./Lazyload";
import noresult from "../images/no-results.png"
let imgurl ="https://image.tmdb.org/t/p/w500/"
function Actiordetails({original_name,profile_path}){
    return (
        <div className="flex flex-col items-center min-w-[200px]">
         <Img src={profile_path===null?noresult:imgurl+profile_path} className={" w-[200px] h-[200px] rounded-full border-2 border-pink-600"}></Img>
         <h1 className="text-white font-bold text-lg">{original_name}</h1>
        </div>
    )
}

export default Actiordetails;