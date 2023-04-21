import { NavLink } from "react-router-dom";
import logo from "../images/movix-logo.svg"
import { useContext } from "react";
import { Moviecontext } from "../Contextprovier/Moviecontext";
function Navbar(){
    let {screenwidth}=useContext(Moviecontext);
    return (
        <div className=" flex justify-around p-2  ">
           <NavLink to="/">
           <div>
                <img src={logo} alt=""></img>
            </div>
           </NavLink>
            {
                screenwidth>=800 &&
                <div className=" text-white text-lg flex gap-5">
                <NavLink to="/">Movies</NavLink>
                <NavLink to="/">Tv Shows</NavLink>
                <NavLink to="/">Guest Sessions</NavLink>
                </div>
            }
        </div>
    )
}

export default Navbar;