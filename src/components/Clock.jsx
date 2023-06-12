import React, { useEffect, useState } from "react";

const Clock = () => {
   const  defaultState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Antonio',
    apellidos: 'Bautista'
   };

   const [user, setUser] = useState(defaultState);

   useEffect(() => {
    const intervalo = setInterval(() => {
        actualizarUsuario();
    }, 1000)
    return () => {
        clearInterval(intervalo);
    };
   });

   const actualizarUsuario = () => {
    return setUser({
        fecha: new Date(),
        edad: user.edad + 1,
        nombre: user.nombre,
        apellidos: user.apellidos
    })
   }
  return (
    <div>
        <h2>
          Hora Actual:   {user.fecha.toLocaleTimeString()}         
        </h2>
        <h3>
          Usuario: {user.nombre} {user.apellidos}
        </h3>
        <h1>Edad: {user.edad}</h1>
    </div>
  );
};

export default Clock;
