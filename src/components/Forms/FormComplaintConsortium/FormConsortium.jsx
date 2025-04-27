import '../FormComplaintHome/FormHome.css'
import React, {useState} from 'react'
import Description from './BodyDescription';
import DateTime from './BodyDateTimeConsortium';
import Raison from './BodyRaison';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner'
import {useNavigate} from 'react-router-dom'

function FormConsortium() {
    const BASE_URL = import.meta.env.VITE_REACT_BASE_URL
    const [page, setPage] = useState(0);
    const history = useNavigate() 


    const formTitles = ['Ingrese el DNI del Asegurado y la Fecha y Hora del Siniestro', 'Contanos que te ocurrió', 'Descripción de los hechos', 'Resumen del Siniestro a Denunciar'];


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
        raison: "seleccione",
        consequence: {
            incendio_contenido: false,
            incendio_edificio: false,
            cristales_rotura_accidental: false,
            cristales_rajadura_accidental: false,
            robo_mobiliario: false,
            por_agua_daños_al_mobiliario: false,
            otro_tipo_de_bienes: false
        },
        //****************************paso3**********************************/
        description: "",
        affected_objects: ""

    })

    const formData = new FormData();

    formData.append('date', datosFormu.date)
    formData.append('hour', datosFormu.hour)
    formData.append('minutes', datosFormu.minutes)
    formData.append('id_client', datosFormu.id_client)
    // formData.append('id_companyHome', datosFormu.id_company)
    formData.append('policy', datosFormu.policy)
    formData.append('incendio_contenido', datosFormu.consequence.incendio_contenido)
    formData.append('incendio_edificio', datosFormu.consequence.incendio_edificio)
    formData.append('cristales_rotura_accidental', datosFormu.consequence.cristales_rotura_accidental)
    formData.append('cristales_rajadura_accidental', datosFormu.consequence.cristales_rajadura_accidental)
    formData.append('robo_mobiliario', datosFormu.consequence.robo_mobiliario)
    formData.append('denuncia_mobiliario', datosFormu.police_complaint_mobiliario)
    formData.append('por_agua_daños_al_mobiliario', datosFormu.consequence.por_agua_daños_al_mobiliario)
    formData.append('otro_tipo_de_bienes', datosFormu.consequence.otro_tipo_de_bienes)
    formData.append('descripcion_hechos', datosFormu.description)
    formData.append('bienes_afectados', datosFormu.affected_objects)


    const expressions = {
        date: /^\d{4}-\d{2}-\d{2}$/,
        dni: /^\d{8,8}$/,
        hour: /^\d{2}/,
        minutes: /^\d{2}/,
        street: /^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/, // ver si agrego el punto a parte de letras y numeros
        door: /^\d{1,5}/,
        postalCode: /^[a-zA-Z0-9\s]{4,8}$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{20,255}$/,
        affected_objects: /^[a-zA-ZÀ-ÿ0-9\s]{4,255}$/,
        // name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
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
        if (datosFormu.raison === "seleccione" && page === 1) {
            return setErrors({...errors, raison: "Seleccione un tipo de siniestro"});
        }
        if (datosFormu.description === "" && page === 2) {
            return setErrors({...errors, description: "Ingrese una descripción"});
        }
        if (datosFormu.affected_objects === "" && page === 2) {
            return setErrors({...errors, affected_objects: "Indique los bienes afectados"});
        }
    }
    
    const handleNext = (event) => {
        event.preventDefault();
        validar()

        if((!errors.length > 0 && datosFormu.dni && datosFormu.date && datosFormu.hour && datosFormu.minutes && validClient && datosFormu.policy) && page === 0) {
            return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.raison !== "seleccione" && page === 1) {
           return setPage((prevState) => prevState + 1)
        } if (!errors.length > 0 && datosFormu.description && datosFormu.affected_objects && page === 2) {
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
        
        fetch(`${BASE_URL}/api/siniestros_consorcio/crear`, {
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
            return <Description 
            datosFormu={datosFormu} 
            setDatosFormu={setDatosFormu} 
            errors={errors} 
            setErrors={setErrors}
            expressions={expressions}
            />
        };
        if (page === 3) {
            return <ConfirmSend 
            datosFormu={datosFormu} 
            />
        };
    }

    return (
        <form className='form' id='firmHome'>
            
            <Toaster richColors />

            <div className='infoProgressbar'>
                {page === 0 ? <span>Paso 1 de 4</span>
                : page === 1 ? <span>Paso 2 de 4</span>
                : page === 2 ? <span>Paso 3 de 4</span> 
                : <span>Paso 4 de 4</span>}
                <div className='progressbar'>
                    <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%"}}></div>
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
                        { errorsBack && errorsBack.description ? <p className='msg-error'>{errorsBack.description.msg}</p> : null}
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
                           : datosFormu.raison === "seleccione" 
                           ? "#777777" 
                           : ""}} 
                        onClick={handleNext}>Siguiente</button>
                        : page === 2 ? <button
                        className='button-next' 
                        disabled={page === formTitles.length - 1} 
                        style= {{backgroundColor: page === formTitles.length - 1 
                           ? "#777777"  
                           : errors.description 
                           ? "#777777"
                           : errors.affected_objects 
                           ? "#777777"
                           : !datosFormu.description 
                           ? "#777777"
                           : !datosFormu.affected_objects 
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

export default FormConsortium
