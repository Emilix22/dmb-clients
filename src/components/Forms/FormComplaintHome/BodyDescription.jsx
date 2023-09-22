import React from 'react'

function BodyDescription({ datosFormu, setDatosFormu, errors, setErrors, expressions }) {

    const validations = {
        description: () => {
          if (expressions.description.test(datosFormu.description)) {
            setErrors({ ...errors, description: "" });
          } else {
            setErrors({ ...errors, description: "Requerido - entre 20 y 255 caracteres" });
          }
        },
        affected_objects: () => {
            if (expressions.affected_objects.test(datosFormu.affected_objects)) {
              setErrors({ ...errors, affected_objects: "" });
            } else {
              setErrors({ ...errors, affected_objects: "Requerido - entre 4 y 255 caracteres" });
            }
          }
      };

    return (
        <div className='form-Description'>
            <div className="form-group-1 form-group-2" id="form-group-description">
                <label htmlFor="description">Contános cómo fue el siniestro lo más detallado posible</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    //placeholder=""
                    value={datosFormu.description}
                    onChange={(e) => setDatosFormu({ ...datosFormu, description: e.target.value })}
                    onKeyUp={validations.description}
                    onBlur={validations.description}
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
                    onKeyUp={validations.affected_objects}
                    onBlur={validations.affected_objects}
                />
                {errors.affected_objects ? <span className="msg-error">{errors.affected_objects}</span> : ""}
            </div>
        </div>
    )
}

export default BodyDescription
