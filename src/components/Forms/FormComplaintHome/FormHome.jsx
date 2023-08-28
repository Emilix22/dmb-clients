import './FormHome.css'
import React, {useState} from 'react'
import Description from './BodyDescription';
import DateTime from './BodyDateTimeHome';
import Raison from './BodyRaison';
import ConfirmSend from './ConfirmSend';
import { Toaster, toast } from 'sonner'

function FormHome() {

    const [page, setPage] = useState(0);

    const formTitles = ['Ingrese el DNI del Asegurado y la Fecha y Hora del Siniestro', 'Seleccione Tipo y Motivo', 'Descripción de los hechos', 'Resumen del Siniestro a Denunciar'];


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
        raison: "seleccione",
        consequence: {
            incendio_contenido_total: false,
            incendio_contenido_parcial: false,
            incendio_edificio_total: false,
            incendio_edificio_parcial: false,
            granizo: false,
            vientos_fuertes: false,
            impacto_en_vehículos_terrestres: false,
            rayo_directo: false,
            linderos: false,
            cristales_rotura_accidental: false,
            cristales_rajadura_accidental: false,
            mobiliario_daño_parcial: false,
            mobiliario_robo_parcial: false,
            mobiliario_robo_total: false,
            objetos_daño_parcial: false,
            objetos_daño_total: false,
            objetos_robo_total: false,
            notebook_daño_parcial: false,
            notebook_daño_total: false,
            notebook_robo_parcial: false,
            notebook_robo_total: false,
            electrónicos_robo: false,
            electrónicos_daño_parcial_accidente: false,
            electrónicos_daño_parcial_alta_baja_tensión: false,
            electrónicos_daño_total_accidente: false,
            electrónicos_daño_total_alta_baja_tensión: false,
            bicicletas_robo: false,
            bicicletas_incendio: false,
            por_agua_daños_al_mobiliario: false,
            daños_a_objetos: false,
            lesiones_a_personas: false,
            muerte_a_personas: false,
            otro_tipo_de_bienes: false
        },
    //****************************paso3**********************************/
        description: "",
        affected_objects: ""

    })

    const formData = new FormData();

    formData.append('dni', datosFormu.dni)
    formData.append('client_name', datosFormu.client_name)
    formData.append('date', datosFormu.date)
    formData.append('hour', datosFormu.hour)
    formData.append('minutes', datosFormu.minutes)
    formData.append('id_client', datosFormu.id_client)
    formData.append('policy', datosFormu.policy)
    //****************************paso2**********************************/
    formData.append('raison', datosFormu.raison)
    formData.append('incendio_contenido_total', datosFormu.consequence.incendio_contenido_total)
    formData.append('incendio_contenido_parcial',datosFormu.consequence.incendio_contenido_parcial)
    formData.append('incendio_edificio_total', datosFormu.consequence.incendio_edificio_total)
    formData.append('incendio_edificio_parcial', datosFormu.consequence.incendio_edificio_parcial)
    formData.append('granizo', datosFormu.consequence.granizo)
    formData.append('vientos_fuertes', datosFormu.consequence.vientos_fuertes)
    formData.append('impacto_en_vehículos_terrestres', datosFormu.consequence.impacto_en_vehículos_terrestres)
    formData.append('rayo_directo', datosFormu.consequence.rayo_directo)
    formData.append('linderos', datosFormu.consequence.linderos)
    formData.append('cristales_rotura_accidental', datosFormu.consequence.cristales_rotura_accidental)
    formData.append('cristales_rajadura_accidental', datosFormu.consequence.cristales_rajadura_accidental)
    formData.append('mobiliario_daño_parcial', datosFormu.consequence.mobiliario_daño_parcial)
    formData.append('mobiliario_robo_parcial', datosFormu.consequence.mobiliario_robo_parcial)
    formData.append('mobiliario_robo_total', datosFormu.consequence.mobiliario_robo_total)
    formData.append('objetos_daño_parcial', datosFormu.consequence.objetos_daño_parcial)
    formData.append('objetos_daño_total', datosFormu.consequence.objetos_daño_total)
    formData.append('objetos_robo_total', datosFormu.consequence.objetos_robo_total)
    formData.append('notebook_daño_parcial', datosFormu.consequence.notebook_daño_parcial)
    formData.append('notebook_daño_total', datosFormu.consequence.notebook_daño_total)
    formData.append('notebook_robo_parcial', datosFormu.consequence.notebook_robo_parcial)
    formData.append('notebook_robo_total', datosFormu.consequence.notebook_robo_total)
    formData.append('electrónicos_robo', datosFormu.consequence.electrónicos_robo)
    formData.append('electrónicos_daño_parcial_accidente', datosFormu.consequence.electrónicos_daño_parcial_accidente)
    formData.append('electrónicos_daño_parcial_alta_baja_tensión', datosFormu.consequence.electrónicos_daño_parcial_alta_baja_tensión)
    formData.append('electrónicos_daño_total_accidente', datosFormu.consequence.electrónicos_daño_total_accidente)
    formData.append('electrónicos_daño_total_alta_baja_tensión', datosFormu.consequence.electrónicos_daño_total_alta_baja_tensión)
    formData.append('bicicletas_robo', datosFormu.consequence.bicicletas_robo)
    formData.append('bicicletas_incendio', datosFormu.consequence.bicicletas_incendio)
    formData.append('por_agua_daños_al_mobiliario', datosFormu.consequence.por_agua_daños_al_mobiliario)
    formData.append('daños_a_objetos', datosFormu.consequence.daños_a_objetos)
    formData.append('lesiones_a_personas', datosFormu.consequence.lesiones_a_personas)
    formData.append('muerte_a_personas', datosFormu.consequence.muerte_a_personas)
    formData.append('otro_tipo_de_bienes', datosFormu.consequence.otro_tipo_de_bienes)
    
    //****************************paso3**********************************/
    formData.append('description', datosFormu.description)
    formData.append('affected_objects', datosFormu.affected_objects)


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

        fetch("http://localhost:3000/api/siniestros_hogar/crear", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(info => {
           console.log(info)
           toast.success('Formulario Enviado!')
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
        <form className='form'>
            
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

export default FormHome
