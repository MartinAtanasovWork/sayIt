import { useState } from "react";

export function useForm(initalValues,submitCallback){
    let [values,setValues] = useState(initalValues);

    function changeHandler(event){
        setValues(oldValues => ({...oldValues,[event.target.name]:event.target.value}));
    }

    function submitHandler(event){
        event.preventDefault();

        submitCallback(values);
    }

    return{
        values,
        changeHandler,
        submitHandler
    }
}