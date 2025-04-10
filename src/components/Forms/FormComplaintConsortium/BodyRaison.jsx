import React, { useState, useEffect } from "react";

function Raison({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (datosFormu.raison === "incendio edificio y/o contenido") {
      setOptions([
        {value:"incendio contenido", name: "incendio_contenido", label: "Incendio contenido"},
        {value:"incendio edificio", name: "incendio_edificio", label: "Incendio edificio"},
      ]);
    } else if (datosFormu.raison === "cristales") {
      setOptions([
        {value:"rotura accidental", name: "cristales_rotura_accidental", label: "Rotura accidental"},
        {value:"rajadura accidental", name: "cristales_rajadura_accidental", label: "Rajadura accidental"}
      ]);
    } else if (datosFormu.raison === "robo mobiliario") {
      setOptions([
        {value:"robo mobiliario", name: "robo_mobiliario", label: "Robo mobiliario"},
      ]);
    } else if (datosFormu.raison === "daños por agua") {
      setOptions([
        {value:"daños al mobiliario", name: "por_agua_daños_al_mobiliario", label: "Daños al mobiliario"}
      ]);
    } else if (datosFormu.raison === "otros") {
      setOptions([
        {value:"otro tipo de bienes", name: "otro_tipo_de_bienes", label: "Otro tipo de bienes"}
      ]);
    } else {
      setOptions([{value:"", name: "", label: ""}]);
    }
  }, [datosFormu.raison]);

  return (
    <div className="form-Raison">
      <div className="form-group-1 form-group-2">
        <label htmlFor="raison">Tipo de Siniestro</label>
        <select
          name="raison"
          id="raison"
          value={datosFormu.raison}
          onChange={(e) => setDatosFormu({ ...datosFormu, raison: e.target.value })}
        >
          <option value="seleccione">Seleccione...</option>
          <option value="incendio edificio y/o contenido">INCENDIO EDIFICIO Y/O CONTENIDO</option>
          <option value="cristales">CRISTALES</option>
          <option value="robo mobiliario">ROBO MOBILIARIO</option>
          <option value="daños por agua">DAÑOS POR AGUA</option>
          <option value="otros">OTROS</option>
        </select>
        {errors.raison && datosFormu.raison === "" ? <span className="msg-error">{errors.raison}</span> : ""}
      </div>
      {
        datosFormu.raison != 'seleccione' ? 
        <div className="form-group-1 form-group-2">
          <div className="checkbox-group">
           <label htmlFor="consequence">Motivo</label>
          { 
            options.map((option, index) => {
              return <div className="checkbox-options" key={option.name + index}>
                      <input
                       type="checkbox" 
                       name={option.name} 
                       value={option.value}
                       onChange={ (e) => setDatosFormu({...datosFormu, consequence: {...datosFormu.consequence, [option.name]: e.target.checked}}) } 
                       />
                      <label htmlFor={option.name}>{option.label}</label>
                    </div> 
            })
          } 
          </div>  
        </div> : ""
      }

      {
        datosFormu.consequence.robo_mobiliario
        ? <div className="form-group-1 form-group-2" id="form-group-img-complaint">
        <label htmlFor="img-complaint"><span>📄</span> Denuncia Policial del robo de <strong>mobiliario:</strong></label>          
        <input 
        type="file" 
        name="img-complaint" 
        onChange={(e) => setDatosFormu({ ...datosFormu, police_complaint_mobiliario: e.target.files[0]})}
        /> 
      </div> 
      : null
      }
    </div>    
  );
}

export default Raison;
