import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../Helper';
import ProTypes from 'prop-types';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </Fragment>
  );
};

ControlPresupuesto.prototype = {
  presupuesto: ProTypes.number.isRequired,
  restante: ProTypes.number.isRequired
};
export default ControlPresupuesto;
