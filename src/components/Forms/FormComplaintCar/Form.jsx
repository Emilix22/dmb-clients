import './Form.css'
import React, {useState} from 'react'
import Location from './BodyLocation';
import DateTime from './BodyDateTime';
import Raison from './BodyRaison';
import InformationParticular from './BodyInformationParticular';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner'
import {useNavigate} from 'react-router-dom'

function Form() {
    const BASE_URL = import.meta.env.VITE_REACT_BASE_URL

    const [page, setPage] = useState(0);
    const history = useNavigate() 

    const formTitles = ['Ingrese el DNI del Asegurado y la Fecha y Hora del Siniestro', 'Contanos que te Ocurrió', 'Indicanos dónde Ocurrió', 'Información Particular', 'Resumen del Siniestro a Denunciar'];


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
        // img_rueda: undefined,
        //***************************paso4*********** */
        question1: "",
        question2: "",
        //question3: "",
        question4: "",
        driver_not_client: {
            dnc_name: "",
            dnc_surname: "",
            dnc_DNI: "",
            dnc_phone: "",
            dnc_birthday: "0000-00-00",
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
            iic_name3: "",
            iic_name4: "",
            iic_name5: "",
            iic_surname1: "",
            iic_surname2: "",
            iic_surname3: "",
            iic_surname4: "",
            iic_surname5: "",
            iic_dni1: "",
            iic_dni2: "",
            iic_dni3: "",
            iic_dni4: "",
            iic_dni5: "",
            iic_phone1: "",
            iic_phone2: "",
            iic_phone3: "",
            iic_phone4: "",
            iic_phone5: ""
        },
        other_car: {
            oc_patent: "",
            oc_insurance: "",
            // oc_name: "",
            // oc_surname: "",
            // oc_dni: "",
        },
        lock: "",
        crystals: "",
        lock_baul: false,
        lock_rigth: false,
        lock_left: false,
        crystals_luneta: false,
        crystals_parabrisas: false,
        crystals_del_derecha: false,
        crystals_del_izquierda: false,
        crystals_tras_derecha: false,
        crystals_tras_izquierda: false,
        repo_city: "",
        repo_state: {
            id: 0,
            name: ''
        },
        rueda_auxilio: false,
        rueda_del_derecha: false,
        rueda_del_izquierda: false,
        rueda_tras_derecha: false,
        rueda_tras_izquierda: false,
        otroAuto: []

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
    //formData.append('question3', datosFormu.question3)
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
    formData.append('iic_name3', datosFormu.injured_in_car.iic_name3)
    formData.append('iic_name4', datosFormu.injured_in_car.iic_name4)
    formData.append('iic_name5', datosFormu.injured_in_car.iic_name5)
    formData.append('iic_surname1', datosFormu.injured_in_car.iic_surname1)
    formData.append('iic_surname2', datosFormu.injured_in_car.iic_surname2)
    formData.append('iic_surname3', datosFormu.injured_in_car.iic_surname3)
    formData.append('iic_surname4', datosFormu.injured_in_car.iic_surname4)
    formData.append('iic_surname5', datosFormu.injured_in_car.iic_surname5)
    formData.append('iic_dni1', datosFormu.injured_in_car.iic_dni1)
    formData.append('iic_dni2', datosFormu.injured_in_car.iic_dni2)
    formData.append('iic_dni3', datosFormu.injured_in_car.iic_dni3)
    formData.append('iic_dni4', datosFormu.injured_in_car.iic_dni4)
    formData.append('iic_dni5', datosFormu.injured_in_car.iic_dni5)
    formData.append('iic_phone1', datosFormu.injured_in_car.iic_phone1)
    formData.append('iic_phone2', datosFormu.injured_in_car.iic_phone2)
    formData.append('iic_phone3', datosFormu.injured_in_car.iic_phone3)
    formData.append('iic_phone4', datosFormu.injured_in_car.iic_phone4)
    formData.append('iic_phone5', datosFormu.injured_in_car.iic_phone5)
    
    formData.append('lock', datosFormu.lock)
    formData.append('lock_baul', datosFormu.lock_baul)
    formData.append('lock_rigth', datosFormu.lock_rigth)
    formData.append('lock_left', datosFormu.lock_left)

    formData.append('crystals', datosFormu.crystals)
    formData.append('crystals_luneta', datosFormu.crystals_luneta)
    formData.append('crystals_parabrisas', datosFormu.crystals_parabrisas)
    formData.append('crystals_del_derecha', datosFormu.crystals_del_derecha)
    formData.append('crystals_del_izquierda', datosFormu.crystals_del_izquierda)
    formData.append('crystals_tras_derecha', datosFormu.crystals_tras_derecha)
    formData.append('crystals_tras_izquierda', datosFormu.crystals_tras_izquierda)

    formData.append('rueda_auxilio', datosFormu.rueda_auxilio)
    formData.append('rueda_del_derecha', datosFormu.rueda_del_derecha)
    formData.append('rueda_del_izquierda', datosFormu.rueda_del_izquierda)
    formData.append('rueda_tras_derecha', datosFormu.rueda_tras_derecha)
    formData.append('rueda_tras_izquierda', datosFormu.rueda_tras_izquierda)
    formData.append('img_rueda', datosFormu.img_rueda)

    formData.append('vehiculos_terceros_inv', datosFormu.otroAuto)

    // formData.append('oc_patent', datosFormu.other_car.oc_patent)// lo cargo desde el formQuestion4
    // formData.append('oc_insurance', datosFormu.other_car.oc_insurance)// lo cargo desde el formQuestion4
    // formData.append('oc_name', datosFormu.other_car.oc_name)
    // formData.append('oc_surname', datosFormu.other_car.oc_surname)
    // formData.append('oc_dni', datosFormu.other_car.oc_dni)

    const expressions = {
        date: /^\d{4}-\d{2}-\d{2}$/,
        dni: /^\d{8,8}$/,
        hour: /^\d{2}/,
        minutes: /^\d{2}/,
        street: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/, // ver si agrego el punto a parte de letras y numeros
        door: /^\d{1,5}/,
        postalCode: /^[a-zA-Z0-9\s]{4,8}$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{20,500}$/,
        // raison: /^[a-zA-ZÀ-ÿ\s]$/,
        // surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        // password: /^.{4,12}$/,
        // email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [errors, setErrors] = useState({});
    const [errorsBack, setErrorsBack] = useState();

    const [validClient, setValidClient] = useState("");
    
    const [client, setClient] = useState();

    const validar = () => {

        if (datosFormu.dni === "") {
            return setErrors({ ...errors, dni: "Ingrese un DNI" });
        }
        if (datosFormu.date === "") {
            return setErrors({ ...errors, date: "Seleccione una fecha" });
        }
        if (datosFormu.minutes === "") {
            return setErrors({ ...errors, minutes: "Seleccione los minutos" });
        }
        if (datosFormu.hour === "") {
            return setErrors({...errors, hour: "Seleccione la hora"});
        }
        if (validClient === "") {
            return setErrors({...errors, validClient: "Valide el DNI"});
        }
        if (datosFormu.policy === "") {
            return setErrors({...errors, policy: "Seleccione una póliza"});
        }
        if (datosFormu.raison === "" && page === 1) {
            return setErrors({...errors, raison: "Seleccione un motivo"});
        }
        if (datosFormu.consequence === "" && page === 1) {
            return setErrors({...errors, consequence: "Seleccione una consecuencia"});
        }
        if (datosFormu.state.name === "" && page === 2) {
            return setErrors({...errors, state: "Seleccione una provincia"});
        }
        if (datosFormu.city === "" && page === 2) {
            return setErrors({...errors, city: "Seleccione una localidad"});
        }
        if (datosFormu.street === "" && page === 2) {
            return setErrors({...errors, street: "Ingrese una calle"});
        }
        if (datosFormu.door === "" && page === 2) {
            return setErrors({...errors, door: "Ingrese una altura"});
        }
        if (datosFormu.description === "" && page === 2) {
            return setErrors({...errors, description: "Ingrese una descripción"});
        }
        if (datosFormu.characteristics === "" && page === 2) {
            return setErrors({...errors, characteristics: "Seleccione una característica"});
        }
        if (datosFormu.question1 === "" && page === 3) {
            return setErrors({...errors, question1: "Indique si conducía o no el asegurado"});
        }
        if (!datosFormu.license_front && page === 3) {
            return setErrors({...errors, license_front: "Adjunte la foto del frente del registro"});
        }
        if (!datosFormu.license_back && page === 3) {
            return setErrors({...errors, license_back: "Adjunte la foto del dorso del registro"});
        }
        if (datosFormu.question2 === "" && page === 3) {
            return setErrors({...errors, question2: "Indique si hubo o no lesionados dentro del vehículo"});
        }
        if (datosFormu.question4 === "" && page === 3) {
            return setErrors({...errors, question4: "Indique si hubo o no vehículos de terceros involucrados"});
        }
    }
    
    const handleNext = (event) => {
        event.preventDefault();

        validar();

        if((!errors.length > 0 && datosFormu.dni && datosFormu.date && datosFormu.hour && datosFormu.minutes && validClient && datosFormu.policy) && page === 0) {
            return setPage((prevState) => prevState + 1)
        } 

        if (!errors.length > 0 && datosFormu.raison && datosFormu.consequence && page === 1) {
           return setPage((prevState) => prevState + 1)
        } 
        
        if (!errors.length > 0 && datosFormu.state && datosFormu.city && datosFormu.street && datosFormu.door && datosFormu.description && datosFormu.characteristics && page === 2) {
           return setPage((prevState) => prevState + 1)
        }

        if (!errors.length > 0 && datosFormu.raison === 'cristales y cerraduras' && datosFormu.question1 && datosFormu.license_front && datosFormu.license_back && datosFormu.repo_city && datosFormu.repo_state && page === 3) {
            return setPage((prevState) => prevState + 1)
        }

        if (!errors.length > 0 && datosFormu.raison === 'accidente' && datosFormu.question1 && datosFormu.license_front && datosFormu.license_back && datosFormu.question2 && datosFormu.question4 && page === 3) {
            return setPage((prevState) => prevState + 1)
        }

        if (!errors.length > 0 && (datosFormu.raison === 'granizo' || datosFormu.consequence === 'robo total del vehículo' || datosFormu.consequence === 'robo parcial') && datosFormu.question1 && datosFormu.license_front && datosFormu.license_back && page === 3) {
            return setPage((prevState) => prevState + 1)
        }

        if (!errors.length > 0 && datosFormu.consequence === 'robo de ruedas' && datosFormu.question1 && datosFormu.license_front && datosFormu.license_back && datosFormu.img_rueda && datosFormu.repo_city && datosFormu.repo_state && page === 3) {
            return setPage((prevState) => prevState + 1)
        }
         
        if (!errors.length > 0 && page === 4) {
            return setPage((prevState) => prevState + 1)
        }
        
    }

    const handlePrev = (event) => {
        event.preventDefault();
        setPage((prevState) => prevState - 1)
    }

    const handleSend = (event) => {
        event.preventDefault();
        //return console.log(datosFormu)
        toast('Enviando Formulario...', {
            icon: "⌛"
        })

    
        fetch(`${BASE_URL}/api/siniestros_auto/crear`, {
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
            formData={formData}
            />
        };
        if (page === 4) {
            return <ConfirmSend 
            datosFormu={datosFormu} 
            />
        };

    }
    // console.log(datosFormu)
    // console.log(errorsBack)
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
                           : errors.description 
                           ? "#777777"
                           : !datosFormu.street 
                           ? "#777777" 
                           : !datosFormu.door 
                           ? "#777777" 
                        //    : !datosFormu.postalCode 
                        //    ? "#777777"
                           : !datosFormu.description 
                           ? "#777777"
                           : !datosFormu.characteristics 
                           ? "#777777"
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 3 && datosFormu.raison === 'cristales y cerraduras' ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.question1 
                           ? "#777777"
                           : !datosFormu.repo_city 
                           ? "#777777"
                           : !datosFormu.repo_state 
                           ? "#777777"
                           : !datosFormu.license_front 
                           ? "#777777"
                           : !datosFormu.license_back 
                           ? "#777777"   
                           : ""}} 
                        onClick={handleNext}>Siguiente</button> 
                        : page === 3 && datosFormu.raison === 'accidente' ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.question1 
                           ? "#777777"
                           : !datosFormu.question2 
                           ? "#777777"
                           : !datosFormu.question4 
                           ? "#777777"
                           : !datosFormu.license_front 
                           ? "#777777"
                           : !datosFormu.license_back 
                           ? "#777777"   
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 3 && (datosFormu.raison === 'granizo' || datosFormu.consequence === 'robo total del vehículo' || datosFormu.consequence === 'robo parcial') ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.question1 
                           ? "#777777"
                           : !datosFormu.license_front 
                           ? "#777777"
                           : !datosFormu.license_back 
                           ? "#777777"   
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 3 && datosFormu.consequence === 'robo de ruedas' ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !datosFormu.question1 
                           ? "#777777"
                           : !datosFormu.license_front 
                           ? "#777777"
                           : !datosFormu.license_back 
                           ? "#777777"   
                           : !datosFormu.img_rueda 
                           ? "#777777"
                           : !datosFormu.repo_city 
                           ? "#777777"
                           : !datosFormu.repo_state 
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

export default Form
