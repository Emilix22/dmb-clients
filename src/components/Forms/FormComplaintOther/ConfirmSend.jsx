import React from 'react'

function ConfirmSend({datosFormu}) {

    return (
        <div className='formConfirmSend'>

            {
                datosFormu.dni 
                ? <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_dni">DNI del Asegurado</label>
                <input
                    type="text"
                    name="complaint_dni"
                    id="complaint_dni"
                    value={datosFormu.dni}
                    disabled
                />
            </div> 
            : <div className="form-group-1 form-group-3">
            <label htmlFor="complaint_cuit">CUIT del Asegurado</label>
            <input
                type="text"
                name="complaint_cuit"
                id="complaint_cuit"
                value={datosFormu.cuit}
                disabled
            />
        </div>
            }
            {
                datosFormu.dni 
                ? <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_name">Nombre y Apellido del Asegurado</label>
                <input
                    type="text"
                    name="complaint_name"
                    id="complaint_name"
                    value={datosFormu.client_name}
                    disabled
                />
            </div> 
            : <div className="form-group-1 form-group-2">
            <label htmlFor="complaint_name">Nombre del Asegurado</label>
            <input
                type="text"
                name="complaint_name"
                id="complaint_name"
                value={datosFormu.client_name}
                disabled
            />
        </div>
            }
            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_date">Fecha del Siniestro</label>
                <input
                    type="text"
                    name="complaint_date"
                    id="complaint_date"
                    value={datosFormu.date}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_hour">Hora del Siniestro</label>
                <input
                    type="text"
                    name="complaint_hour"
                    id="complaint_hour"
                    value={datosFormu.hour + " : " + datosFormu.minutes}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_policy">Póliza N°</label>
                <input
                    type="text"
                    name="complaint_policy"
                    id="complaint_policy"
                    value={datosFormu.policyNumber}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="description">Descripción de los hechos</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    value={datosFormu.description}
                    disabled
                />
            </div>

        </div>
    )
}

export default ConfirmSend
