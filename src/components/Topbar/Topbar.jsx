import React from 'react'
import { Chat , Person, Search, Notifications } from "@material-ui/icons"
import "./topbar.css";

const Topbar = () => {
    return (
        <div className="topbarcontainer">
            <div className="topbarleft">
                <span className="logo">Vruskhvalli</span>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="search for friend or place" className="searchInput" />
                </div>
            </div>
            <div className="topbarright">
                <div className="topbarlinks">
                    <span className="topbarlink">homepage</span>
                    <span className="topbarlink">timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbarIconItem"> <Person /> 
                    <span className="topbariconBadge"> 1 </span>
                    </div>
                </div>
                <div className="topbaricons">
                    <div className="topbarIconItem"> <Chat/>
                    <span className="topbariconBadge"> 1 </span>
                    </div>
                </div>
                <div className="topbaricons">
                    <div className="topbarIconItem"> <Notifications /> 
                    <span className="topbariconBadge"> 1 </span>
                    </div>
                </div>
                <img src="/assests/person/1.jpg" alt="" className="topbarimg" />
            </div>
        </div>
    )
}

export default Topbar
