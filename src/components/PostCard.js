import React from "react";
import { Link } from 'react-router-dom';

function PostCard({title, author, id}) {
    return (
        <>
        <div className="post-preview">
          <Link to={`/post/${id}`}>
            < h2 className= "post-title" >
              {title}
            </h2>
          </Link>
          < p className= "post-meta" > Posted by
            <a href="#"> {author} </a>
          </p>
        </div>
        </>
    );
}

export default PostCard;