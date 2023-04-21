import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Format from "../Components/Format"
import Loader from "../Components/Loader"
function Search(){
    let location=useLocation();
    let querry=location.pathname.split("/").at(-1);
    let [data,setdata]=useState([]);
    let [page,setpage]=useState(1);
    let [pageinfo,setpageinfo]=useState(1);
    let Api_key="ba1388dc25970af1cba827191928e810";
    async function getdata(){
        let dataget=await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${Api_key}&query=${querry}&page=${page}`)
        let result=await dataget.json();
        setpageinfo(result?.total_pages);
        let {results} =result;
        if(data.length>0){
            console.log("hmm jee");
           setdata([...data,...results])
           console.log(data);
        }else{
            setdata(results)
        }
        console.log(result);
    }
    function getnextpagedata(){
        console.log("bro");
        setpage(page+1);
    }
    useEffect(()=>{
        getdata();
    },[querry,page])
    return(
        <>
            <h1 className=" text-white font-bold text-2xl text-center">Result for:{querry}</h1>
            <InfiniteScroll className=" w-[100vw] lg:grid lg:grid-cols-3 lg:pl-20 flex flex-col ml-6 text-white  gap-4" hasMore={pageinfo} dataLength={data.length} next={getnextpagedata} >
            {
            data.map((data,index)=>{
              return <Format key={index} {...data}></Format>
            })
          }
            </InfiniteScroll>
        </>
    )
}

export default Search;