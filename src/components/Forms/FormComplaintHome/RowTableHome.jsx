import React from "react";
import "./FormHome.css";

function RowTable(props) {
  const selectedButton = (e) => {
    props.setDatosFormu({ ...props.datosFormu, policy: e.target.value });
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
      <td>{props.calle + " " + props.altura + " " + props.piso + " " + props.departamento + " " + props.localidad}</td>
    </tr>
  );
}

export default RowTable;
