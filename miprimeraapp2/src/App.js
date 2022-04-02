// importaciones de las funciones de react
import React, {useEffect, useState} from "react";
// impottaciones de componentes externos
import {Boton} from "./components/Boton";
// importación de hojas de estilos
import './App.css';
//* Función que renderiza nuestra app
function App() {
  // para el llamado del backend se necesitas tres estados
  // !Loading va hacer el que le dice a toda la app que esta en un momento de carga fase no esta cargando y true que esta gargando
  // ! la petición a ña API
  const [loading, setLoading] = useState(false);
  //Error
  const[error, setError] = useState(false);
  //Data, para las peticiones, para guardar productos o usuarios o categorias
  const[data, setData] = useState([]); 
  return (
    <div className="App" id="App">
      <Boton text="Llamar a API" />
   </div>
  ); 
}

export default App;
