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
                <label htmlFor="complaint_raison">Motivo</label>
                <input
                    type="text"
                    name="complaint_raison"
                    id="complaint_raison"
                    value={datosFormu.raison}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_consequence">Consecuencia</label>
                <input
                    type="text"
                    name="complaint_consequence"
                    id="complaint_consequence"
                    value={datosFormu.consequence}
                    disabled
                />
            </div>

            <div className="form-group-1">
                <label htmlFor="complaint_street">Lugar del Siniestro</label>
                <input
                    type="text"
                    name="complaint_street"
                    id="complaint_street"
                    value={datosFormu.street + " " + datosFormu.door + ", " + datosFormu.city}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-4">
                <label htmlFor="complaint_question1">Conducia el Asegurado</label>
                <input
                    type="text"
                    name="complaint_question1"
                    id="complaint_question1"
                    value={datosFormu.question1}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-4">
                <label htmlFor="complaint_question2">Lesionados Sobre el Vehículo</label>
                <input
                    type="text"
                    name="complaint_question2"
                    id="complaint_question2"
                    value={datosFormu.question2}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-4">
                <label htmlFor="complaint_question4">Vehículos Terceros Involucrados</label>
                <input
                    type="text"
                    name="complaint_question4"
                    id="complaint_question4"
                    value={datosFormu.question4}
                    disabled
                />
            </div>
                         
        </div>
    )
}

export default ConfirmSend
