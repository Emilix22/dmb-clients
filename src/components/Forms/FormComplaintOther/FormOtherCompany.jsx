import '../FormComplaintHome/FormHome.css'
import React, {useState} from 'react'
import DateTime from './BodyDateTimeCompany';
import Location from './BodyLocation';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner';
import {useNavigate} from 'react-router-dom';

function FormOtherCompany() {
    const [page, setPage] = useState(0);
    const history = useNavigate() 


    const formTitles = ['Ingrese el CUIT de la Empresa Asegurada y la Fecha y Hora del Siniestro', 'Indicanos dónde ocurrió y describí los hechos', 'Resumen del Siniestro a Denunciar'];


    const [datosFormu, setDatosFormu] = useState({
        //***************************paso1*********** */
        cuit: "",
        client_name: "",
        date: "",
        hour: "",
        minutes: "",
        //id_client: "",
        id_company: "",
        policy: "",
        policyNumber: "",
        //****************************paso2************/
        street: "",
        door: "",
        postalCode: "",
        city: "",
        state: {
            id: 0,
            name: ''
        },
        //****************************paso3**********************************/
        description: "",
        equipos_objetos_siniestrados: ""

    })

    const formData = new FormData();

    formData.append('date', datosFormu.date)
    formData.append('hour', datosFormu.hour)
    formData.append('minutes', datosFormu.minutes)
    //formData.append('id_client', datosFormu.id_client)
    formData.append('id_company', datosFormu.id_company)
    formData.append('policy', datosFormu.policy)
    formData.append('street', datosFormu.street)
    formData.append('door', datosFormu.door)
    formData.append('postalCode', datosFormu.postalCode)
    formData.append('state', datosFormu.state.name)
    formData.append('city', datosFormu.city)
    formData.append('description', datosFormu.description)
    formData.append('equipos_objetos_siniestrados', datosFormu.equipos_objetos_siniestrados)
    formData.append('denuncia_policial', datosFormu.denuncia_policial)

    


    const expressions = {
        date: /^\d{4}-\d{2}-\d{2}$/,
        cuit: /^\d{11,11}$/,
        hour: /^\d{2}/,
        minutes: /^\d{2}/,
        street: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/, // ver si agrego el punto a parte de letras y numeros
        door: /^\d{1,5}/,
        postalCode: /^[a-zA-Z0-9\s]{4,8}$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{20,100}$/,
        equipos_objetos_siniestrados: /^[a-zA-ZÀ-ÿ0-9\s]{4,100}$/,
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

        if((!errors.length > 0 && datosFormu.cuit && datosFormu.date && datosFormu.hour && datosFormu.minutes && validClient && datosFormu.policy) && page === 0) {
            return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.state && datosFormu.city && datosFormu.street && datosFormu.door && datosFormu.description && page === 1) {
           return setPage((prevState) => prevState + 1)
        }
    }

    const handlePrev = (event) => {
        event.preventDefault();
        setPage((prevState) => prevState - 1)
    }

    const handleSend = (event) => {
        event.preventDefault();
        //console.log(datosFormu)
        toast('Enviando Formulario...', {
            icon: "⌛"
        })
        
        fetch("https://dmb-back.online:3000/api/siniestros_otro/crear", {
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
                    setTimeout(() => {history(`/confirm-complaint/${datosFormu.cuit}`)}, 2000)
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
            return <Location 
            datosFormu={datosFormu} 
            setDatosFormu={setDatosFormu} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 2) {
            return <ConfirmSend 
            datosFormu={datosFormu} 
            />
        }
    }
    console.log(datosFormu)
    return (
        <form className='form' id='firmHome'>
            
            <Toaster richColors />

            <div className='infoProgressbar'>
                {page === 0 ? <span>Paso 1 de 3</span>
                : page === 1 ? <span>Paso 2 de 3</span>
                : <span>Paso 3 de 3</span>}
                <div className='progressbar'>
                    <div style={{width: page === 0 ? "33%" : page === 1 ? "66%" : "100%"}}></div>
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
                        { errorsBack && errorsBack.minutes ? <p className='msg-error'>{errorsBack.minutes.msg}</p> : null}
                        { errorsBack && errorsBack.street ? <p className='msg-error'>{errorsBack.street.msg}</p> : null}
                        { errorsBack && errorsBack.door ? <p className='msg-error'>{errorsBack.door.msg}</p> : null}
                        { errorsBack && errorsBack.postalCode ? <p className='msg-error'>{errorsBack.postalCode.msg}</p> : null}
                        { errorsBack && errorsBack.state ? <p className='msg-error'>{errorsBack.state.msg}</p> : null}
                        { errorsBack && errorsBack.city ? <p className='msg-error'>{errorsBack.city.msg}</p> : null}
                        { errorsBack && errorsBack.description ? <p className='msg-error'>{errorsBack.description.msg}</p> : null}
                    </div>
                    <button disabled={page === 0} style= {{backgroundColor: page === 0 ? "#777777" : ""}} onClick={handlePrev}>Volver</button>
                    {
                        page === 0 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777" 
                           : errors.cuit 
                           ? "#777777" 
                           : errors.date 
                           ? "#777777" 
                           : errors.hour 
                           ? "#777777" 
                           : errors.minutes 
                           ? "#777777" 
                           : !datosFormu.cuit 
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
                        style= {{backgroundColor: 
                           errors.description 
                           ? "#777777"
                           : errors.street 
                           ? "#777777" 
                           : errors.door 
                           ? "#777777" 
                           : errors.postalCode 
                           ? "#777777"
                           : !datosFormu.description 
                           ? "#777777"
                           : !datosFormu.street 
                           ? "#777777" 
                           : !datosFormu.door 
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

export default FormOtherCompany
