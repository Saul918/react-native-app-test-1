//import { useState } from "react"
import { useForm } from './hooks/useForm';

export const Formularios = () => {
    
    //const {email, password, onChange ,formulario} = useForm()
 
    /*
    const [formulario, setformulario] = useState({
        email: 'test@test.com',
        password: '123456'
    })

    const onChange = (value:string, campo:string) => {
        //Llamado a la función que cambia el useState
        setformulario({
            //Desestructuramos los valores del useState
            ...formulario,
            //Aqui es como si estuvieramos mandando
            //el atributo email o password. Dicho de otro modo
            //los [] computan es decir compara el valor que trae
            //el parametro "campo" y lo relaciona con el valor del
            //useState. Por ultimo si encontro un atributo que se llame
            //igual le asigna el valor que trae el parametro "value"
            //de la funcion onChange.
            [campo]: value
        });
    }
    */

    return (
        <>
            <h3>
                Formularios
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                //value={formulario.email}
                
                //value={email}
                
                //Una opcion es instanciando las propiedades del evento onChange.
                //onChange={(ev)=> onChange(ev.target.value, 'email')}
                
                //onChange={({target})=> onChange(target.value,'email2')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                //value={formulario.password}
                
                //value={password}
                
                //Una opcion es instanciando las propiedades del evento onChange.
                //onChange={(evento)=> onChange(evento.target.value, 'password')}
                //FIC: otra opcion es desestructurando el target del control input.
                
                //onChange={({target})=> onChange(target.value, 'password')}
            />
            <code>
                <pre>
                    {/*JSON.stringify(formulario, null, 2)*/}
                </pre>
            </code>
        </>
    )
}