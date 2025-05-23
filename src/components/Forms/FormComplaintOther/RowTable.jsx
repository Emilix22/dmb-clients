import React from "react";
import "../FormComplaintHome/FormHome.css";

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
      <td>{props.compania}</td>
      <td>{props.tipo}</td>
    </tr>
  );
}

export default RowTable;
