import {useState} from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPresupuesto}) => {
    const [mensaje,setMensaje]=useState(''); 
    const handlePresupuesto= (e) => {
        e.preventDefault(); 
        if (!presupuesto || presupuesto< 0) {
            setMensaje('No es un Presupuesto Valido');
            return; 
        }
        //Cuando sea un presupuesto valido lo que hara sera quitar la alerta si existe 
        setMensaje('')
        setIsValidPresupuesto(true)
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      {/* cuando se presione submit detectara la funcion handlePresupuesto */}
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            id="presupuesto"
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            // agregamos el valor del presupuesto cuando se modifique a la variable presupuesto
            onChange={e=> setPresupuesto(Number(e.target.value))}
         />
        </div>

        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
