import Post from "../posts/Post"
import Share from "../share/Share"
import "./feed.css"
import { useState, useEffect } from "react"
import axios from "axios"

const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        const fetchPosts = async () => {
            const res= username ? await axios.get("/posts/profile/" +username) : await  axios.get("posts/timeline/6172ae5855cdbe588e503151")
            setPosts(res.data);
        };
    fetchPosts();
    },[username])


    return (
        <div className="feed">
        <div className="feedwrapper">
            <Share />
            {posts.map((p)=>(
                <Post key={p._id} post={p} />
            ))}
            
            

        </div>
        </div>
    )
}

export default Feed
