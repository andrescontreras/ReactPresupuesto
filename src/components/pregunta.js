import React, { Fragment } from 'react';

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupesto"
        />

        <input type="submit" className="button-primary u-full-width" />
      </form>
    </Fragment>
  );
};

export default Pregunta;
