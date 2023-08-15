import React, { useState, useEffect } from "react";

function Raison({ formData, setFormData, errors, setErrors, expressions }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (formData.raison === "colisión") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"colisión con cosas (no vehículos)", text: "COLISIÓN CON COSAS (NO VEHÍCULOS)"},
        {value:"siniestro con bicicletas", text: "SINIESTRO CON BICICLETAS"},
        {value:"siniestro con motos", text: "SINIESTRO CON MOTOS"},
        {value:"siniestro con peatones", text: "SINIESTRO CON PEATONES"},
        {value:"siniestro con vehículos de 4 o más ruedas", text: "SINIESTRO CON VEHÍCULOS DE 4 O MÁS RUEDAS"},
        {value:"vuelco", text: "VUELCO"},
      ]);
    } else if (formData.raison === "cristales y cerraduras") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"daños a cristales y cerraduras", text: "DAÑOS A CRISTALES Y/O CERRADURAS"},
      ]);
    } else if (formData.raison === "granizo") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"daño por granizo a parabrisas, luneta y/o cristales laterales", text: "DAÑO POR GRANIZO A PARABRISAS, LUNETA Y/O CRISTALES LATERALES"},
      ]);
    } else if (formData.raison === "robo") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"robo del vehículo", text: "ROBO DEL VEHÍCULO"},
        {value:"robo del vehículo a mano armada", text: "ROBO DEL VEHÍCULO A MANO ARMADA"},
        {value:"robo parcial - robo rueda - cristales y/o cerradura", text: "ROBO PARCIAL - ROBO RUEDA - CRISTALES Y/O CERRADURAS"},
      ]);
    } else if (formData.raison === "destrucción total") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"destrucción total", text: "DESTRUCCIÓN TOTAL"},
      ]);
    } else {
      setOptions([{value:"", text: "Seleccione un Motivo primero..."}]);
    }
  }, [formData.raison]);

  return (
    <div className="form-Raison">
      <div className="form-group-1 form-group-2">
        <label htmlFor="raison">Motivo</label>
        <select
          name="raison"
          id="raison"
          value={formData.raison}
          onChange={(e) => setFormData({ ...formData, raison: e.target.value })}
        >
          <option value="seleccione">Seleccione...</option>
          <option value="colisión">COLISIÓN</option>
          <option value="cristales y cerraduras">CRISTALES Y CERRADURAS</option>
          <option value="granizo">GRANIZO</option>
          <option value="robo">ROBO</option>
          <option value="destrucción total">DESTRUCCIÓN TOTAL</option>
        </select>
      </div>
      <div className="form-group-1 form-group-2">
        <label htmlFor="consequence">Consecuencia</label>
        <select
          name="consequence"
          id="consequence"
          value={formData.consequence}
          onChange={(e) =>
            setFormData({ ...formData, consequence: e.target.value })
          }
        >
          { 
            options.map((option, index) => {
              return <option value={option.value} key={option + index}>{option.text}</option>
            })
          }
        </select>
      </div>
    </div>
  );
}

export default Raison;
