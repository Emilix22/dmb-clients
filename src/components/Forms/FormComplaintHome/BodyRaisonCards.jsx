import React, { useState, useEffect } from "react";
import FireplaceIcon from '@mui/icons-material/Fireplace';

function Raison({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {

  const muestraCheck = (id) => {
    let CheckBoxes;
    id === "INCENDIO EDIFICIO Y/O CONTENIDO" 
    ? CheckBoxes = document.querySelector(".checkbox-group1") 
    : id === "CRISTALES" 
    ? CheckBoxes = document.querySelector(".checkbox-group2") : null

    CheckBoxes.classList.toggle("mostrar");
    console.log(id)
  };

  
  
  //   } else if (datosFormu.raison === "cristales") {
  //     setOptions([
  //       {value:"rotura accidental", name: "rotura accidental", label: "Rotura accidental"},
  //       {value:"rajadura accidental", name: "rajadura accidental", label: "Rajadura accidental"}
  //     ]);
  //   } else if (datosFormu.raison === "robo mobiliario") {
  //     setOptions([
  //       {value:"daño parcial", name: "daño parcial", label: "Daño parcial"},
  //       {value:"robo parcial", name: "robo parcial", label: "Robo parcial"},
  //       {value:"robo total", name: "robo total", label: "Robo total"}
  //     ]);
  //   } else if (datosFormu.raison === "objetos diversos") {
  //     setOptions([
  //       {value:"daño parcial", name: "daño parcial", label: "Daño parcial"},
  //       {value:"daño total", name: "daño total", label: "Daño total"},
  //       {value:"robo total", name: "robo total", label: "Robo total"}
  //     ]);
  //   } else if (datosFormu.raison === "pc/notebook en hogar") {
  //     setOptions([
  //       {value:"daño parcial", name: "daño parcial", label: "Daño parcial"},
  //       {value:"daño total", name: "daño total", label: "Daño total"},
  //       {value:"robo parcial", name: "robo parcial", label: "Robo parcial"},
  //       {value:"robo total", name: "robo total", label: "Robo total"}
  //     ]);
  //   } else if (datosFormu.raison === "aparatos electrónicos") {
  //     setOptions([
  //       {value:"robo", name: "robo", label: "Robo"},
  //       {value:"daño parcial (accidente)", name: "daño parcial (accidente)", label: "Daño parcial (accidente)"},
  //       {value:"daño parcial (alta/baja tensión)", name: "daño parcial (alta/baja tensión)", label: "Daño parcial (alta/baja tensión)"},
  //       {value:"daño total (accidente)", name: "daño total (accidente)", label: "Daño total (accidente)"},
  //       {value:"daño total (alta/baja tensión)", name: "daño total (alta/baja tensión)", label: "Daño total (alta/baja tensión)"}
  //     ]);
  //   } else if (datosFormu.raison === "bicicletas") {
  //     setOptions([
  //       {value:"robo (dentro y fuera del domicilio)", name: "robo (dentro y fuera del domicilio)", label: "Robo (dentro y fuera del domicilio)"},
  //       {value:"incendio (dentro y fuera del domicilio)", name: "incendio (dentro y fuera del domicilio)", label: "Incendio (dentro y fuera del domicilio)"}
  //     ]);
  //   } else if (datosFormu.raison === "daños por agua") {
  //     setOptions([
  //       {value:"daños al mobiliario", name: "daños al mobiliario", label: "Daños al mobiliario"}
  //     ]);
  //   } else if (datosFormu.raison === "responsabilidad civil") {
  //     setOptions([
  //       {value:"daños a objetos", name: "daños a objetos", label: "Daños a objetos"},
  //       {value:"lesiones a personas", name: "lesiones a personas", label: "Lesiones a personas"},
  //       {value:"muerte a personas", name: "muerte a personas", label: "Muerte a personas"}
  //     ]);
  //   } else if (datosFormu.raison === "otros") {
  //     setOptions([
  //       {value:"otro tipo de bienes", name: "otro tipo de bienes", label: "Otro tipo de bienes"}
  //     ]);
  //   } else {
  //     setOptions([{value:"", name: "", label: ""}]);
  //   }
  // }, [datosFormu.raison]);

  return (
    <div className="form-Raison">
      <div className="form-group-1">
        <label htmlFor="raison">Tipo de Siniestro</label>
        <section className="articles">
          <div className="article-group">
            <article className="raison-home" onClick={(event) => muestraCheck(event.nativeEvent.target.innerHTML)}>
              <span>INCENDIO EDIFICIO Y/O CONTENIDO</span>
              <FireplaceIcon />
            </article>
            <div className="checkbox-group1" >
              <div className="check">
                <input type="checkbox" value={"incendio contenido total"} name="incendio contenido total" />
                <label htmlFor="incendio contenido total">Incendio contenido total</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"incendio contenido parcial"} name="incendio contenido parcial" />
                <label htmlFor="incendio contenido parcial">Incendio contenido parcial</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"incendio edificio total"} name="incendio edificio total" />
                <label htmlFor="incendio edificio total">Incendio edificio total</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"incendio edificio parcial"} name="incendio edificio parcial" />
                <label htmlFor="incendio edificio parcial">Incendio edificio parcial</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"granizo"} name="granizo" />
                <label htmlFor="granizo">Granizo</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"vientos fuertes"} name="vientos fuertes" />
                <label htmlFor="vientos fuertes">Vientos fuertes</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"impacto en vehículos terrestres"} name="impacto en vehículos terrestres" />
                <label htmlFor="impacto en vehículos terrestres">Impacto en vehículos terrestres</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"rayo directo"} name="rayo directo" />
                <label htmlFor="rayo directo">Rayo directo</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"linderos"} name="linderos" />
                <label htmlFor="linderos">Linderos</label>
              </div>
            </div>  
          </div>
          
          <div className="article-group">
            <article className="raison-home" onClick={(event) => muestraCheck(event.nativeEvent.target.innerHTML)}>
              <span>CRISTALES</span>
              <FireplaceIcon />
            </article>
            <div className="checkbox-group2" >
              <div className="check">
                <input type="checkbox" value={"incendio contenido total"} name="incendio contenido total" />
                <label htmlFor="incendio contenido total">Incendio contenido total</label>
              </div>
              <div className="check">
                <input type="checkbox" value={"incendio contenido parcial"} name="incendio contenido parcial" />
                <label htmlFor="incendio contenido parcial">Incendio contenido parcial</label>
              </div>
              
            </div>  
          </div>

          <article className="raison-home">
            ROBO MOBILIARIO
          </article>
          <article className="raison-home">
            OBJETOS DIVERSOS
          </article>
          <article className="raison-home">
            PC/NOTEBOOK EN HOGAR
          </article>
          <article className="raison-home">
            APARATOS ELECTRÓNICOS
          </article>
          <article className="raison-home">
            BICICLETAS
          </article>
          <article className="raison-home">
            DAÑOS POR AGUA
          </article>
          <article className="raison-home">
            RESPONSABILIDAD CIVIL
          </article>
          <article className="raison-home">
            OTROS
          </article>
        </section>
        
      </div>
      
    </div>
  );
}

export default Raison;
