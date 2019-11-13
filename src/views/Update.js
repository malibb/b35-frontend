import React, {useState} from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';
import Input from '../common/Input' 
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const UPDATE_POST = gql `
    mutation updatePost($id: ID!, $data: PostUpdateInput!) {
        updateOnePost(id:$id ,data: $data) {
            _id
        }
    }
`;

const GET_POST = gql `
    query getOnePost($id:ID!){
        getSinglePost(id:$id){
            title
            content
            cover
        }
    }
`;


function Update({match, history}){
    const [sendPost] = useMutation(UPDATE_POST);
    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState('');
    
    const query = useQuery(GET_POST, {
        variables: {
            id: match.params.id
        }
    });

    const catchCover = event => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () =>{
        setCover(file);
        setCoverPreview(reader.result);
    } 

    reader.readAsDataURL(file);

    }

    const catchData = async (inputs) => {
        delete inputs.cover;
        const newData = cover ? { ...inputs, cover}: {...inputs}
        const {
            data,
            errors
        } = await sendPost({
                    variables: {
                        id: match.params.id,
                        data: newData,
                    }
                });
        if(data) history.push('/');
        if (errors) alert(`Errores: ${errors}`);
    }

    const {
        inputs,
        handleSubmit,
        handleInputChange,
    } = useForm(catchData, query.data);

    if(query.loading) return <h2>Carrgando...</h2>

        return(<>
         <Layout head = "Modifica tu post de postealo!"
        subhead = "Comparte todo lo que gustes aqui" >
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <Input
                    name="title"
                    label="Titulo: "
                    type="text"
                    placeholder="Titulo del post"
                    value={inputs.title}
                    change={handleInputChange}
                    ></Input>
                    <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Contenido: </label>
                                <textarea className="form-control" 
                                placeholder="Contenido del post "
                                name="content" onChange={handleInputChange} value={inputs.content} 
                                cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    <Input
                    name="cover"
                    label="Cover: "
                    type="file"
                    placeholder="Selecciona el cover de tu post."
                    change={catchCover}

                    ></Input>

                    {
                        query.data.getSinglePost.cover ? (
                            <>
                            <h4>Imagen previa</h4>
                            <img src={query.data.getSinglePost.cover} alt="" className="d-block w-50"></img>
                            </>
                        ): (<></>)
                    }

                    <img src={coverPreview} alt="" className="d-block w-50"></img>
        
                <div className="clearfix mt-4">
                    <button className="btn btn-primary float-right" type="submit">
                        Actualizar post. 
                        </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </Layout>
    </>);
}

export default authHOC(Update);