import React from 'react'

function FormQuestion3({formData, setFormData, errors, title, setErrors, expressions}) {

    return (
        <div className='formQuestions3'>

            <h4>Datos del Lesionado Fuera del Vehículo N° {title}</h4>

            <div className="form-group-1 form-group-2">
                <label htmlFor="ioc_name">Nombre</label>
                <input
                    type="text"
                    name="ioc_name"
                    id="ioc_name"
                    value={formData.injured_out_car.ioc_name}
                    onChange={(e) => setFormData({ ...formData, injured_out_car : {
                        ...formData.injured_out_car,
                        ioc_name: e.target.value
                        } })}
                    // onKeyUp={validations.ioc_name}
                    // onBlur={validations.ioc_name}
                />
                {errors.ioc_name ? <span className="msg-error">{errors.ioc_name}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="ioc_surname">Apellido</label>
                <input
                    type="text"
                    name="ioc_surname"
                    id="ioc_surname"
                    value={formData.injured_out_car.ioc_surname}
                    onChange={(e) => setFormData({ ...formData, injured_out_car : {
                        ...formData.injured_out_car,
                        ioc_surname: e.target.value
                        } })}
                    // onKeyUp={validations.ioc_surname}
                    // onBlur={validations.ioc_surname}
                />
                {errors.ioc_surname ? <span className="msg-error">{errors.ioc_surname}</span> : ""}
            </div>
        
        <div className="form-group-1 form-group-2">
                <label htmlFor="ioc_DNI">DNI</label>
                <input
                    type="text"
                    name="ioc_DNI"
                    id="ioc_DNI"
                    value={formData.injured_out_car.ioc_DNI}
                    onChange={(e) => setFormData({ ...formData, injured_out_car : {
                        ...formData.injured_out_car,
                        ioc_DNI: e.target.value
                        } })}
                    // onKeyUp={validations.ioc_DNI}
                    // onBlur={validations.ioc_DNI}
                />
                {errors.ioc_DNI ? <span className="msg-error">{errors.ioc_DNI}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="ioc_phone">Teléfono</label>
                <input
                    type="text"
                    name="ioc_phone"
                    id="ioc_phone"
                    value={formData.injured_out_car.ioc_phone}
                    onChange={(e) => setFormData({ ...formData, injured_out_car : {
                        ...formData.injured_out_car,
                        ioc_phone: e.target.value
                        } })}
                    // onKeyUp={validations.ioc_phone}
                    // onBlur={validations.ioc_phone}
                />
                {errors.ioc_phone ? <span className="msg-error">{errors.ioc_phone}</span> : ""}
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

export default FormQuestion3
