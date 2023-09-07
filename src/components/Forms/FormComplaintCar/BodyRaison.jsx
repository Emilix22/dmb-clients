import React, { useState, useEffect } from "react";

function Raison({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (datosFormu.raison === "colisión") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"colisión con cosas (no vehículos)", text: "COLISIÓN CON COSAS (NO VEHÍCULOS)"},
        {value:"siniestro con bicicletas", text: "SINIESTRO CON BICICLETAS"},
        {value:"siniestro con motos", text: "SINIESTRO CON MOTOS"},
        {value:"siniestro con peatones", text: "SINIESTRO CON PEATONES"},
        {value:"siniestro con vehículos de 4 o más ruedas", text: "SINIESTRO CON VEHÍCULOS DE 4 O MÁS RUEDAS"},
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
        {value:"daño por granizo a parabrisas, luneta y/o cristales laterales", text: "DAÑO POR GRANIZO A PARABRISAS, LUNETA Y/O CRISTALES LATERALES"},
      ]);
    } else if (datosFormu.raison === "robo") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"robo del vehículo", text: "ROBO DEL VEHÍCULO"},
        {value:"robo del vehículo a mano armada", text: "ROBO DEL VEHÍCULO A MANO ARMADA"},
        {value:"robo parcial - robo rueda - cristales y/o cerradura", text: "ROBO PARCIAL - ROBO RUEDA - CRISTALES Y/O CERRADURAS"},
      ]);
    } else if (datosFormu.raison === "destrucción total") {
      setOptions([
        {value:"", text: "Seleccione una Consecuencia"},
        {value:"destrucción total", text: "DESTRUCCIÓN TOTAL"},
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
