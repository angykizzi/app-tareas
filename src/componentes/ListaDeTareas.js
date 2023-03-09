import React, {useState} from "react";
import TareaFormulario from "./tareaFormulario";
import Tarea from "../componentes/tarea.js"
import "../hojas-de-estilo/ListaDeTareas.css";

function ListaDeTareas(){

const[tareas, setTareas] = useState([]); //inicialmente tarea sera un arreglo vacio
// Cada tarea se va a representar como un objeto en el arreglo
const agregarTarea= tarea => {
  if (tarea.texto.trim()){
    tarea.texto= tarea.texto.trim(); //trim es un metodo que nos permite quitar los espacios del inicio y final de la cadena de caracteres
    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);
  }
}
const eliminarTarea= id => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  setTareas(tareasActualizadas);
}

const completarTarea = id =>{
  const tareasActualizadas = tareas.map(tarea => {if(tarea.id === id){
    tarea.completada = !tarea.completada;
  }
  return tarea;
  });
  setTareas(tareasActualizadas);
}
  return (
    <> 
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
          <Tarea 
          key= {tarea.id} //es una forma que tiene react para identificar los elementos de la lista
          id={tarea.id}
          texto={tarea.texto}
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}

          />

          )
        }
      </div>
    
    </>
  );
}

export default ListaDeTareas;
//<> </> son fragmentos
//Renderizar una lista de componentes