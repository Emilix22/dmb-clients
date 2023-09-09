import React from 'react'

function BodyDescription({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {
    return (
        <div className='form-Description'>
            <div className="form-group-1 form-group-2" id="form-group-description">
                <label htmlFor="description">Descripción de los hechos</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    //placeholder=""
                    value={datosFormu.description}
                    onChange={(e) => setDatosFormu({ ...datosFormu, description: e.target.value })}
                    //onKeyUp={validations.description}
                    //onBlur={validations.description}
                />
                {errors.description ? <span className="msg-error">{errors.description}</span> : ""}
            </div>
            <div className="form-group-1 form-group-2" id="form-group-description">
                <label htmlFor="affected_objects">Bienes afectados por los hechos</label>
                <textarea
                    name="affected_objects"
                    id="affected_objects"
                    cols="30"
                    rows="10"
                    //placeholder=""
                    value={datosFormu.affected_objects}
                    onChange={(e) => setDatosFormu({ ...datosFormu, affected_objects: e.target.value })}
                    //onKeyUp={validations.description}
                    //onBlur={validations.description}
                />
                {errors.affected_objects ? <span className="msg-error">{errors.affected_objects}</span> : ""}
            </div>
        </div>
    )
}

export default BodyDescription
