import Searchsection from "../Components/Searchsection";
import Trending from "../Components/Trending";
import Popular from "../Components/Popular";
import Toprated from "../Components/Toprated";
import Upcoming from "../Components/Upcoming";
function Home(){
    return (
        <div>
        <Searchsection></Searchsection>
        <Trending></Trending>
        <Popular></Popular>
        <Toprated></Toprated>
        <Upcoming></Upcoming>
        </div>
    )
}

export default Home;