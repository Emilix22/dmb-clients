import React, { useEffect, useState } from 'react'
import FormQuestion1 from './FormQuestion1'
import FormQuestion2 from './FormQuestion2'
//import FormQuestion3 from './FormQuestion3'
import FormQuestion4 from './FormQuestion4'
import imgRegistroFrente from '../../../assets/licenseFront.jpg'
import imgRegistroDorso from '../../../assets/licenseBack.jpg'
import imgRueda from '../../../assets/ImgRueda.png'

function InformationParticular({ datosFormu, setDatosFormu, errors, setErrors, expressions, formData }) {

    const barriosCABA = [
        "Almagro",
        "Balvanera",
        "Barracas",
        "Belgrano",
        "Boedo",
        "Caballito",
        "Chacarita",
        "Coghlan",
        "Constitución",
        "Flores",
        "Floresta",
        "La Boca",
        "La Paternal",
        "Liniers",
        "Mataderos",
        "Monte Castro",
        "Montserrat",
        "Nueva Pompeya",
        "Nuñez",
        "Palermo",
        "Parque Avellaneda",
        "Parque Chacabuco",
        "Parque Chas",
        "Parque Patricios",
        "Puerto Madero",
        "Recoleta",
        "Retiro",
        "Saavedra",
        "San Cristóbal",
        "San Nicolás",
        "San Telmo",
        "Versalles",
        "Villa Crespo",
        "Villa Devoto",
        "Villa General Mitre",
        "Villa Lugano",
        "Villa Luro",
        "Villa Ortúzar",
        "Villa Pueyrredón",
        "Villa Real",
        "Villa Riachuelo",
        "Villa Santa Rita",
        "Villa Soldati",
        "Villa Urquiza",
        "Villa del Parque",
        "Vélez Sarsfield"
    ]

    const [multiQ2, setMultiQ2] = useState([])

    useEffect(() => {
        
        datosFormu.injured_in_car.iic_quantity === "1" 
        ? setMultiQ2([1]) 
        : datosFormu.injured_in_car.iic_quantity === "2" 
        ? setMultiQ2([1, 2]) 
        : datosFormu.injured_in_car.iic_quantity === "3" 
        ? setMultiQ2([1, 2, 3]) 
        : datosFormu.injured_in_car.iic_quantity === "4" 
        ? setMultiQ2([1, 2, 3, 4])
        : Number(datosFormu.injured_in_car.iic_quantity) >= 5 
        ? setMultiQ2([1, 2, 3, 4, 5])
        : setMultiQ2([])  
    }, [datosFormu.injured_in_car.iic_quantity]);

    const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // const [streets, setStreets] = useState([])
  // const [totalStreet, setTotalStreets] = useState(10)

  /**************************************PROVINCIAS */
  useEffect(() => {
    const loadStates = async () => {
      const response = await fetch(
        "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
      );
      const info = await response.json();
      setStates(info.provincias);
    };
    loadStates();
  }, [datosFormu.repo_state.name]);

  /*************************************MUNICIPIOS */

  useEffect(() => {
    const loadCities = async () => {
      const response = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${Number(datosFormu.repo_state.id)}&campos=id,nombre&max=1000`
      );
     
      const info = await response.json();
      setCities(info.localidades);
    };
    loadCities();
  }, [datosFormu.repo_state]); // hacer lo del máximo **!!!!**************************************************

    return (
        <div className='form-InformationParticular'>
            <div className="form-group-1">
                <span className='question' htmlFor="question1">¿Conducía el Asegurado?</span>
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
                    {
                        datosFormu.raison === 'cristales y cerraduras' || datosFormu.consequence === 'robo de ruedas' ? <div className='estacionado'><label htmlFor="question1N">Estacionado</label>
                        <input
                            type="radio"
                            name="question1"
                            id="question1N"
                            value={"estacionado"}
                            onClick={(e) => setDatosFormu({ ...datosFormu, question1: e.target.value })}
                        /></div>
                        : null
                    }
                </div>
                
                {errors.question1 ? <span className="msg-error">{errors.question1}</span> : ""}
            </div>
            <div className='fotos-registro'>
            <div className="form-group-1 form-group-2" id="form-group-img-license-front">
                <label className='label-registro' htmlFor="img-license-front"><img src={imgRegistroFrente} alt="imgRegistroFront" /> Foto del Registro de Conducir <strong>FRENTE</strong>:</label>          
                <input 
                type="file" 
                name="img-license-front" 
                // value={datosFormu.license_front}
                onChange={(e) => setDatosFormu({ ...datosFormu, license_front: e.target.files[0]})}
                /> 
            </div>
            <div className="form-group-1 form-group-2" id="form-group-img-license-back">
                <label className='label-registro' htmlFor="img-license-back"><img src={imgRegistroDorso} alt="imgRegistroBack" /> Foto del Registro de Conducir <strong>DORSO</strong>:</label>          
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
                <span className='question' htmlFor="2">¿Hubo lesionados dentro del vehículo?</span>
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
                <label htmlFor="iic_quantity">Cantidad de Lesionados <strong>Dentro del Vehículo</strong></label>
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
            {
                datosFormu.raison === 'cristales y cerraduras' 
                ? <div className="form-group-1">
                    <h4>Selección de Daños</h4>
                    <div className='selct-daños'>
                        <div>
                           <span className='question' htmlFor="lock">Cerradura</span>
                        <div className='select-yes-no'>
                            <label htmlFor="lockS">Si</label>
                                <input
                                    type="radio"
                                    name="lock"
                                    id="lockS"
                                    value={"si"}
                                    onClick={(e) => setDatosFormu({ ...datosFormu, lock: e.target.value })}
                                />
                                <label htmlFor="lockN">No</label>
                                <input
                                    type="radio"
                                    name="lock"
                                    id="lockN"
                                    value={"no"}
                                    onClick={(e) => setDatosFormu({ ...datosFormu, lock: e.target.value })}
                                />
                        </div> 
                        </div>
                        
                        <div>
                           <span className='question' htmlFor="crystals">Cristales</span>
                        <div className='select-yes-no'>
                            <label htmlFor="crystalsS">Si</label>
                                <input
                                    type="radio"
                                    name="crystals"
                                    id="crystalsS"
                                    value={"si"}
                                    onClick={(e) => setDatosFormu({ ...datosFormu, crystals: e.target.value })}
                                />
                                <label htmlFor="crystalsN">No</label>
                                <input
                                    type="radio"
                                    name="crystals"
                                    id="crystalsN"
                                    value={"no"}
                                    onClick={(e) => setDatosFormu({ ...datosFormu, crystals: e.target.value })}
                                />
                        </div> 
                        </div>
                    </div>
                    {
                        datosFormu.lock === 'si' 
                        ? <div className='check-lock'>
                            <span>Cerradura</span>
                            <div className='check-group'>
                                <label htmlFor="baul">Baúl</label>
                                <input type="checkbox" name="baul" id="chkBaul" onChange={(e) => setDatosFormu({ ...datosFormu, lock_baul: e.target.checked })} />
                            </div>
                            <div className='check-group'>
                                <label htmlFor="derecha">Derecha</label>
                                <input type="checkbox" name="derecha" id="chkDerecha" onChange={(e) => setDatosFormu({ ...datosFormu, lock_rigth: e.target.checked })} />
                            </div>
                            <div className='check-group'>
                                <label htmlFor="izquierda">Izquierda</label>
                                <input type="checkbox" name="izquierda" id="chkIzquierda" onChange={(e) => setDatosFormu({ ...datosFormu, lock_left: e.target.checked })} />
                            </div>                                
                        </div> : null
                    }
                    {
                        datosFormu.crystals === 'si' 
                        ? <div className='check-crystals'>
                            <span>Cristales</span>
                            <div className='check-group'>        
                                <label htmlFor="luneta">Luneta</label>
                                <input type="checkbox" name="luneta" id="chkLuneta" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_luneta: e.target.checked })} />
                            </div>
                            <div className='check-group'>
                                <label htmlFor="parabrisas">Parabrisas</label>
                                <input type="checkbox" name="parabrisas" id="chkParabrisas" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_parabrisas: e.target.checked })} />
                            </div>
                            <div className='check-group'>
                                <label htmlFor="ventDelDer">Ventanilla Delantera Derecha</label>
                                <input type="checkbox" name="ventDelDer" id="chkventDelDer" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_del_derecha: e.target.checked })} />
                            </div>    
                            <div className='check-group'>
                                <label htmlFor="ventDelIzq">Ventanilla Delantera Izquierda</label>
                                <input type="checkbox" name="ventDelIzq" id="chkventDelIzq" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_del_izquierda: e.target.checked })} />
                            </div>
                            <div className='check-group'>
                                <label htmlFor="ventTrasDer">Ventanilla Trasera Derecha</label>
                                <input type="checkbox" name="ventTrasDer" id="chkventTrasDer" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_tras_derecha: e.target.checked })} />
                            </div>                                
                            <div className='check-group'>
                                <label htmlFor="ventTrasIzq">Ventanilla Trasera Izquierda</label>
                                <input type="checkbox" name="ventTrasIzq" id="chkventTrasIzq" onChange={(e) => setDatosFormu({ ...datosFormu, crystals_tras_izquierda: e.target.checked })} />
                            </div>                                
                        </div> : null
                    }
                </div> 
                : null
            }

            {
                datosFormu.consequence === 'robo de ruedas' 
                ? <div>
                    <div className='check-crystals'>
                        <span>Rueda/s Robada/s</span>
                        <div className='check-group'>        
                            <label htmlFor="auxilio">Rueda de Auxilio</label>
                            <input type="checkbox" name="auxilio" id="chkAuxilio" onChange={(e) => setDatosFormu({ ...datosFormu, rueda_auxilio: e.target.checked })} />
                        </div>
                        <div className='check-group'>
                            <label htmlFor="delDerecha">Rueda Delantera Derecha</label>
                            <input type="checkbox" name="delDerecha" id="chkDelDerecha" onChange={(e) => setDatosFormu({ ...datosFormu, rueda_del_derecha: e.target.checked })} />
                        </div>
                        <div className='check-group'>
                            <label htmlFor="delIzq">Rueda Delantera Izquierda</label>
                            <input type="checkbox" name="delIzq" id="chkDelIzq" onChange={(e) => setDatosFormu({ ...datosFormu, rueda_del_izquierda: e.target.checked })} />
                        </div>    
                        <div className='check-group'>
                            <label htmlFor="trasDer">Rueda Trasera Derecha</label>
                            <input type="checkbox" name="trasDer" id="chkTrasDer" onChange={(e) => setDatosFormu({ ...datosFormu, rueda_tras_derecha: e.target.checked })} />
                        </div>
                        <div className='check-group'>
                            <label htmlFor="trasIzq">Rueda Trasera Izquierda</label>
                            <input type="checkbox" name="trasIzq" id="chkTrasIzq" onChange={(e) => setDatosFormu({ ...datosFormu, rueda_tras_izquierda: e.target.checked })} />
                        </div>                                                               
                    </div>
                    <div className="form-group-1" id="form-group-img-rueda">
                    <div className="form-group-1 form-group-2" id="form-group-img-rueda1">
                        <label className='label-rueda' htmlFor="img-rueda">Subí la Foto de Otra de las Ruedas (Según Modelo)</label>          
                        <input 
                        type="file" 
                        name="img-rueda" 
                        // value={datosFormu.license}
                        onChange={(e) => setDatosFormu({ ...datosFormu, img_rueda: e.target.files[0]})}
                        />                        
                    </div>
                    <div className="form-group-1 form-group-2" id="form-group-img-rueda2">
                        <label>Modelo de la Información que debe verse en la foto de la Rueda</label>
                        <img className='imgRueda' src={imgRueda} alt="imgRueda" />
                        </div>
                    </div>
                </div>  : null
            }

            {
                datosFormu.raison === 'cristales y cerraduras' || datosFormu.consequence === 'robo de ruedas' 
                ? <div className="form-group-1">
                <span className='question' htmlFor="question1">Indicanos dónde preferís que se emita el voucher de reposición</span>
                <div className="info-location">
                <div className="form-group-1 form-group-2">
                    <label htmlFor="state">Provincia</label>
                    <select
                        name="state"
                        id="state"
                        value={datosFormu.repo_state[1]}
                        onChange={(e) => 
                            setDatosFormu({
                                ...datosFormu,
                                repo_state: {
                                    id: e.target.value.slice(0, 2),
                                    name: e.target.value.slice(3),
                                },
                            })  
                        }                   
                    >
                    <option value="">Seleccione una Provincia...</option>
                    <option value={["06", "Buenos Aires"]}>Buenos Aires</option>
                    <option value={["02", "Ciudad Autónoma de Buenos Aires"]}>Ciudad Autónoma de Buenos Aires</option>
                    {states
                    ? states.map((state, index) => {
                        return (
                            <option value={[state.id, state.nombre]} key={state + index}>
                            {state.nombre}
                            </option>
                        );
                        })
                    : ""}
                    </select>
                    {
                        errors.state ? <span className='msg-error'>{errors.state}</span> : ""
                    }
                </div>

                <div className="form-group-1 form-group-2">
                    <label htmlFor="city">Localidad</label>
                    <select
                        name="city"
                        id="city"
                        value={datosFormu.repo_city}
                        onChange={(e) => setDatosFormu({ ...datosFormu, repo_city: e.target.value })}
                    >
                        {datosFormu.repo_state.id === "02" 
                        ? barriosCABA.map((barrio, index) => {
                            return (
                                <option value={barrio} key={barrio + index}>
                                {barrio}
                                </option>
                            );
                        }) : "" 
                        }

                        {
                        datosFormu.repo_state.name ? <option value="">Seleccione una Localidad...</option> : <option value=""></option>
                        }
                
                        {cities && datosFormu.repo_state.id != "02"
                        ? cities.map((city, index) => {
                            return <option value={city.nombre} key={city + index}>{city.nombre}</option>;
                            })
                        : ""}
                    </select>
                    {/* {
                        errors.city ? <span className='msg-error'>{errors.city}</span> : ""
                    } */}
                </div>
                </div>
            </div> : ""
            }
        </div>
    )
}

export default InformationParticular
