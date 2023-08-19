import React from 'react'

function FormQuestion4({datosFormu, setDatosFormu, errors, setErrors, expressions}) {
    return (
        <div className='formQuestions4'>

            <h4>Datos del Vehículo Involucrado</h4>

            <div className="form-group-1 form-group-2">
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
           

{/************************ Poner las opciones desde la base de datos*********************************************** */}
            <div className="form-group-1 form-group-2">
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
