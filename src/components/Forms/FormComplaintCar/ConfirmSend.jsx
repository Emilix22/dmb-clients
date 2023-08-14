import React from 'react'

function ConfirmSend({formData}) {
    return (
        <div className='formConfirmSend'>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_dni">DNI del Asegurado</label>
                <input
                    type="text"
                    name="complaint_dni"
                    id="complaint_dni"
                    value={formData.dni}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_name">Nombre y Apellido del Asegurado</label>
                <input
                    type="text"
                    name="complaint_name"
                    id="complaint_name"
                    value={formData.client_name}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_date">Fecha del Siniestro</label>
                <input
                    type="text"
                    name="complaint_date"
                    id="complaint_date"
                    value={formData.date}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_hour">Hora del Siniestro</label>
                <input
                    type="text"
                    name="complaint_hour"
                    id="complaint_hour"
                    value={formData.hour + " : " + formData.minutes}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="complaint_policy">Póliza N°</label>
                <input
                    type="text"
                    name="complaint_policy"
                    id="complaint_policy"
                    value={formData.policy}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_raison">Motivo</label>
                <input
                    type="text"
                    name="complaint_raison"
                    id="complaint_raison"
                    value={formData.raison}
                    disabled
                />
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="complaint_consequence">Consecuencia</label>
                <input
                    type="text"
                    name="complaint_consequence"
                    id="complaint_consequence"
                    value={formData.consequence}
                    disabled
                />
            </div>

            <div className="form-group-1">
                <label htmlFor="complaint_street">Lugar del Siniestro</label>
                <input
                    type="text"
                    name="complaint_street"
                    id="complaint_street"
                    value={formData.street + " " + formData.door + ", " + formData.city + " (CP: "+formData.postalCode+")"}
                    disabled
                />
            </div>
                         
        </div>
    )
}

export default ConfirmSend
