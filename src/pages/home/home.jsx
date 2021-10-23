import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import { Users } from "../../dummyData"
import "./home.css"

const home = () => {
    return (
        <div>
        <Topbar />
        <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
        
        </div>
    )
}

export default home
