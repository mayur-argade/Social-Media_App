import { Paper } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import "./post.css";

const Post = ({post}) => {  
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
    <div className="post">
      <Paper elevation={6}>
        <div className="postwrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={Users.filter((u) => u.id === post?.userId)[0].ProfilePicture}
                
                className="postProfileImg"
              />
              <span className="postUserName">
                  {Users.filter((u) => u.id === post?.userId)[0].username}
              </span>
              <span className="date">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>

          <div className="postcenter"></div>
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
          
          <div className="postbottom">
              <div className="postBottomLeft">
                <img className="likeicon" src="assests/like.png" onClick={likeHandler} />
                <span className="postlikecounter">{like}</span>
              </div>
              <div className="postBottomRight">
                <div className="postCommentText">
                   {post.comments}
                </div>
              </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Post;
