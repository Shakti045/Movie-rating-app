import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import Format from "./Format";
function Similarmovies(props){
    let {getdata}=useContext(Moviecontext);
    let [Similarmovies,setsimilarmovies]=useState([]);
    async function getsimilarmovies(){
        let {results}=await getdata(`movie/${props?.vid}/similar`);
        setsimilarmovies(results);
    }

    useEffect(()=>{
        getsimilarmovies();
    },[])
    return (
        <div className=" ovf flex overflow-x-auto gap-6 text-white">
          {
            Similarmovies.map((data)=>{
                return <Format  key={data?.id} {...data}></Format>
            })
          }
        </div>
    )
}

export default Similarmovies;