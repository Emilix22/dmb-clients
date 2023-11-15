import React, { useEffect, useState } from "react";


function Location({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {
  const validations = {
    
    street: () => {
      if (expressions.street.test(datosFormu.street)) {
        setErrors({ ...errors, street: "" });
      } else {
        setErrors({ ...errors, street: "Requerido - sólo números y letras - Mínimo 3 cracteres" });
      }
    },
    door: () => {
      if (expressions.door.test(datosFormu.door)) {
        setErrors({ ...errors, door: "" });
      } else {
        setErrors({ ...errors, door: "Requerido - sólo números" });
      }
    },
    postalCode: () => {
      if (expressions.postalCode.test(datosFormu.postalCode)) {
        setErrors({ ...errors, postalCode: "" });
      } else {
        setErrors({ ...errors, postalCode: "Requerido - sólo números y letras" });
      }
    },
    description: () => {
      if (expressions.description.test(datosFormu.description)) {
        setErrors({ ...errors, description: "" });
      } else {
        setErrors({ ...errors, description: "Requerido - entre 20 y 255 caracteres" });
      }
    }
  };

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // const [streets, setStreets] = useState([])
  // const [totalStreet, setTotalStreets] = useState(10)

  /**************************************PROVINCIAS */
  useEffect(() => {
    const loadStates = async () => {
      const response = await fetch(
        "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
      );
      const info = await response.json();
      setStates(info.provincias);
    };
    loadStates();
  }, [datosFormu.state.name]);

  /*************************************MUNICIPIOS */

  useEffect(() => {
    const loadCities = async () => {
      const response = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${Number(datosFormu.state.id)}&campos=id,nombre&max=1000`
      );
     
      const info = await response.json();
      setCities(info.localidades);
    };
    loadCities();
  }, [datosFormu.state]); // hacer lo del máximo **!!!!**************************************************

  // useEffect(() => {
  //     const loadCities = async () => {
  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades-censales?provincia=${datosFormu.state.name}&aplanar=true&campos=estandar&max=1000&exacto=true`)
  //         const info = await response.json()
  //         setCities(info.localidades_censales)
  //     }
  //     loadCities()
  // }, [datosFormu.state]); // localidades-censales para el maximo hacer lo mismo que con calles

  // useEffect(() => {
  //     const loadTotalStreets = async () => {

  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/calles?provincia=${datosFormu.state.name}&localidad_censal=${datosFormu.city}&aplanar=true&campos=estandar&exacto=true&formato=json`)
  //         const info = await response.json()
  //         setTotalStreets(info.total)
  //     }
  //     loadTotalStreets()
  // }, [datosFormu.city, datosFormu.state]);

  // useEffect(() => {
  //     const loadStreets = async () => {
  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/calles?provincia=${datosFormu.state.name}&localidad_censal=${datosFormu.city}&aplanar=true&campos=estandar&max=${totalStreet}&exacto=true&formato=json`)
  //         const info = await response.json()
  //         setStreets(info.calles)
  //     }
  //     loadStreets()
  // }, [datosFormu.state, datosFormu.city, totalStreet]);

  return (
    <div className="form-Location">
      <div className="info-location">
        <div className="form-group-1 form-group-2">
          <label htmlFor="state">Provincia</label>
          <select
            name="state"
            id="state"
            value={datosFormu.state[1]}
            onChange={(e) => 
              setDatosFormu({
                  ...datosFormu,
                  state: {
                    id: e.target.value.slice(0, 2),
                    name: e.target.value.slice(3),
                  },
              })  
            }                   
          >
            <option value="">Seleccione una Provincia...</option>
            <option value={["06", "Buenos Aires"]}>Buenos Aires</option>
            <option value={["02", "Ciudad Autónoma de Buenos Aires"]}>Ciudad Autónoma de Buenos Aires</option>
            {states
              ? states.map((state, index) => {
                  return (
                    <option value={[state.id, state.nombre]} key={state + index}>
                      {state.nombre}
                    </option>
                  );
                })
              : ""}
          </select>
          {
            errors.state ? <span className='msg-error'>{errors.state}</span> : ""
          }
        </div>

        <div className="form-group-1 form-group-2">
          <label htmlFor="city">Localidad</label>
          <select
            name="city"
            id="city"
            value={datosFormu.city}
            onChange={(e) => setDatosFormu({ ...datosFormu, city: e.target.value })}
          >
            {datosFormu.state.id === "02" ? (
              <option value="CABA">CABA</option>
            ) : (
              ""
            )}
            {
              datosFormu.state.name ? <option value="">Seleccione una Localidad...</option> : <option value=""></option>
            }
            
            {cities && datosFormu.state.id != "02"
              ? cities.map((city, index) => {
                  return <option value={city.nombre} key={city + index}>{city.nombre}</option>;
                })
              : ""}
          </select>
          {
            errors.city ? <span className='msg-error'>{errors.city}</span> : ""
          }
        </div>

        {/* <div className='form-group'>
                    <label htmlFor='street'>Calle</label>
                    <select
                     name="street" 
                     id="street" 
                     value={datosFormu.street} 
                     onChange={(e) => setDatosFormu({...datosFormu, street: e.target.value})}
                     >
                        <option value=""></option>
                        {
                            streets ?
                            streets.map((street) => {
                                return <option value={street.nombre}>{street.nombre}</option>
                            }) : ""
                        }
                    </select>
                    {
                        errors.city ? <span className='msg-error'>{errors.city}</span> : ""
                    }
                </div> */}

        <div className="form-group-1 form-group-2">
          <label htmlFor="street">Calle</label>
          <input
            type="text"
            name="street"
            id="street"
            value={datosFormu.street}
            onChange={(e) => setDatosFormu({ ...datosFormu, street: e.target.value })}
            onKeyUp={validations.street}
            onBlur={validations.street}
          />
          {errors.street ? <span className="msg-error">{errors.street}</span> : ""}
        </div>
        
        <div className="form-group-1 form-group-4" id="form-group-door">
          <label htmlFor="door">Altura</label>
          <input
            type="text"
            name="door"
            id="door"
            value={datosFormu.door}
            onChange={(e) => setDatosFormu({ ...datosFormu, door: e.target.value })}
            onKeyUp={validations.door}
            onBlur={validations.door}
          />
          {errors.door ? <span className="msg-error">{errors.door}</span> : ""}
        </div>

        {/* <div className="form-group-1 form-group-4" id="form-group-postalCode">
          <label htmlFor="postalCode">Código Postal</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={datosFormu.postalCode}
            onChange={(e) =>
              setDatosFormu({ ...datosFormu, postalCode: e.target.value })
            }
            onKeyUp={validations.postalCode}
            onBlur={validations.postalCode}
          />
          {
                        errors.postalCode ? <span className='msg-error'>{errors.postalCode}</span> : ""
                    }
        </div> */}
        <div className="form-group-1 form-group-2" id="form-group-description">
          <label htmlFor="description">Contános cómo fue el siniestro lo más detallado posible</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Ej: circulaba por la calle rivera y al llegar a la esquina me chocó un auto por el costado izquierdo"
            value={datosFormu.description}
            onChange={(e) => setDatosFormu({ ...datosFormu, description: e.target.value })}
            onKeyUp={validations.description}
            onBlur={validations.description}
          />
          {errors.description ? <span className="msg-error">{errors.description}</span> : ""}
        </div>
        <div className="form-group-1 form-group-2" id="form-group-characteristics">
          <label htmlFor="characteristics">Características del Lugar</label>
          <select
            name="characteristics"
            id="characteristics"
            value={datosFormu.characteristics}
            onChange={(e) => setDatosFormu({ ...datosFormu, characteristics: e.target.value })}
          > 
            <option value="">Seleccione...</option>
            <option value="Autopista">AUTOPISTA</option>
            <option value="Avenida">AVENIDA</option>
            <option value="Bocacalle">BOCACALLE</option>
            <option value="Calle">CALLE</option>
            <option value="Ruta">RUTA</option>
          </select>
          {errors.characteristics ? <span className="msg-error">{errors.characteristics}</span> : ""}
        </div>
        {/* <div className="form-group-1 form-group-2" id="form-group-img-license-front">
          <label htmlFor="img-license-front"><span>📷</span> Foto del Registro de Conducir <strong>FRENTE</strong>:</label>          
          <input 
          type="file" 
          name="img-license-front" 
          // value={datosFormu.license_front}
          onChange={(e) => setDatosFormu({ ...datosFormu, license_front: e.target.files[0]})}
          /> 
        </div>
        <div className="form-group-1 form-group-2" id="form-group-img-license-back">
          <label htmlFor="img-license-back"><span>📷</span> Foto del Registro de Conducir <strong>DORSO</strong>:</label>          
          <input 
          type="file" 
          name="img-license-back" 
          // value={datosFormu.license}
          onChange={(e) => setDatosFormu({ ...datosFormu, license_back: e.target.files[0]})}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Location;
