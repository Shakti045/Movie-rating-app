import { createContext } from "react";
import { useState } from "react";
export let Moviecontext =createContext();
function Moviecontextcreator({children}){
   let [loader,setloader]=useState(false);
   let baseurl="https://api.themoviedb.org/3/";
   let Api_key="ba1388dc25970af1cba827191928e810";
  let [screenwidth,setscreenwidth]=useState(window.screen.width);
   window.onresize = ()=> {
    let screenwidth=window.screen.width;
    setscreenwidth(screenwidth);
};
   async function getdata(t){
     let url=`${baseurl+t}?api_key=${Api_key}`
     let data=await fetch(url);
     let result=await data.json();
     return result;
   }
   let imgurl ="https://image.tmdb.org/t/p/w500/"
  let value={
    loader,
    setloader,
    getdata,
    imgurl,
    screenwidth
  }

return (
    <Moviecontext.Provider value={value}>
        {children}
    </Moviecontext.Provider>
)
}

export default Moviecontextcreator;