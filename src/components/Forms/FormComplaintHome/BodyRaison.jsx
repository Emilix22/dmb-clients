import React, { useState, useEffect } from "react";

function Raison({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (datosFormu.raison === "incendio edificio y/o contenido") {
      setOptions([
        {value:"incendio contenido total", name: "incendio_contenido_total", label: "Incendio contenido total"},
        {value:"incendio contenido parcial", name: "incendio_contenido_parcial", label: "Incendio contenido parcial"},
        {value:"incendio edificio total", name: "incendio_edificio_total", label: "Incendio edificio total"},
        {value:"incendio edificio parcial", name: "incendio_edificio_parcial", label: "Incendio edificio parcial"},
        {value:"granizo", name: "granizo", label: "Granizo"},
        {value:"vientos fuertes", name: "vientos_fuertes", label: "Vientos fuertes"},
        {value:"impacto en vehículos terrestres", name: "impacto_en_vehículos_terrestres", label: "Impacto en vehículos terrestres"},
        {value:"rayo directo", name: "rayo_directo", label: "Rayo directo"},
        {value:"linderos", name: "linderos", label: "Linderos"}
      ]);
    } else if (datosFormu.raison === "cristales") {
      setOptions([
        {value:"rotura accidental", name: "cristales_rotura_accidental", label: "Rotura accidental"},
        {value:"rajadura accidental", name: "cristales_rajadura_accidental", label: "Rajadura accidental"}
      ]);
    } else if (datosFormu.raison === "robo mobiliario") {
      setOptions([
        {value:"daño parcial", name: "mobiliario_daño_parcial", label: "Daño parcial"},
        {value:"robo parcial", name: "mobiliario_robo_parcial", label: "Robo parcial"},
        {value:"robo total", name: "mobiliario_robo_total", label: "Robo total"}
      ]);
    } else if (datosFormu.raison === "objetos diversos") {
      setOptions([
        {value:"daño parcial", name: "objetos_daño_parcial", label: "Daño parcial"},
        {value:"daño total", name: "objetos_daño_total", label: "Daño total"},
        {value:"robo total", name: "objetos_robo_total", label: "Robo total"}
      ]);
    } else if (datosFormu.raison === "pc/notebook en hogar") {
      setOptions([
        {value:"daño parcial", name: "pc/notebook_daño_parcial", label: "Daño parcial"},
        {value:"daño total", name: "pc/notebook_daño_total", label: "Daño total"},
        {value:"robo parcial", name: "pc/notebook_robo_parcial", label: "Robo parcial"},
        {value:"robo total", name: "pc/notebook_robo_total", label: "Robo total"}
      ]);
    } else if (datosFormu.raison === "aparatos electrónicos") {
      setOptions([
        {value:"robo", name: "electrónicos_robo", label: "Robo"},
        {value:"daño parcial (accidente)", name: "electrónicos_daño_parcial_accidente", label: "Daño parcial (accidente)"},
        {value:"daño parcial (alta/baja tensión)", name: "electrónicos_daño_parcial_alta_baja_tensión", label: "Daño parcial (alta/baja tensión)"},
        {value:"daño total (accidente)", name: "electrónicos_daño_total_accidente", label: "Daño total (accidente)"},
        {value:"daño total (alta/baja tensión)", name: "electrónicos_daño_total_alta_baja_tensión", label: "Daño total (alta/baja tensión)"}
      ]);
    } else if (datosFormu.raison === "bicicletas") {
      setOptions([
        {value:"robo (dentro y fuera del domicilio)", name: "bicicletas_robo", label: "Robo (dentro y fuera del domicilio)"},
        {value:"incendio (dentro y fuera del domicilio)", name: "bicicletas_incendio", label: "Incendio (dentro y fuera del domicilio)"}
      ]);
    } else if (datosFormu.raison === "daños por agua") {
      setOptions([
        {value:"daños al mobiliario", name: "por_agua_daños_al_mobiliario", label: "Daños al mobiliario"}
      ]);
    } else if (datosFormu.raison === "responsabilidad civil") {
      setOptions([
        {value:"daños a objetos", name: "daños_a_objetos", label: "Daños a objetos"},
        {value:"lesiones a personas", name: "lesiones_a_personas", label: "Lesiones a personas"},
        {value:"muerte a personas", name: "muerte_a_personas", label: "Muerte a personas"}
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
          <option value="objetos diversos">OBJETOS DIVERSOS</option>
          <option value="pc/notebook en hogar">PC/NOTEBOOK EN HOGAR</option>
          <option value="aparatos electrónicos">APARATOS ELECTRÓNICOS</option>
          <option value="bicicletas">BICICLETAS</option>
          <option value="daños por agua">DAÑOS POR AGUA</option>
          <option value="responsabilidad civil">RESPONSABILIDAD CIVIL</option>
          <option value="otros">OTROS</option>
        </select>
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
    </div>    
  );
}

export default Raison;
