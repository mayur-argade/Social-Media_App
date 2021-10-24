import React from 'react'
import { Chat , Person, Search, Notifications } from "@material-ui/icons"
import { AppBar, Toolbar } from '@material-ui/core';
import "./topbar.css";
import { Link } from "react-router-dom"

const Topbar = () => {
    return (
        <>
        <AppBar position="static" color="primary">
            <Toolbar>
        <div className="topbarcontainer">
            <div className="topbarleft">
            <Link to="/" style={{textDecoration:"none"}}>    
                <span className="logo">Vruskhvalli</span>
            </Link>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="search for friend or place" className="searchInput" />
                </div>
            </div>
            <div className="topbarright">
              
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
        </Toolbar>
        </AppBar>
        </>
    )
}

export default Topbar
