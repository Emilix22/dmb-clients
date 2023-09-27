import React, { useEffect, useState } from 'react'
import FormQuestion1 from './FormQuestion1'
import FormQuestion2 from './FormQuestion2'
//import FormQuestion3 from './FormQuestion3'
import FormQuestion4 from './FormQuestion4'
import imgRegistroFrente from '../../../assets/licenseFront.jpg'
import imgRegistroDorso from '../../../assets/licenseBack.jpg'

function InformationParticular({ datosFormu, setDatosFormu, errors, setErrors, expressions, formData }) {

    const [multiQ2, setMultiQ2] = useState([])
    //const [multiQ3, setMultiQ3] = useState([])

    useEffect(() => {
        
        datosFormu.injured_in_car.iic_quantity === "1" 
        ? setMultiQ2([1]) 
        : Number(datosFormu.injured_in_car.iic_quantity) >= 2 
        ? setMultiQ2([1, 2]) 
        : setMultiQ2([])  
    }, [datosFormu.injured_in_car.iic_quantity]);

    // useEffect(() => {
        
    //     datosFormu.injured_out_car.ioc_quantity === "1" 
    //     ? setMultiQ3([1]) 
    //     : datosFormu.injured_out_car.ioc_quantity === "2" 
    //     ? setMultiQ3([1, 2]) 
    //     : datosFormu.injured_out_car.ioc_quantity === "3" 
    //     ? setMultiQ3([1, 2, 3]) 
    //     : datosFormu.injured_out_car.ioc_quantity === "4" 
    //     ? setMultiQ3([1, 2, 3, 4])
    //     : Number(datosFormu.injured_out_car.ioc_quantity) >= 5 
    //     ? setMultiQ3([1, 2, 3, 4, 5])
    //     : setMultiQ3([])  
    // }, [datosFormu.injured_out_car.ioc_quantity]);


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
                        onClick={(e) => setDatosFormu({ ...datosFormu, question1: e.target.value })}
                    />
                    <label htmlFor="question1N">No</label>
                    <input
                        type="radio"
                        name="question1"
                        id="question1N"
                        value={"no"}
                        onClick={(e) => setDatosFormu({ ...datosFormu, question1: e.target.value })}
                    /> 
                </div>
                
                {errors.question1 ? <span className="msg-error">{errors.question1}</span> : ""}
            </div>

            <div className='fotos-registro'>
            <div className="form-group-1 form-group-2" id="form-group-img-license-front">
                <label htmlFor="img-license-front"><img src={imgRegistroFrente} alt="imgRegistroFront" /> Foto del Registro de Conducir <strong>FRENTE</strong>:</label>          
                <input 
                type="file" 
                name="img-license-front" 
                // value={datosFormu.license_front}
                onChange={(e) => setDatosFormu({ ...datosFormu, license_front: e.target.files[0]})}
                /> 
            </div>
            <div className="form-group-1 form-group-2" id="form-group-img-license-back">
                <label htmlFor="img-license-back"><img src={imgRegistroDorso} alt="imgRegistroBack" /> Foto del Registro de Conducir <strong>DORSO</strong>:</label>          
                <input 
                type="file" 
                name="img-license-back" 
                // value={datosFormu.license}
                onChange={(e) => setDatosFormu({ ...datosFormu, license_back: e.target.files[0]})}
                />
            </div>
            </div>

            {
                datosFormu.question1 === "no" ? <FormQuestion1 datosFormu={datosFormu} setDatosFormu={setDatosFormu} errors={errors} setErrors={setErrors} expressions={expressions} /> : ""
            }

            {
                datosFormu.raison === 'accidente' ? <div className="form-group-1 form-group-2">
                <span htmlFor="2">¿Hubo lesionados sobre el vehículo?</span>
                <div className='select-yes-no'>
                <label htmlFor="question2S">Si</label>
                <input
                    type="radio"
                    name="question2"
                    id="question2S"
                    value={"si"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question2: e.target.value })}
                />
                <label htmlFor="question2N">No</label>
                <input
                    type="radio"
                    name="question2"
                    id="question2N"
                    value={"no"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question2: e.target.value })}
                />
                </div>
                {errors.question2 ? <span className="msg-error">{errors.question2}</span> : ""}
            </div> : null
            }
            
            {
                    datosFormu.question2 === "si" 
                ? <div className="form-group-1 form-group-3">
                <label htmlFor="iic_quantity">Cantidad de Lesionados <strong>Sobre el Vehículo</strong></label>
                <input
                    type="text"
                    name="iic_quantity"
                    id="iic_quantity"
                    value={datosFormu.injured_in_car.iic_quantity}
                    onChange={(e) => {
                        setDatosFormu({ ...datosFormu, injured_in_car : {
                            ...datosFormu.injured_in_car,
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
                datosFormu.question2 === "si" 
                ? multiQ2.map((num, index) => {
                    return <FormQuestion2 title={index +1} datosFormu={datosFormu} setDatosFormu={setDatosFormu} errors={errors} setErrors={setErrors} expressions={expressions} key={num +index} />
                }) : ""
                
            }

            {/* <div className="form-group-1 form-group-2">
                <span htmlFor="question3">¿Hubo lesionados fuera del vehículo?</span>
                <div className='select-yes-no'>
                <label htmlFor="question3S">Si</label>
                <input
                    type="radio"
                    name="question3"
                    id="question3S"
                    value={"si"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question3: e.target.value })}
                />
                <label htmlFor="question3N">No</label>
                <input
                    type="radio"
                    name="question3"
                    id="question3N"
                    value={"no"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question3: e.target.value })}
                />
                </div>
                {errors.question3 ? <span className="msg-error">{errors.question3}</span> : ""}
            </div>

            {
                datosFormu.question3 === "si" 
                ? <div className="form-group-1 form-group-3">
                <label htmlFor="ioc_quantity">Cantidad de Lesionados <strong>Fuera del Vehículo</strong></label>
                <input
                    type="text"
                    name="ioc_quantity"
                    id="ioc_quantity"
                    value={datosFormu.injured_out_car.ioc_quantity}
                    onChange={(e) => {
                        setDatosFormu({ ...datosFormu, injured_out_car : {
                            ...datosFormu.injured_out_car,
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
                    return <FormQuestion3 title={index +1} datosFormu={datosFormu} setDatosFormu={setDatosFormu} errors={errors} setErrors={setErrors} expressions={expressions} key={num +index} />
                })
                
            } */}

{
                datosFormu.raison === 'accidente' ? <div className="form-group-1 form-group-2">
                <span className='question' htmlFor="question4">¿Hubo vehículos de terceros involucrados?</span>
                <div className='select-yes-no'>
                <label htmlFor="question4S">Si</label>
                <input
                    type="radio"
                    name="question4"
                    id="question4S"
                    value={"si"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question4: e.target.value })}
                />
                <label htmlFor="question4N">No</label>
                <input
                    type="radio"
                    name="question4"
                    id="question4N"
                    value={"no"}
                    onClick={(e) => setDatosFormu({ ...datosFormu, question4: e.target.value })}
                />
                </div>
                {errors.question4 ? <span className="msg-error">{errors.question4}</span> : ""}
            </div> : null
            }

            {
                datosFormu.question4 === "si" ? <FormQuestion4 datosFormu={datosFormu} setDatosFormu={setDatosFormu} errors={errors} setErrors={setErrors} expressions={expressions} formData={formData} /> : ""
            }

        </div>
    )
}

export default InformationParticular
