import React, {useState, useEffect} from 'react'

function FormQuestion2({formData, setFormData, errors, title, setErrors, expressions}) {

    return (
        <div className='formQuestions2'>

            <h4>Datos del Lesionado Dentro del Vehículo N° {title}</h4>

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
        
        <div className="form-group-1 form-group-2">
                <label htmlFor="iic_DNI">DNI</label>
                <input
                    type="text"
                    name="iic_DNI"
                    id="iic_DNI"
                    value={formData.injured_in_car.iic_DNI}
                    onChange={(e) => setFormData({ ...formData, injured_in_car : {
                        ...formData.injured_in_car,
                        iic_DNI: e.target.value
                        } })}
                    // onKeyUp={validations.iic_DNI}
                    // onBlur={validations.iic_DNI}
                />
                {errors.iic_DNI ? <span className="msg-error">{errors.iic_DNI}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_phone">Teléfono</label>
                <input
                    type="text"
                    name="iic_phone"
                    id="iic_phone"
                    value={formData.injured_in_car.iic_phone}
                    onChange={(e) => setFormData({ ...formData, injured_in_car : {
                        ...formData.injured_in_car,
                        iic_phone: e.target.value
                        } })}
                    // onKeyUp={validations.iic_phone}
                    // onBlur={validations.iic_phone}
                />
                {errors.iic_phone ? <span className="msg-error">{errors.iic_phone}</span> : ""}
            </div>

            
            {/* <div className="form-group-1 form-group-2">
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
            </div> */}         
                     
        </div>
    )
}

export default FormQuestion2
