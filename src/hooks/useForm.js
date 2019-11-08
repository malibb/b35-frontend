import { useEffect, useState} from 'react';

function useForm(callback){
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        callback(inputs);
    }; // cachar el submit de mi formulario

    const handleInputChange = (event) => {
        event.persist();
        const {name, value} = event.target
        setInputs(fields => ({
            ...fields,
            [name]: value,
        })); // se va ejecutar cuando el onchange se ejecute en los inputs y se modifique el valor
    }

    return {
        inputs,
        handleSubmit,
        handleInputChange,
    }
}

export default useForm;