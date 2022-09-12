import React, { useState } from "react";

const Form = () => {
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha, setFecha] = useState("");

  return (
    <>
      <div>
        <form className=" bg-white rounded-md p-5 mb-5">
          <div>
            <label htmlFor="" className="font-bold">
            🧑🏻👩🏼‍🦰 NOMBRE:
            </label>
            <input
              id="nombres"
              type="text"
              placeholder="Nombre"
              className="m-5 capitalize border-t-0 border-y-2 w-10/12 "
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="text" className="font-bold">
              📱 CELULAR:{" "}
            </label>
            <input
              id="celular"
              type="number"
              placeholder=" # celular"
              className="m-5 capitalize border-t-0 border-y-2 w-10/12"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="" className="font-bold">
              📧 CORREO:{" "}
            </label>
            <input
              id="correo"
              type="email"
              placeholder="Correo electronico"
              className="m-5 capitalize border-t-0 border-y-2 w-10/12"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            ></input>
          </div>

          <div>
            <label htmlFor="" className="font-bold">
            🎁 FECHA CUMPLEAÑOS:{" "}
            </label>
            <input
              id="fecha"
              type="date"
              className="m-5 border-t-0 border-y-2"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            ></input>
          </div>
          <button className="mx-30 w-full font-bold rounded-full bg-blue-800 text-white p-1.5  hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            Agregar
          </button>
        </form>
      </div>

      <div className="p-10 bg-blue-100 rounded-md mx-20 mb-5 border-2 border-blue-200">
        <div className="w-12/12 p-4 m-2 rounded-full bg-white border-1 border-2 border-blue-200  uppercase">
          <b> Nombres: </b> {nombres}
        </div>

        
          <div className="p-5  m-2 mx-2 rounded-full w-72  bg-white border-2 border-blue-200  uppercase">
            <b> Celular: </b> {celular}
          </div>
        
          <div className="p-5  m-2 mx-2 rounded-full w-72  bg-white border-2 border-blue-200  uppercase">
            <b> Correo: </b> {correo}
          </div>
        
          <div className="p-5 m-2 mx-2 rounded-full w-72  bg-white border-2 border-blue-200">
            <b> Fecha   Cumpleaños: </b> {fecha}
          </div>
      </div>
    </>
  );
};
export default Form;
