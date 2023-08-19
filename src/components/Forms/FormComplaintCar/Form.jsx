import './Form.css'
import React, {useState} from 'react'
import Location from './BodyLocation';
import DateTime from './BodyDateTime';
import Raison from './BodyRaison';
import InformationParticular from './BodyInformationParticular';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner'

function Form() {

    const [page, setPage] = useState(0);

    const formTitles = ['Ingrese el DNI del Asegurado y la Fecha y Hora del Siniestro', 'Seleccione Motivo y Consecuencia', 'Indique Lugar del Siniestro', 'Información Particular', 'Resumen del Siniestro a Denunciar'];


    const [datosFormu, setDatosFormu] = useState({
        //***************************paso1*********** */
        dni: "",
        client_name: "",
        date: "",
        hour: "",
        minutes: "",
        id_client: "",
        policy: "",
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
        }

    })

    const [imgRegisterFront, setImgRegisterFront] = useState()

    const formData = new FormData();

    formData.append('dni', datosFormu.dni)
    formData.append('client_name', datosFormu.client_name)
    formData.append('date', datosFormu.date)
    formData.append('hour', datosFormu.hour)
    formData.append('minutes', datosFormu.minutes)
    formData.append('id_client', datosFormu.id_client)
    formData.append('policy', datosFormu.policy)
    //****************************paso2************/
    formData.append('raison', datosFormu.raison)
    formData.append('consequence', datosFormu.consequence)
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


    const expressions = {
        date: /^\d{4}-\d{2}-\d{2}$/,
        dni: /^\d{8,8}$/,
        hour: /^\d{2}/,
        minutes: /^\d{2}/,
        street: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/, // ver si agrego el punto a parte de letras y numeros
        door: /^\d{1,5}/,
        postalCode: /^[a-zA-Z0-9\s]{4,8}$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{20,100}$/,
        // name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
        // surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
        // password: /^.{4,12}$/,
        // email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [errors, setErrors] = useState({});

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
        toast.success('Formulario Enviado!')
        console.log(datosFormu)

        fetch("http://localhost:3000/api/siniestros_auto/crear", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(info => {
           console.log(info)
        })
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

export default Form
