import { Event, HelpOutlined, RssFeed, School, WorkOffOutlined } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>

                <li className="sidebarListItem">
                    <HelpOutlined  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Bookmark
                    </span>
                </li>

                <li className="sidebarListItem">
                    <WorkOffOutlined  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        event
                    </span>
                </li>

                <li className="sidebarListItem">
                    <Event  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Job
                    </span>
                </li>

                <li className="sidebarListItem">
                    <School  className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Courses
                    </span>
                </li>
            </ul>
            <button className="sidebarButton" >Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assests/person/4.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">Rohit kute</span>
                </li>
            </ul>


            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assests/person/4.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">Rohit kute</span>
                </li>
            </ul>

            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assests/person/4.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">Rohit kute</span>
                </li>
            </ul>

            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assests/person/4.jpg" alt="" className="sidebarFriendImg"/>
                    <span className="sidebarFriendName">Rohit kute</span>
                </li>
            </ul>
            
        </div>
        </div>
    )
}

export default Sidebar
