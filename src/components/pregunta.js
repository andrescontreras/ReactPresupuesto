import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta
}) => {
  const [cantidad, guardadCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = e => {
    guardadCantidad(+e.target.value);
  };

  const agregarPresupuesto = e => {
    e.preventDefault();
    if (cantidad > 0 || !isNaN(cantidad)) {
      guardarError(true);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      actualizarPregunta(false);
    } else {
      guardarError(true);
    }
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
