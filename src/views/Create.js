import React, {useState} from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';
import Input from '../common/Input' 
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const CREATE_POST = gql`

    mutation createPost($data:PostInput!){
        createNewPost(data:$data){
            _id
        }
    }

`;

function Create(){
    const [sendPost] = useMutation(CREATE_POST);
    const [cover,setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState('');
    
    return(<></>);
}

export default Create;