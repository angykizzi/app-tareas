import React, {useState} from "react";
import "../hojas-de-estilo/tareaFormulario.css"
import {v4 as uuidv4} from "uuid";
//para crear identificadores unicos debemos instalar npm install uuid

function TareaFormulario(props){

    const [input, setInput] = useState("");

    const manejarCambio = e =>{
        setInput(e.target.value); //e.target.value permite extraer el valor del campo de texto que ingreso el usuario. 
    }

    const manejarEnvio = e => { // e = evento
        e.preventDefault(); //permite que no se vuelva a cargar toda la app cuando se envia la informacion en el formulario.
        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }


    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;