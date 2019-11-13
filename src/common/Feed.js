import React from 'react';
import PostCard from '../components/PostCard';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const QUERY_POSTS = gql `

    query GETPOST{
        getPosts {
            _id,
            title,
            author{
                first_name
            }
        }
    }

`;

function Feed() {

    const { loading, errors, data } = useQuery(QUERY_POSTS);
    console.log(loading, errors, data);
    return (
          <div className="container">
            < div className = "row" >
                < div className = "col-lg-8 col-md-10 mx-auto" >
                    {
                        loading ? <>
                            <h3>Cargando...</h3>
                        </>  
                        :
                        <>
                            {data.getPosts ? 
                            data.getPosts.map( post => (
                                <PostCard title={post.title} edit author={post.author.first_name}
                                id={post._id} key={post._id}/>
                            ))
                            :
                            (<h2>No hay posts.</h2>)
                            }
                        </> 
                    }
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