import React, { useEffect, useState } from "react";


function Location({ formData, setFormData, errors, setErrors, expressions }) {
  const validations = {
    street: () => {
      if (expressions.street.test(formData.street)) {
        setErrors({ ...errors, street: "" });
      } else {
        setErrors({ ...errors, street: "Requerido - sólo números y letras" });
      }
    },
    door: () => {
      if (expressions.door.test(formData.door)) {
        setErrors({ ...errors, door: "" });
      } else {
        setErrors({ ...errors, door: "Requerido - sólo números" });
      }
    },
    postalCode: () => {
      if (expressions.postalCode.test(formData.postalCode)) {
        setErrors({ ...errors, postalCode: "" });
      } else {
        setErrors({ ...errors, postalCode: "Requerido - sólo números y letras" });
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
  }, [formData.state.name]);

  /*************************************MUNICIPIOS */

  useEffect(() => {
    const loadCities = async () => {
      const response = await fetch(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${Number(
          formData.state.id
        )}&campos=id,nombre&max=1000`
      );
      const info = await response.json();
      setCities(info.municipios);
    };
    loadCities();
  }, [formData.state]); // hacer lo del máximo **!!!!**************************************************

  // useEffect(() => {
  //     const loadCities = async () => {
  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades-censales?provincia=${formData.state.name}&aplanar=true&campos=estandar&max=1000&exacto=true`)
  //         const info = await response.json()
  //         setCities(info.localidades_censales)
  //     }
  //     loadCities()
  // }, [formData.state]); // localidades-censales para el maximo hacer lo mismo que con calles

  // useEffect(() => {
  //     const loadTotalStreets = async () => {

  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/calles?provincia=${formData.state.name}&localidad_censal=${formData.city}&aplanar=true&campos=estandar&exacto=true&formato=json`)
  //         const info = await response.json()
  //         setTotalStreets(info.total)
  //     }
  //     loadTotalStreets()
  // }, [formData.city, formData.state]);

  // useEffect(() => {
  //     const loadStreets = async () => {
  //         const response = await fetch(`https://apis.datos.gob.ar/georef/api/calles?provincia=${formData.state.name}&localidad_censal=${formData.city}&aplanar=true&campos=estandar&max=${totalStreet}&exacto=true&formato=json`)
  //         const info = await response.json()
  //         setStreets(info.calles)
  //     }
  //     loadStreets()
  // }, [formData.state, formData.city, totalStreet]);

  return (
    <div className="form-Location">
      <div className="info-location">
        <div className="form-group-1 form-group-2">
          <label htmlFor="state">Provincia</label>
          <select
            name="state"
            id="state"
            value={formData.state[1]}
            onChange={(e) =>
              setFormData({
                ...formData,
                state: {
                  id: e.target.value.slice(0, 2),
                  name: e.target.value.slice(3),
                },
              })
            }
          >
            <option value="">Seleccione una Provincia...</option>
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
          {/* {
            errors.state ? <span className='msg-error'>{errors.state}</span> : ""
          } */}
        </div>

        <div className="form-group-1 form-group-2">
          <label htmlFor="city">Localidad</label>
          <select
            name="city"
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            {formData.state.id === "02" ? (
              <option value="CABA">CABA</option>
            ) : (
              ""
            )}
            {
              formData.state.name ? <option value="">Seleccione una Localidad...</option> : <option value=""></option>
            }
            
            {cities
              ? cities.map((city, index) => {
                  return <option value={city.nombre} key={city + index}>{city.nombre}</option>;
                })
              : ""}
          </select>
          {/* {
                        errors.city ? <span className='msg-error'>{errors.city}</span> : ""
                    } */}
        </div>

        {/* <div className='form-group'>
                    <label htmlFor='street'>Calle</label>
                    <select
                     name="street" 
                     id="street" 
                     value={formData.street} 
                     onChange={(e) => setFormData({...formData, street: e.target.value})}
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
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
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
            value={formData.door}
            onChange={(e) => setFormData({ ...formData, door: e.target.value })}
            onKeyUp={validations.door}
            onBlur={validations.door}
          />
          {errors.door ? <span className="msg-error">{errors.door}</span> : ""}
        </div>

        <div className="form-group-1 form-group-4" id="form-group-postalCode">
          <label htmlFor="postalCode">Código Postal</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
            onKeyUp={validations.postalCode}
            onBlur={validations.postalCode}
          />
          {
                        errors.postalCode ? <span className='msg-error'>{errors.postalCode}</span> : ""
                    }
        </div>
        <div className="form-group-1 form-group-2" id="form-group-description">
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
            value={formData.characteristics}
            onChange={(e) => setFormData({ ...formData, characteristics: e.target.value })}
          > 
            <option value=""></option>
            <option value="Autopista">AUTOPISTA</option>
            <option value="Avenida">AVENIDA</option>
            <option value="Bocacalle">BOCACALLE</option>
            <option value="Calle">CALLE</option>
            <option value="En curva">EN CURVA</option>
            <option value="En pendiente">EN PENDIENTE</option>
            <option value="En túnel">EN TÚNEL</option>
            <option value="Ruta">RUTA</option>
            <option value="Sobre puente">SOBRE PUENTE</option>
            <option value="Otra">OTRO</option>
          </select>
          {errors.characteristics ? <span className="msg-error">{errors.characteristics}</span> : ""}
        </div>
      </div>
    </div>
  );
}

export default Location;
