import React from 'react';
import Layout from '../common/Layout';
import Input from '../common/Input'
import useForm from '../hooks/useForm';

function Signup() {
    const catchData = (inputs) => {
        console.log(inputs);
    }

    const {
        inputs,
        handleSubmit,
        handleInputChange,
    } = useForm(catchData);

    return(<>
        <Layout head = "Crea tu cuenta en postealo!"
        subhead = "Recuerda que es necesario para empezar a escribir" >
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <Input
                    name="first_name"
                    label="Nombre: "
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={inputs.first_name}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                    <Input
                    name="last_name"
                    label="Apellido: "
                    type="text"
                    placeholder="Escribe tu apellido"
                    value={inputs.last_name}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                    <Input
                    name="email"
                    label="Email: "
                    type="text"
                    placeholder="Escribe tu email"
                    value={inputs.email}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                    <Input
                    name="password"
                    label="Password: "
                    type="password"
                    placeholder="Escribe tu password"
                    value={inputs.password}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                    <Input
                    name="confirm_password"
                    label="Confirma tu Password: "
                    type="password"
                    placeholder="Escribe de nuevo tu password"
                    value={inputs.confirm_password}
                    change={handleInputChange}
                    required={true}
                    ></Input>
                <div className="clearfix mt-4">
                    <button className="btn btn-primary float-right" type="submit">
                        Registrar 
                        </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </Layout>
    </>);
}

export default Signup;