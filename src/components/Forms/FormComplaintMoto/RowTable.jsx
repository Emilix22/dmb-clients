import React from "react";
import "../FormComplaintCar/Form.css";

function RowTable(props) {
  const selectedButton = (e) => {
    props.setDatosFormu({ ...props.datosFormu, policy: e.target.value, policyNumber: props.numero_poliza });
  };

  return (
    <tr className="rowTable">
      <td>
        <input
          className="btn-radio"
          type="radio"
          name="selectPolicy"
          id="selectPolicy"
          value={props.id_poliza}
          onChange={selectedButton}
        />
      </td>
      <td>{props.numero_poliza}</td>
      <td>{props.marca_moto}</td>
      <td>{props.modelo_moto}</td>
      <td>{props.patente_moto}</td>
    </tr>
  );
}

export default RowTable;
