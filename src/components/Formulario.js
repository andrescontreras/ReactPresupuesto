import React, { Fragment, useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ agregarGastoNuevo }) => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
    }
    guardarError(true);
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };
    console.log(gasto);
    agregarGastoNuevo(gasto);
    guardarNombre('');
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje="Campos ingresados incorrectamente" /> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 50000"
          value={cantidad}
          onChange={e => guardarCantidad(+e.target.value)}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar"
        />
      </div>
    </form>
  );
};

export default Formulario;
