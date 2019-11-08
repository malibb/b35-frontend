import React from 'react';
import PostCard from '../components/Post';

function Feed() {
    return (
          <div className="container">
            < div className = "row" >
                < div className = "col-lg-8 col-md-10 mx-auto" >
                    <PostCard title="Post 1" author="mali"/>
                    <PostCard title="Post 2" author="mali"/>
                    <PostCard title="Post 3" author="mali"/>
            </div>
            <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                    Older Posts &rarr;</a>
            </div>
        </div>
    </div>
    );
}

export default Feed;