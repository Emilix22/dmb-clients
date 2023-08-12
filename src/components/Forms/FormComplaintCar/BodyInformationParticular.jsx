import React, { useEffect, useState } from 'react'
import FormQuestion1 from './FormQuestion1'
import FormQuestion2 from './FormQuestion2'

function InformationParticular({ formData, setFormData, errors, setErrors, expressions }) {

    const [multi, setMulti] = useState([])

    useEffect(() => {
        
        formData.injured_in_car.iic_quantity === "1" 
        ? setMulti([1]) 
        : formData.injured_in_car.iic_quantity === "2" 
        ? setMulti([1, 2]) 
        : formData.injured_in_car.iic_quantity === "3" 
        ? setMulti([1, 2, 3]) 
        : formData.injured_in_car.iic_quantity === "4" 
        ? setMulti([1, 2, 3, 4])
        : formData.injured_in_car.iic_quantity === "5" 
        ? setMulti([1, 2, 3, 4, 5])
        : setMulti([])  
    }, [formData.injured_in_car.iic_quantity])


    return (
        <div className='form-InformationParticular'>
            <div className="form-group-1 form-group-2">
                <span htmlFor="question1">¿Conducía el Asegurado?</span>
                <div className='select-yes-no'>
                   <label htmlFor="question1S">Si</label>
                    <input
                        type="radio"
                        name="question1"
                        id="question1S"
                        value={"si"}
                        onClick={(e) => setFormData({ ...formData, question1: e.target.value })}
                    />
                    <label htmlFor="question1N">No</label>
                    <input
                        type="radio"
                        name="question1"
                        id="question1N"
                        value={"no"}
                        onClick={(e) => setFormData({ ...formData, question1: e.target.value })}
                    /> 
                </div>
                
                {errors.question1 ? <span className="msg-error">{errors.question1}</span> : ""}
            </div>

            {
                formData.question1 === "no" ? <FormQuestion1 formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} expressions={expressions} /> : ""
            }

            <div className="form-group-1 form-group-2">
                <span htmlFor="2">¿Hubo lesionados dentro del vehículo?</span>
                <div className='select-yes-no'>
                <label htmlFor="question2S">Si</label>
                <input
                    type="radio"
                    name="question2"
                    id="question2S"
                    value={"si"}
                    onClick={(e) => setFormData({ ...formData, question2: e.target.value })}
                />
                <label htmlFor="question2N">No</label>
                <input
                    type="radio"
                    name="question2"
                    id="question2N"
                    value={"no"}
                    onClick={(e) => setFormData({ ...formData, question2: e.target.value })}
                />
                </div>
                {errors.question2 ? <span className="msg-error">{errors.question2}</span> : ""}
            </div>
            {
                formData.question2 === "si" 
                ? <div className="form-group-1 form-group-3">
                <label htmlFor="iic_quantity">Cantidad de Lesionados Dentro del Vehículo</label>
                <input
                    type="text"
                    name="iic_quantity"
                    id="iic_quantity"
                    value={formData.injured_in_car.iic_quantity}
                    onChange={(e) => {
                        setFormData({ ...formData, injured_in_car : {
                            ...formData.injured_in_car,
                            iic_quantity: e.target.value
                        }})
                    }}
                    // onKeyUp={validations.iic_quantity}
                    // onBlur={validations.iic_quantity}
                />
                {errors.iic_quantity ? <span className="msg-error">{errors.iic_quantity}</span> : ""}
            </div> : ""
            }

            {     
                multi.map((num, index) => {
                    return <FormQuestion2 title={index +1} formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} expressions={expressions} key={num +index} />
                })
                
            }

            <div className="form-group-1 form-group-2">
                <span htmlFor="question3">¿Hubo lesionados fuera del vehículo?</span>
                <div className='select-yes-no'>
                <label htmlFor="question3S">Si</label>
                <input
                    type="radio"
                    name="question3"
                    id="question3S"
                    value={"si"}
                    onClick={(e) => setFormData({ ...formData, question3: e.target.value })}
                />
                <label htmlFor="question3N">No</label>
                <input
                    type="radio"
                    name="question3"
                    id="question3N"
                    value={"no"}
                    onClick={(e) => setFormData({ ...formData, question3: e.target.value })}
                />
                </div>
                {errors.question3 ? <span className="msg-error">{errors.question3}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <span htmlFor="question4">¿Hubo vehículos de terceros involucrados?</span>
                <div className='select-yes-no'>
                <label htmlFor="question4S">Si</label>
                <input
                    type="radio"
                    name="question4"
                    id="question4S"
                    value={"si"}
                    onClick={(e) => setFormData({ ...formData, question4: e.target.value })}
                />
                <label htmlFor="question4N">No</label>
                <input
                    type="radio"
                    name="question4"
                    id="question4N"
                    value={"no"}
                    onClick={(e) => setFormData({ ...formData, question4: e.target.value })}
                />
                </div>
                {errors.question4 ? <span className="msg-error">{errors.question4}</span> : ""}
            </div>
        </div>
    )
}

export default InformationParticular
