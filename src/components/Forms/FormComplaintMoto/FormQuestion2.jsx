import React from 'react'

function FormQuestion2({datosFormu, setDatosFormu, errors, title, setErrors, expressions}) {

    return (
        <div className='formQuestions2'>

            <h4>Datos del Lesionado Dentro del Vehículo N° {title}</h4>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_name">Nombre</label>
                <input
                    type="text"
                    name="iic_name"
                    id="iic_name"
                    value={
                        title === 1 
                        ? datosFormu.injured_in_car.iic_name1 
                        : title === 2  
                        ? datosFormu.injured_in_car.iic_name2
                        : title === 3  
                        ? datosFormu.injured_in_car.iic_name3
                        : title === 4  
                        ? datosFormu.injured_in_car.iic_name4
                        : title === 5  
                        ? datosFormu.injured_in_car.iic_name5
                        : ""
                    }
                    onChange={(e) => {

                        title === 1 
                        ? setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_name1: e.target.value
                        } })

                        : title === 2 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_name2: e.target.value
                        } })

                        : title === 3 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_name3: e.target.value
                        } })

                        : title === 4 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_name4: e.target.value
                        } })

                        : title === 5 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_name5: e.target.value
                        } }) 
                        : ""}
                    }
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_surname">Apellido</label>
                <input
                    type="text"
                    name="iic_surname"
                    id="iic_surname"
                    value={
                        title === 1 
                        ? datosFormu.injured_in_car.iic_surname1 
                        : title === 2  
                        ? datosFormu.injured_in_car.iic_surname2
                        : title === 3  
                        ? datosFormu.injured_in_car.iic_surname3
                        : title === 4  
                        ? datosFormu.injured_in_car.iic_surname4
                        : title === 5  
                        ? datosFormu.injured_in_car.iic_surname5
                        : ""
                    }
                    onChange={(e) => {

                       title === 1 
                        ? setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_surname1: e.target.value
                        } })

                        : title === 2 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_surname2: e.target.value
                        } })

                        : title === 3 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_surname3: e.target.value
                        } })

                        : title === 4 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_surname4: e.target.value
                        } })

                        : title === 5 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_surname5: e.target.value
                        } }) 
                        : ""}
                    }
                />
            </div>
        
            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_dni">DNI</label>
                <input
                    type="text"
                    name="iic_dni"
                    id="iic_dni"
                    value={
                        title === 1 
                        ? datosFormu.injured_in_car.iic_dni1 
                        : title === 2  
                        ? datosFormu.injured_in_car.iic_dni2
                        : title === 3  
                        ? datosFormu.injured_in_car.iic_dni3
                        : title === 4  
                        ? datosFormu.injured_in_car.iic_dni4
                        : title === 5  
                        ? datosFormu.injured_in_car.iic_dni5
                        : ""
                    }
                    onChange={(e) => {

                        title === 1 
                        ? setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_dni1: e.target.value
                        } })

                        : title === 2 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_dni2: e.target.value
                        } })

                        : title === 3 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_dni3: e.target.value
                        } })

                        : title === 4 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_dni4: e.target.value
                        } })

                        : title === 5 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_dni5: e.target.value
                        } }) 
                        : ""} 
                    }
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="iic_phone">Teléfono</label>
                <input
                    type="text"
                    name="iic_phone"
                    id="iic_phone"
                    value={
                        title === 1 
                        ? datosFormu.injured_in_car.iic_phone1 
                        : title === 2  
                        ? datosFormu.injured_in_car.iic_phone2
                        : title === 3  
                        ? datosFormu.injured_in_car.iic_phone3
                        : title === 4  
                        ? datosFormu.injured_in_car.iic_phone4
                        : title === 5  
                        ? datosFormu.injured_in_car.iic_phone5
                        : ""
                    }
                    onChange={(e) => {

                        title === 1 
                        ? setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_phone1: e.target.value
                        } })

                        : title === 2 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_phone2: e.target.value
                        } })

                        : title === 3 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_phone3: e.target.value
                        } })

                        : title === 4 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_phone4: e.target.value
                        } })

                        : title === 5 ?
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                        ...datosFormu.injured_in_car,
                        iic_phone5: e.target.value
                        } }) 
                        : ""}
                    }
                />
            </div>

            
            {/* <div className="form-group-1 form-group-2">
                <label htmlFor="dnc_relationship">Relación con el Asegurado</label>
                <select
                    name="dnc_relationshipn"
                    id="dnc_relationship"
                    value={datosFormu.driver_not_client.dnc_relationship}
                    onChange={(e) => setDatosFormu({ ...datosFormu, driver_not_client : {
                        ...datosFormu.driver_not_client,
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
