import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <img src="/assests/post.png" alt="" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Feed
                    </span>
                </li>

                <li className="sidebarListItem">
                <img src="/assests/event.png" alt="" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Event
                    </span>
                </li>

                <li className="sidebarListItem">
                    <img src="/assests/blog1.png" alt="" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Blogs
                    </span>
                </li>

                <li className="sidebarListItem">
                <img src="/assests/news.png" alt="" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                     News
                    </span>
                </li>

                <li className="sidebarListItem">
                <img src="/assests/quotes.png" alt="" className="sidebarIcon" />
                    <span className="sidebarListItemText">
                        Quotes
                    </span>
                </li>
            </ul>
        
            <hr className="sidebarHr" />
            
        </div>
        </div>
    )
}

export default Sidebar
