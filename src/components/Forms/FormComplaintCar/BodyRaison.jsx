import React, { useState, useEffect } from "react";

function Raison({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (datosFormu.raison === "accidente") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"accidente con vehículos de 4 o más ruedas", text: "ACCIDENTE CON VEHÍCULOS DE 4 O MÁS RUEDAS"},
        {value:"accidente con motos", text: "ACCIDENTE CON MOTOS"},
        {value:"accidente con bicicletas", text: "ACCIDENTE CON BICICLETAS"},
        {value:"accidente con cosas (no vehículos)", text: "ACCIDENTE CON COSAS (NO VEHÍCULOS)"},
        {value:"accidente con peatones", text: "ACCIDENTE CON PEATONES"},
        {value:"vuelco", text: "VUELCO"},
      ]);
    } else if (datosFormu.raison === "cristales y cerraduras") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"daños a cristales y cerraduras", text: "DAÑOS A CRISTALES Y/O CERRADURAS"},
      ]);
    } else if (datosFormu.raison === "granizo") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"daño por granizo", text: "DAÑO POR GRANIZO"},
      ]);
    } else if (datosFormu.raison === "robo") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"robo de ruedas", text: "ROBO DE RUEDAS"},
        {value:"robo total del vehículo", text: "ROBO TOTAL DEL VEHÍCULO"},
        {value:"robo parcial", text: "ROBO PARCIAL"},
      ]);
    } else {
      setOptions([{value:"", text: "Seleccione un Motivo primero..."}]);
    }
  }, [datosFormu.raison]);

  return (
    <div className="form-Raison">
      <div className="form-group-1 form-group-2">
        <label htmlFor="raison">Motivo</label>
        <select
          name="raison"
          id="raison"
          value={datosFormu.raison}
          onChange={(e) => setDatosFormu({ ...datosFormu, raison: e.target.value })}
        >
          <option value="seleccione">Seleccione...</option>
          <option value="accidente">ACCIDENTE</option>
          <option value="cristales y cerraduras">CRISTALES Y CERRADURAS</option>
          <option value="granizo">GRANIZO</option>
          <option value="robo">ROBO</option>
        </select>
      </div>
      <div className="form-group-1 form-group-2">
        <label htmlFor="consequence">Consecuencia</label>
        <select
          name="consequence"
          id="consequence"
          value={datosFormu.consequence}
          onChange={(e) =>
            setDatosFormu({ ...datosFormu, consequence: e.target.value })
          }
        >
          { 
            options.map((option, index) => {
              return <option value={option.value} key={option + index}>{option.text}</option>
            })
          }
        </select>
      </div>
      {
        datosFormu.raison === "robo" 
        ? <div className="form-group-1 form-group-2" id="form-group-img-complaint">
        <label htmlFor="img-complaint"><span>📄</span> Denuncia Policial:</label>          
        <input 
        type="file" 
        name="img-complaint" 
        onChange={(e) => setDatosFormu({ ...datosFormu, police_complaint: e.target.files[0]})}
        /> 
      </div> 
      : null
      }    
      


    </div>
  );
}

export default Raison;
