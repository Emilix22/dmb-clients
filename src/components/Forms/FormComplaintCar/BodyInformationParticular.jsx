import React, { useEffect, useState } from 'react'
import FormQuestion1 from './FormQuestion1'
import FormQuestion2 from './FormQuestion2'
import FormQuestion3 from './FormQuestion3'
import FormQuestion4 from './FormQuestion4'

function InformationParticular({ formData, setFormData, errors, setErrors, expressions }) {

    const [multiQ2, setMultiQ2] = useState([])
    const [multiQ3, setMultiQ3] = useState([])

    useEffect(() => {
        
        formData.injured_in_car.iic_quantity === "1" 
        ? setMultiQ2([1]) 
        : formData.injured_in_car.iic_quantity === "2" 
        ? setMultiQ2([1, 2]) 
        : formData.injured_in_car.iic_quantity === "3" 
        ? setMultiQ2([1, 2, 3]) 
        : formData.injured_in_car.iic_quantity === "4" 
        ? setMultiQ2([1, 2, 3, 4])
        : Number(formData.injured_in_car.iic_quantity) >= 5 
        ? setMultiQ2([1, 2, 3, 4, 5])
        : setMultiQ2([])  
    }, [formData.injured_in_car.iic_quantity]);

    useEffect(() => {
        
        formData.injured_out_car.ioc_quantity === "1" 
        ? setMultiQ3([1]) 
        : formData.injured_out_car.ioc_quantity === "2" 
        ? setMultiQ3([1, 2]) 
        : formData.injured_out_car.ioc_quantity === "3" 
        ? setMultiQ3([1, 2, 3]) 
        : formData.injured_out_car.ioc_quantity === "4" 
        ? setMultiQ3([1, 2, 3, 4])
        : Number(formData.injured_out_car.ioc_quantity) >= 5 
        ? setMultiQ3([1, 2, 3, 4, 5])
        : setMultiQ3([])  
    }, [formData.injured_out_car.ioc_quantity]);


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
                <label htmlFor="iic_quantity">Cantidad de Lesionados <strong>Dentro del Vehículo</strong></label>
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
                multiQ2.map((num, index) => {
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

            {
                formData.question3 === "si" 
                ? <div className="form-group-1 form-group-3">
                <label htmlFor="ioc_quantity">Cantidad de Lesionados <strong>Fuera del Vehículo</strong></label>
                <input
                    type="text"
                    name="ioc_quantity"
                    id="ioc_quantity"
                    value={formData.injured_out_car.ioc_quantity}
                    onChange={(e) => {
                        setFormData({ ...formData, injured_out_car : {
                            ...formData.injured_out_car,
                            ioc_quantity: e.target.value
                        }})
                    }}
                    // onKeyUp={validations.ioc_quantity}
                    // onBlur={validations.ioc_quantity}
                />
                {errors.ioc_quantity ? <span className="msg-error">{errors.ioc_quantity}</span> : ""}
            </div> : ""
            }

            {     
                multiQ3.map((num, index) => {
                    return <FormQuestion3 title={index +1} formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} expressions={expressions} key={num +index} />
                })
                
            }

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

            {
                formData.question4 === "si" ? <FormQuestion4 formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} expressions={expressions} /> : ""
            }

        </div>
    )
}

export default InformationParticular
