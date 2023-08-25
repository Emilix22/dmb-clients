import React from 'react'

function ConfirmSend({datosFormu}) {

    return (
        <div className='formConfirmSend'>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_dni">DNI del Asegurado</label>
                <input
                    type="text"
                    name="complaint_dni"
                    id="complaint_dni"
                    value={datosFormu.dni}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_name">Nombre y Apellido del Asegurado</label>
                <input
                    type="text"
                    name="complaint_name"
                    id="complaint_name"
                    value={datosFormu.client_name}
                    disabled
                />
            </div>

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
                    value={datosFormu.policy}
                    disabled
                />
            </div>

            

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_consequence">Consecuencias</label>
                <ul className='list-consequence'>

                    {
                        Object.keys(datosFormu.consequence).map((key, index) => (
                            datosFormu.consequence[key] === true 
                            ? <li key={index}>{key.replaceAll('_', ' ')}</li> 
                            : ""
                        ))
                    }

                </ul>
            </div>
            
            <div className="form-group-1 form-group-2">
                <label htmlFor="affected_objects">Bienes Afectados</label>
                <textarea
                    name="affected_objects"
                    cols="30"
                    rows="10"
                    value={datosFormu.affected_objects}
                    disabled
                />
            </div>

        </div>
    )
}

export default ConfirmSend
