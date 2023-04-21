import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Search from "./Pages/Search";

function App(){
  return (
    <div className="">
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path={`/:type/:id`} element={<About></About>}></Route>
       <Route path={`/:moviename/:type/:id`} element={<About></About>}></Route>
       <Route path="/:querry" element={<Search></Search>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  )
}
export default App; 