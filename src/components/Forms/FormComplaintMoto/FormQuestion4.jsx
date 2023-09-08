import React from 'react'

function FormQuestion4({datosFormu, setDatosFormu, errors, setErrors, expressions}) {
    return (
        <div className='formQuestions4'>

            <h4>Datos del Vehículo Involucrado</h4>

            <div className="form-group-1 form-group-2">
                <label htmlFor="oc_name">Nombre Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_name"
                    id="oc_name"
                    value={datosFormu.other_car.oc_name}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_name: e.target.value
                        } })}
                    // onKeyUp={validations.oc_name}
                    // onBlur={validations.oc_name}
                />
                {errors.oc_name ? <span className="msg-error">{errors.oc_name}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="oc_surname">Apellido Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_surname"
                    id="oc_surname"
                    value={datosFormu.other_car.oc_surname}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_surname: e.target.value
                        } })}
                    // onKeyUp={validations.oc_surname}
                    // onBlur={validations.oc_surname}
                />
                {errors.oc_surname ? <span className="msg-error">{errors.oc_surname}</span> : ""}
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="oc_dni">DNI Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_dni"
                    id="oc_dni"
                    value={datosFormu.other_car.oc_dni}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_dni: e.target.value
                        } })}
                    // onKeyUp={validations.oc_dni}
                    // onBlur={validations.oc_dni}
                />
                {errors.oc_dni ? <span className="msg-error">{errors.oc_dni}</span> : ""}
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="oc_patent">Patente</label>
                <input
                    type="text"
                    name="oc_patent"
                    id="oc_patent"
                    value={datosFormu.other_car.oc_patent}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_patent: e.target.value
                        } })}
                    // onKeyUp={validations.oc_patent}
                    // onBlur={validations.oc_patent}
                />
                {errors.oc_patent ? <span className="msg-error">{errors.oc_patent}</span> : ""}
            </div>
           
{/************************ Poner las opciones desde API Seguros*********************************************** */}
            <div className="form-group-1 form-group-3">
                <label htmlFor="oc_insurance">Aseguradora</label>
                <select
                    name="oc_insurance"
                    id="oc_insurance"
                    value={datosFormu.other_car.oc_insurance}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_insurance: e.target.value
                        } })}
                > 
                    <option value=""></option>
                    <option value="1">ALLIANZ</option>
                    <option value="2">LA CAJA</option>
                    <option value="3">SM SEGUROS</option>
                </select>
                {errors.oc_insurance ? <span className="msg-error">{errors.oc_insurance}</span> : ""}
            </div>
                                         
        </div>
    )
}

export default FormQuestion4
