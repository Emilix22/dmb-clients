import '../FormComplaintCar/Form.css'
import React, {useState} from 'react'
import Location from './BodyLocation';
import DateTime from './BodyDateTime';
import Raison from './BodyRaison';
import InformationParticular from './BodyInformationParticular';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner'
import {useNavigate} from 'react-router-dom'

function FormMoto() {
    const [page, setPage] = useState(0);
    const history = useNavigate() 

    const formTitles = ['Ingrese el DNI del Asegurado y la Fecha y Hora del Siniestro', 'Contanos que te ocurrió', 'Indicanos dónde ocurrió', 'Información Particular', 'Resumen del Siniestro a Denunciar'];


    const [datosFormu, setDatosFormu] = useState({
        //***************************paso1*********** */
        dni: "",
        client_name: "",
        date: "",
        hour: "",
        minutes: "",
        id_client: "",
        // id_company: null,
        policy: "",
        policyNumber: "",
        //****************************paso2************/
        raison: "",
        consequence: "",
        //****************************paso3************/
        street: "",
        door: "",
        postalCode: "",
        city: "",
        state: {
            id: 0,
            name: ''
        },
        description: "",
        characteristics: "",
        // license_front: undefined,
        // license_back: undefined,
        // police_complaint: undefined,
        //***************************paso4*********** */
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        driver_not_client: {
            dnc_name: "",
            dnc_surname: "",
            dnc_DNI: "",
            dnc_phone: "",
            dnc_birthday: "",
            dnc_nacionality: "",
            dnc_street: "",
            dnc_door: "",
            dnc_postalCode: "",
            dnc_city: "",
            dnc_state: {
                id: 0,
                name: ''
            }
        },
        injured_in_car: {
            iic_quantity: "",
            iic_name1: "",
            iic_name2: "",
            iic_surname1: "",
            iic_surname2: "",
            iic_dni1: "",
            iic_dni2: "",
            iic_phone1: "",
            iic_phone2: ""
        },
        injured_out_car: {
            ioc_quantity: "",
            ioc_name1: "",
            ioc_name2: "",
            ioc_name3: "",
            ioc_name4: "",
            ioc_name5: "",
            ioc_surname1: "",
            ioc_surname2: "",
            ioc_surname3: "",
            ioc_surname4: "",
            ioc_surname5: "",
            ioc_dni1: "",
            ioc_dni2: "",
            ioc_dni3: "",
            ioc_dni4: "",
            ioc_dni5: "",
            ioc_phone1: "",
            ioc_phone2: "",
            ioc_phone3: "",
            ioc_phone4: "",
            ioc_phone5: ""
        },
        other_car: {
            oc_patent: "",
            oc_insurance: "",
            oc_name: "",
            oc_surname: "",
            oc_dni: "",

        }

    })

    const formData = new FormData();

    formData.append('date', datosFormu.date)
    formData.append('hour', datosFormu.hour + ":" + datosFormu.minutes)
    formData.append('id_peapol', datosFormu.id_client)
    // formData.append('id_company', datosFormu.id_company)
    formData.append('policy', datosFormu.policy)
    //****************************paso2************/
    formData.append('raison', datosFormu.raison)
    formData.append('consequence', datosFormu.consequence)
    formData.append('police_complaint', datosFormu.police_complaint)

    //****************************paso3************/
    formData.append('street', datosFormu.street)
    formData.append('door', datosFormu.door)
    formData.append('postalCode', datosFormu.postalCode)
    formData.append('city', datosFormu.city)
    formData.append('state', datosFormu.state.name)
    formData.append('description', datosFormu.description)
    formData.append('characteristics', datosFormu.characteristics)
    formData.append('license_front', datosFormu.license_front)
    formData.append('license_back', datosFormu.license_back)
    //***************************paso4*********** */
    formData.append('question1', datosFormu.question1)
    formData.append('question2', datosFormu.question2)
    formData.append('question3', datosFormu.question3)
    formData.append('question4', datosFormu.question4)
    formData.append('dnc_name', datosFormu.driver_not_client.dnc_name)
    formData.append('dnc_surname', datosFormu.driver_not_client.dnc_surname)
    formData.append('dnc_DNI', datosFormu.driver_not_client.dnc_DNI)
    formData.append('dnc_phone', datosFormu.driver_not_client.dnc_phone)
    formData.append('dnc_birthday', datosFormu.driver_not_client.dnc_birthday)
    formData.append('dnc_nacionality', datosFormu.driver_not_client.dnc_nacionality)
    formData.append('dnc_street', datosFormu.driver_not_client.dnc_street)
    formData.append('dnc_door', datosFormu.driver_not_client.dnc_door)
    formData.append('dnc_postalCode', datosFormu.driver_not_client.dnc_postalCode)
    formData.append('dnc_city', datosFormu.driver_not_client.dnc_city)
    formData.append('dnc_state', datosFormu.driver_not_client.dnc_state.name)
    formData.append('iic_quantity', datosFormu.injured_in_car.iic_quantity)
    formData.append('iic_name1', datosFormu.injured_in_car.iic_name1)
    formData.append('iic_name2', datosFormu.injured_in_car.iic_name2)
    formData.append('iic_surname1', datosFormu.injured_in_car.iic_surname1)
    formData.append('iic_surname2', datosFormu.injured_in_car.iic_surname2)
    formData.append('iic_dni1', datosFormu.injured_in_car.iic_dni1)
    formData.append('iic_dni2', datosFormu.injured_in_car.iic_dni2)
    formData.append('iic_phone1', datosFormu.injured_in_car.iic_phone1)
    formData.append('iic_phone2', datosFormu.injured_in_car.iic_phone2)
    formData.append('ioc_quantity', datosFormu.injured_out_car.ioc_quantity)
    formData.append('ioc_name1', datosFormu.injured_out_car.ioc_name1)
    formData.append('ioc_name2', datosFormu.injured_out_car.ioc_name2)
    formData.append('ioc_name3', datosFormu.injured_out_car.ioc_name3)
    formData.append('ioc_name4', datosFormu.injured_out_car.ioc_name4)
    formData.append('ioc_name5', datosFormu.injured_out_car.ioc_name5)
    formData.append('ioc_surname1', datosFormu.injured_out_car.ioc_surname1)
    formData.append('ioc_surname2', datosFormu.injured_out_car.ioc_surname2)
    formData.append('ioc_surname3', datosFormu.injured_out_car.ioc_surname3)
    formData.append('ioc_surname4', datosFormu.injured_out_car.ioc_surname4)
    formData.append('ioc_surname5', datosFormu.injured_out_car.ioc_surname5)
    formData.append('ioc_dni1', datosFormu.injured_out_car.ioc_dni1)
    formData.append('ioc_dni2', datosFormu.injured_out_car.ioc_dni2)
    formData.append('ioc_dni3', datosFormu.injured_out_car.ioc_dni3)
    formData.append('ioc_dni4', datosFormu.injured_out_car.ioc_dni4)
    formData.append('ioc_dni5', datosFormu.injured_out_car.ioc_dni5)
    formData.append('ioc_phone1', datosFormu.injured_out_car.ioc_phone1)
    formData.append('ioc_phone2', datosFormu.injured_out_car.ioc_phone2)
    formData.append('ioc_phone3', datosFormu.injured_out_car.ioc_phone3)
    formData.append('ioc_phone4', datosFormu.injured_out_car.ioc_phone4)
    formData.append('ioc_phone5', datosFormu.injured_out_car.ioc_phone5)
    formData.append('oc_patent', datosFormu.other_car.oc_patent)
    formData.append('oc_insurance', datosFormu.other_car.oc_insurance)
    formData.append('oc_name', datosFormu.other_car.oc_name)
    formData.append('oc_surname', datosFormu.other_car.oc_surname)
    formData.append('oc_dni', datosFormu.other_car.oc_dni)


    const expressions = {
        date: /^\d{4}-\d{2}-\d{2}$/,
        dni: /^\d{8,8}$/,
        hour: /^\d{2}/,
        minutes: /^\d{2}/,
        street: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/, // ver si agrego el punto a parte de letras y numeros
        door: /^\d{1,5}/,
        postalCode: /^[a-zA-Z0-9\s]{4,8}$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{20,500}$/,
        // name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        // surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        // password: /^.{4,12}$/,
        // email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [errors, setErrors] = useState({});
    const [errorsBack, setErrorsBack] = useState();

    const [validClient, setValidClient] = useState("");
    
    const [client, setClient] = useState();
    
    const handleNext = (event) => {
        event.preventDefault();

        if((!errors.length > 0 && datosFormu.dni && datosFormu.date && datosFormu.hour && datosFormu.minutes && validClient && datosFormu.policy) && page === 0) {
            return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.raison && datosFormu.consequence && page === 1) {
           return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.state && datosFormu.city && datosFormu.street && datosFormu.door && datosFormu.postalCode && datosFormu.description && datosFormu.characteristics && datosFormu.license_front && datosFormu.license_back && page === 2) {
           return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.question1 && datosFormu.question2 && datosFormu.question3 && datosFormu.question4 && page === 3) {
            return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && page === 4) {
            return setPage((prevState) => prevState + 1)
        }
        
    }

    const handlePrev = (event) => {
        event.preventDefault();
        setPage((prevState) => prevState - 1)
    }

    const handleSend = (event) => {
        event.preventDefault();
        toast('Enviando Formulario...', {
            icon: "⌛"
        })

        fetch("https://dmb-back.onrender.com/api/siniestros_moto/crear", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(info => {
           console.log(info)
           {
                if (info.error) {
                    setErrorsBack(info.error)
                }else{
                    toast.success('Formulario Enviado!')
                    setTimeout(() => {history(`/confirm-complaint/${datosFormu.dni}`)}, 2000)
                }
            }
           
        })
        .catch(error => {console.log(error)})
    }

    const formDisplay = () => {
        if (page === 0) {
            return <DateTime 
                    datosFormu={datosFormu} 
                    setDatosFormu={setDatosFormu} 
                    errors={errors} 
                    setErrors={setErrors}
                    expressions={expressions}
                    validClient={validClient}
                    setValidClient={setValidClient}
                    client={client}
                    setClient={setClient}  
                />
        };
        if (page === 1) {
            return <Raison 
            datosFormu={datosFormu} 
            setDatosFormu={setDatosFormu} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}   
            />
        };
        if (page === 2) {
            return <Location 
            datosFormu={datosFormu} 
            setDatosFormu={setDatosFormu} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 3) {
            return <InformationParticular 
            datosFormu={datosFormu} 
            setDatosFormu={setDatosFormu} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 4) {
            return <ConfirmSend 
            datosFormu={datosFormu} 
            />
        };

    }
    // console.log(datosFormu)
    // console.log(page)
    return (
        <form className='form'>
            
            <Toaster richColors />

            <div className='infoProgressbar'>
                {page === 0 ? <span>Paso 1 de 5</span>
                : page === 1 ? <span>Paso 2 de 5</span>
                : page === 2 ? <span>Paso 3 de 5</span> 
                : page === 3 ? <span>Paso 4 de 5</span>
                : <span>Paso 5 de 5</span>}
                <div className='progressbar'>
                    <div style={{width: page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%"}}></div>
                </div>
            </div>
            <div className='form-container'>
                <div className='form-header'>
                    <h3>{formTitles[page]}</h3>
                </div>
                <div className='form-body'>
                    {formDisplay()}
                </div>
                <div className='form-footer'>
                    <div>
                        { errorsBack && errorsBack.date ? <p className='msg-error'>{errorsBack.date.msg}</p> : null}
                        { errorsBack && errorsBack.hour ? <p className='msg-error'>{errorsBack.hour.msg}</p> : null}
                        { errorsBack && errorsBack.raison ? <p className='msg-error'>{errorsBack.raison.msg}</p> : null}
                        { errorsBack && errorsBack.consequence ? <p className='msg-error'>{errorsBack.consequence.msg}</p> : null}
                        { errorsBack && errorsBack.street ? <p className='msg-error'>{errorsBack.street.msg}</p> : null}
                        { errorsBack && errorsBack.door ? <p className='msg-error'>{errorsBack.door.msg}</p> : null}
                        { errorsBack && errorsBack.postalCode ? <p className='msg-error'>{errorsBack.postalCode.msg}</p> : null}
                        { errorsBack && errorsBack.state ? <p className='msg-error'>{errorsBack.state.msg}</p> : null}
                        { errorsBack && errorsBack.city ? <p className='msg-error'>{errorsBack.city.msg}</p> : null}
                        { errorsBack && errorsBack.description ? <p className='msg-error'>{errorsBack.description.msg}</p> : null}
                        { errorsBack && errorsBack.characteristics ? <p className='msg-error'>{errorsBack.characteristics.msg}</p> : null}
                        { errorsBack && errorsBack.question1 ? <p className='msg-error'>{errorsBack.question1.msg}</p> : null}
                        { errorsBack && errorsBack.question2 ? <p className='msg-error'>{errorsBack.question2.msg}</p> : null}
                        { errorsBack && errorsBack.question3 ? <p className='msg-error'>{errorsBack.question3.msg}</p> : null}
                        { errorsBack && errorsBack.question4 ? <p className='msg-error'>{errorsBack.question4.msg}</p> : null}
                    </div>

                    <button disabled={page === 0} style= {{backgroundColor: page === 0 ? "#777777" : ""}} onClick={handlePrev}>Volver</button>
                    {
                        page === 0 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777" 
                           : errors.dni 
                           ? "#777777" 
                           : errors.date 
                           ? "#777777" 
                           : errors.hour 
                           ? "#777777" 
                           : errors.minutes 
                           ? "#777777" 
                           : !datosFormu.dni 
                           ? "#777777" 
                           : !datosFormu.date 
                           ? "#777777" 
                           : !datosFormu.hour 
                           ? "#777777" 
                           : !datosFormu.minutes 
                           ? "#777777" 
                           : !validClient 
                           ? "#777777" 
                           : !datosFormu.policy 
                           ? "#777777" 
                           : ""}} 
                        onClick={handleNext}>Siguiente</button> 
                        : page === 1 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.raison 
                           ? "#777777" 
                           : !datosFormu.consequence 
                           ? "#777777"
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 2 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : errors.street 
                           ? "#777777" 
                           : errors.door 
                           ? "#777777" 
                           : errors.postalCode 
                           ? "#777777"
                           : errors.description 
                           ? "#777777"
                           : !datosFormu.street 
                           ? "#777777" 
                           : !datosFormu.door 
                           ? "#777777" 
                           : !datosFormu.postalCode 
                           ? "#777777"
                           : !datosFormu.description 
                           ? "#777777"
                           : !datosFormu.characteristics 
                           ? "#777777"
                           : !datosFormu.license_front 
                           ? "#777777"
                           : !datosFormu.license_back 
                           ? "#777777" 
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 3 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.question1 
                           ? "#777777"
                           : !datosFormu.question2 
                           ? "#777777"
                           : !datosFormu.question3 
                           ? "#777777"
                           : !datosFormu.question4 
                           ? "#777777"  
                           : ""}} 
                        onClick={handleNext}>Siguiente</button> 
                        : ""                
                    }

                    {page === formTitles.length - 1 
                    ? <button onClick={handleSend}>Enviar</button> 
                    : ""}
                </div>
            </div>
        </form>
    )
}

export default FormMoto
