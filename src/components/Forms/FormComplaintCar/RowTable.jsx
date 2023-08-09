import React from "react";
import "./Form.css";

function RowTable(props) {
  const selectedButton = (e) => {
    props.setFormData({ ...props.formData, policy: e.target.value });
  };

  return (
    <tr className="rowTable">
      <td>
        <input
          className="btn-radio"
          type="radio"
          name="selectPolicy"
          id="selectPolicy"
          value={props.numero_poliza}
          onChange={selectedButton}
        />
      </td>
      <td>{props.numero_poliza}</td>
      <td>{props.tipo_poliza}</td>
    </tr>
  );
}

export default RowTable;
