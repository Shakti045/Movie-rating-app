import { useContext, useEffect, useState } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
import Actordetails from "./Actordetails";
function Cast(props){
    let {getdata}=useContext(Moviecontext);
    let [Actors,Setactors]=useState([]);
    async function getactors(){
        let {cast}=await getdata(`movie/${props.vid}/credits`);
        Setactors(cast);
        console.log(cast);
    }

    useEffect(()=>{
    getactors();
    },[])
    return (
        <div className=" ovf pt-5 flex gap-6 overflow-x-auto">
           {
            Actors.map((data)=>{
                return (
                    <Actordetails key={data?.cast_id} {...data}></Actordetails>
                )
            })
           }
        </div>
    )
}

export default Cast;