import React from 'react';
import ProTypes from 'prop-types';

const Gasto = ({ gasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre} <span className="gasto">$ {gasto.cantidad}</span>
    </p>
  </li>
);

Gasto.prototype = {
  gasto: ProTypes.object.isRequired
};
export default Gasto;
