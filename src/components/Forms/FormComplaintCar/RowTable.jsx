import React from "react";
import "./Form.css";

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
      <td>{props.marca_auto}</td>
      <td>{props.modelo_auto}</td>
      <td>{props.patente_auto}</td>
    </tr>
  );
}

export default RowTable;
