import React from "react";
import { Link } from 'react-router-dom';
import {useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const DELETE_POST = gql`

  mutation deletePost($id:ID!){
    deleteOnePost(id:$id)
  }

`;

function PostCard({title, author, id, edit, remove}) {
  const [deletePost] = useMutation(DELETE_POST);


    return (
        <>
        <div className="post-preview">
          <Link to={`/post/${id}`}>
            < h2 className= "post-title" >
              {title}
            </h2>
          </Link>
          < p className= "post-meta" > Posteado por  
            <Link to="#"> {author}</Link> 
          </p>
          <p>
            {
              edit ? <Link to={`/update/${id}`}>Editar </Link>: <></>
            } 
            {
              remove ? < button className = "btn btn-primary float-right"
              onClick = {
                () => {

                    deletePost({variables:{id}}).then(()=>{
                      window.location.reload();
                    })
                  
                }
              }>Borrar post. </button>
              : <></>
            }           
          </p>
        </div>
        </>
    );
}

export default PostCard;