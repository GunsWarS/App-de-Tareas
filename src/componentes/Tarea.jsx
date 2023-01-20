import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (

    // SI ES VERDADERO SE ASIGNA LA CLASE 'tarea-contenedor completada' Y SI ES FALSO 'tarea-contenedor'
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
      <div className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseSquare className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;