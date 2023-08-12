import React, {useState, useEffect} from 'react'

function FormQuestion2({formData, setFormData, errors, setErrors, expressions}) {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const loadStates = async () => {
          const response = await fetch(
            "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
          );
          const info = await response.json();
          setStates(info.provincias);
        };
        loadStates();
    }, [formData.driver_not_client.dnc_state.name]);

    
    useEffect(() => {
        const loadCities = async () => {
          const response = await fetch(
            `https://apis.datos.gob.ar/georef/api/municipios?provincia=${Number(
                formData.driver_not_client.dnc_state.id
            )}&campos=id,nombre&max=1000`
          );
          const info = await response.json();
          setCities(info.municipios);
        };
        loadCities();
    }, [formData.driver_not_client.dnc_state]); // hacer lo del máximo **!!!!**************************************************

    return (
        <div className='formQuestions2'>

            <h4>Datos del Lesionado Dentro del Vehículo </h4>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_name">Nombre</label>
                <input
                    type="text"
                    name="iic_name"
                    id="iic_name"
                    value={formData.injured_in_car.iic_name}
                    onChange={(e) => setFormData({ ...formData, injured_in_car : {
                        ...formData.injured_in_car,
                        iic_name: e.target.value
                        } })}
                    // onKeyUp={validations.iic_name}
                    // onBlur={validations.iic_name}
                />
                {errors.iic_name ? <span className="msg-error">{errors.iic_name}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_surname">Apellido</label>
                <input
                    type="text"
                    name="iic_surname"
                    id="iic_surname"
                    value={formData.injured_in_car.iic_surname}
                    onChange={(e) => setFormData({ ...formData, injured_in_car : {
                        ...formData.injured_in_car,
                        iic_surname: e.target.value
                        } })}
                    // onKeyUp={validations.iic_surname}
                    // onBlur={validations.iic_surname}
                />
                {errors.iic_surname ? <span className="msg-error">{errors.iic_surname}</span> : ""}
            </div>
        {/*
        <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_DNI">DNI</label>
                <input
                    type="text"
                    name="dnc_DNI"
                    id="dnc_DNI"
                    value={formData.driver_not_client.dnc_DNI}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_DNI: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_DNI}
                    // onBlur={validations.dnc_DNI}
                />
                {errors.dnc_DNI ? <span className="msg-error">{errors.dnc_DNI}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_phone">Teléfono</label>
                <input
                    type="text"
                    name="dnc_phone"
                    id="dnc_phone"
                    value={formData.driver_not_client.dnc_phone}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_phone: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_phone}
                    // onBlur={validations.dnc_phone}
                />
                {errors.dnc_phone ? <span className="msg-error">{errors.dnc_phone}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_birthday">Fecha de Nacimiento</label>
                <input
                    type="date"
                    name="dnc_birthday"
                    id="dnc_birthday"
                    value={formData.driver_not_client.dnc_birthday}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_birthday: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_birthday}
                    // onBlur={validations.dnc_birthday}
                />
                {errors.dnc_birthday ? <span className="msg-error">{errors.dnc_birthday}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_nacionality">Nacionalidad</label>
                <input
                    type="text"
                    name="dnc_nacionality"
                    id="dnc_nacionality"
                    value={formData.driver_not_client.dnc_nacionality}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_nacionality: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_nacionality}
                    // onBlur={validations.dnc_nacionality}
                />
                {errors.dnc_nacionality ? <span className="msg-error">{errors.dnc_nacionality}</span> : ""}
            </div>
            
            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_state">Provincia</label>
                <select
                    name="dnc_state"
                    id="dnc_state"
                    value={formData.driver_not_client.dnc_state[1]}
                    onChange={(e) =>
                    setFormData({
                        ...formData, driver_not_client : {
                            ...formData.driver_not_client,
                            dnc_state: {
                                id: e.target.value.slice(0, 2),
                                name: e.target.value.slice(3),
                            },
                        }
                        
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
                {
                    errors.state ? <span className='msg-error'>{errors.state}</span> : ""
                }
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="city">Localidad</label>
                <select
                    name="city"
                    id="city"
                    value={formData.driver_not_client.dnc_city}
                    onChange={(e) => setFormData({
                        ...formData, driver_not_client : {
                            ...formData.driver_not_client,
                            dnc_city: e.target.value
                            }
                    })}
                >
                    {formData.driver_not_client.dnc_state.id === "02" ? (
                    <option value="CABA">CABA</option>
                    ) : (
                    ""
                    )}
                    {
                    formData.driver_not_client.dnc_state.name ? <option value="">Seleccione una Localidad...</option> : <option value=""></option>
                    }
                    
                    {cities
                    ? cities.map((city, index) => {
                        return <option value={city.nombre} key={city + index}>{city.nombre}</option>;
                        })
                    : ""}
                </select>           
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_street">Calle</label>
                <input
                    type="text"
                    name="dnc_street"
                    id="dnc_street"
                    value={formData.driver_not_client.dnc_street}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_street: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_street}
                    // onBlur={validations.dnc_street}
                />
                {errors.dnc_street ? <span className="msg-error">{errors.dnc_street}</span> : ""}
            </div>

            <div className="form-group-1 form-group-4">
                <label htmlFor="dnc_door">N°</label>
                <input
                    type="text"
                    name="dnc_door"
                    id="dnc_door"
                    value={formData.driver_not_client.dnc_door}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_door: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_door}
                    // onBlur={validations.dnc_door}
                />
                {errors.dnc_door ? <span className="msg-error">{errors.dnc_door}</span> : ""}
            </div>

            <div className="form-group-1 form-group-4">
                <label htmlFor="dnc_postalCode">Código Postal</label>
                <input
                    type="text"
                    name="dnc_postalCode"
                    id="dnc_postalCode"
                    value={formData.driver_not_client.dnc_postalCode}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_postalCode: e.target.value
                        } })}
                    // onKeyUp={validations.dnc_postalCode}
                    // onBlur={validations.dnc_postalCode}
                />
                {errors.dnc_postalCode ? <span className="msg-error">{errors.dnc_postalCode}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_relationship">Relación con el Asegurado</label>
                <select
                    name="dnc_relationshipn"
                    id="dnc_relationship"
                    value={formData.driver_not_client.dnc_relationship}
                    onChange={(e) => setFormData({ ...formData, driver_not_client : {
                        ...formData.driver_not_client,
                        dnc_relationship: e.target.value
                        } })}
                > 
                    <option value=""></option>
                    <option value="Hijo">HIJO</option>
                    <option value="Conyugue">CONYUGUE</option>
                    <option value="Amigo">AMIGO</option>
                </select>
                {errors.dnc_relationship ? <span className="msg-error">{errors.dnc_relationship}</span> : ""}
            </div>
        
        
        */}                
                     
        </div>
    )
}

export default FormQuestion2
