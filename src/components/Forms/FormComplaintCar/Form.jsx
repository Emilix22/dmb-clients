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


    const [formData, setFormData] = useState({
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
        license_front: null,
        license_back: null,
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

        if((!errors.length > 0 && formData.dni && formData.date && formData.hour && formData.minutes && validClient && formData.policy) && page === 0) {
            return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && formData.raison && formData.consequence && page === 1) {
           return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && formData.state && formData.city && formData.street && formData.door && formData.postalCode && formData.description && formData.characteristics && formData.license_front && formData.license_back && page === 2) {
           return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && formData.question1 && formData.question2 && formData.question3 && formData.question4 && page === 3) {
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
        console.log(formData)

        const createComplaintCar = async () => {
            const response = await fetch(
              "http://localhost:3000/api/siniestros_auto/crear",
              {
                method: "POST",
                body: JSON.stringify({
                  formData
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const info = await response.json();
            console.log(info.data);
        };
        createComplaintCar();

    }

    const formDisplay = () => {
        if (page === 0) {
            return <DateTime 
                    formData={formData} 
                    setFormData={setFormData} 
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
            formData={formData} 
            setFormData={setFormData} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}   
            />
        };
        if (page === 2) {
            return <Location 
            formData={formData} 
            setFormData={setFormData} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 3) {
            return <InformationParticular 
            formData={formData} 
            setFormData={setFormData} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 4) {
            return <ConfirmSend 
            formData={formData} 
            />
        };

    }
    // console.log(formData)
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
                           : !formData.dni 
                           ? "#777777" 
                           : !formData.date 
                           ? "#777777" 
                           : !formData.hour 
                           ? "#777777" 
                           : !formData.minutes 
                           ? "#777777" 
                           : !validClient 
                           ? "#777777" 
                           : !formData.policy 
                           ? "#777777" 
                           : ""}} 
                        onClick={handleNext}>Siguiente</button> 
                        : page === 1 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !formData.raison 
                           ? "#777777" 
                           : !formData.consequence 
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
                           : !formData.street 
                           ? "#777777" 
                           : !formData.door 
                           ? "#777777" 
                           : !formData.postalCode 
                           ? "#777777"
                           : !formData.description 
                           ? "#777777"
                           : !formData.characteristics 
                           ? "#777777"
                           : !formData.license_front 
                           ? "#777777"
                           : !formData.license_back 
                           ? "#777777" 
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 3 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : !formData.question1 
                           ? "#777777"
                           : !formData.question2 
                           ? "#777777"
                           : !formData.question3 
                           ? "#777777"
                           : !formData.question4 
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
