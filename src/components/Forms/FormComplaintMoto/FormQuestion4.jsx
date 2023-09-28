import React, { useEffect, useState } from 'react'
import RowQuestion4 from './RowQuestion4';


function FormQuestion4({datosFormu, setDatosFormu, errors, setErrors, expressions, formData}) {

    const [otroAuto, setOtroAuto] =useState([])

    const ocGuardar = (event) => {
        event.preventDefault();

        setOtroAuto([...otroAuto, {patente: datosFormu.other_car.oc_patent, aseguradora: datosFormu.other_car.oc_insurance}])
        
        setDatosFormu({ ...datosFormu, other_car : {
            ...datosFormu.other_car, oc_patent: ""
        }})
        
    }

    useEffect(() => {
        setDatosFormu({ ...datosFormu, otroAuto: JSON.stringify(otroAuto)})
    }, [otroAuto])

    return (
        <div className='formQuestions4'>

            {/* <div className="form-group-1 form-group-2">
                <label htmlFor="oc_name">Nombre Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_name"
                    id="oc_name"
                    value={datosFormu.other_car.oc_name}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_name: e.target.value
                        } })}
                    // onKeyUp={validations.oc_name}
                    // onBlur={validations.oc_name}
                />
                {errors.oc_name ? <span className="msg-error">{errors.oc_name}</span> : ""}
            </div>

            <div className="form-group-1 form-group-2">
                <label htmlFor="oc_surname">Apellido Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_surname"
                    id="oc_surname"
                    value={datosFormu.other_car.oc_surname}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_surname: e.target.value
                        } })}
                    // onKeyUp={validations.oc_surname}
                    // onBlur={validations.oc_surname}
                />
                {errors.oc_surname ? <span className="msg-error">{errors.oc_surname}</span> : ""}
            </div>

            <div className="form-group-1 form-group-3">
                <label htmlFor="oc_dni">DNI Conductor del otro Vehículo</label>
                <input
                    type="text"
                    name="oc_dni"
                    id="oc_dni"
                    value={datosFormu.other_car.oc_dni}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_dni: e.target.value
                        } })}
                    // onKeyUp={validations.oc_dni}
                    // onBlur={validations.oc_dni}
                />
                {errors.oc_dni ? <span className="msg-error">{errors.oc_dni}</span> : ""}
            </div> */}

            <div className="form-group-1 form-group-4">
                <label htmlFor="oc_patent">Patente</label>
                <input
                    type="text"
                    name="oc_patent"
                    id="oc_patent"
                    value={datosFormu.other_car.oc_patent}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_patent: e.target.value
                        } })}
                    // onKeyUp={validations.oc_patent}
                    // onBlur={validations.oc_patent}
                />
                {errors.oc_patent ? <span className="msg-error">{errors.oc_patent}</span> : ""}
            </div>
           
            <div className="form-group-1 form-group-2">
                <label htmlFor="oc_insurance">Aseguradora</label>
                <select
                    name="oc_insurance"
                    id="oc_insurance"
                    value={datosFormu.other_car.oc_insurance}
                    onChange={(e) => setDatosFormu({ ...datosFormu, other_car : {
                        ...datosFormu.other_car,
                        oc_insurance: e.target.value
                        } })}
                > 
                    <option value=""></option>
                    <option value="ACE AMERICAN INSURANCE COMPANY">ACE AMERICAN INSURANCE COMPANY (SUCURSAL ARGENTINA)</option>
                    <option value="AFIANZADORA LATINOAMERICANA COMPAÑÍA DE SEGUROS S.A.">AFIANZADORA LATINOAMERICANA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="AGROSALTA COOPERATIVA DE SEGUROS LIMITADA">AGROSALTA COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="ALBA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA">ALBA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="ALLIANZ ARGENTINA COMPAÑIA DE SEGUROS S.A.">ALLIANZ ARGENTINA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="AMERICAN HOME ASSURANCE COMPANY">AMERICAN HOME ASSURANCE COMPANY (SUCURSAL ARGENTINA)</option>
                    <option value="ANDINA ART S.A.">ANDINA ART S.A.</option>
                    <option value="ANTARTIDA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA">ANTARTIDA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="ANTICIPAR COMPAÑÍA DE SEGUROS S.A.">ANTICIPAR COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="ARGOS COMPAÑÍA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA">ARGOS COMPAÑÍA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="ART MUTUAL DE EMPLEADOS MECANICOS Y AFINES DEL TRANSPORTE AUTOMOTOR SAN FRANCISCO">ART MUTUAL DE EMPLEADOS MECANICOS Y AFINES DEL TRANSPORTE AUTOMOTOR SAN FRANCISCO </option>
                    <option value="ART MUTUAL RURAL DE SEGUROS DE RIESGOS DEL TRABAJO">ART MUTUAL RURAL DE SEGUROS DE RIESGOS DEL TRABAJO</option>
                    <option value="ASEGURADORA DE BIENES Y SERVICIOS S.A.">ASEGURADORA DE BIENES Y SERVICIOS S.A.</option>
                    <option value="ASEGURADORA DE CREDITOS Y GARANTIAS SOCIEDAD ANONIMA">ASEGURADORA DE CREDITOS Y GARANTIAS SOCIEDAD ANONIMA</option>
                    <option value="ASEGURADORA DEL FINISTERRE COMPAÑÍA ARGENTINA DE SEGUROS S.A.">ASEGURADORA DEL FINISTERRE COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="ASEGURADORES ARGENTINOS COMPAÑIA DE REASEGUROS S.A.">ASEGURADORES ARGENTINOS COMPAÑIA DE REASEGUROS S.A.</option>
                    <option value="ASEGURADORES DE CAUCIONES SOCIEDAD ANONIMA COMPAÑIA DE SEGUROS">ASEGURADORES DE CAUCIONES SOCIEDAD ANONIMA COMPAÑIA DE SEGUROS</option>
                    <option value="ASOCIACION MUTUAL DAN">ASOCIACION MUTUAL DAN</option>
                    <option value="ASOCIART S.A. ASEGURADORA DE RIESGOS DEL TRABAJO">ASOCIART S.A. ASEGURADORA DE RIESGOS DEL TRABAJO</option>
                    <option value="ASSEKURANSA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA">ASSEKURANSA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="ASSURANT ARGENTINA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA">ASSURANT ARGENTINA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="ASV ARGENTINA SALUD, VIDA Y PATRIMONIALES COMPAÑIA DE SEGUROS S.A.">ASV ARGENTINA SALUD, VIDA Y PATRIMONIALES COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="ATM COMPAÑÍA DE SEGUROS S.A">ATM COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="BBVA SEGUROS ARGENTINA S.A.">BBVA SEGUROS ARGENTINA S.A.</option>
                    <option value="BENEFICIO S.A. COMPAÑIA DE SEGUROS">BENEFICIO S.A. COMPAÑIA DE SEGUROS</option>
                    <option value="BERKLEY INTERNATIONAL SEGUROS SOCIEDAD ANONIMA">BERKLEY INTERNATIONAL SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="BHN SEGUROS GENERALES S.A">BHN SEGUROS GENERALES S.A.</option>
                    <option value="BHN VIDA S.A.">BHN VIDA S.A.</option>
                    <option value="BONACORSI  SEGUROS DE PERSONAS S.A.">BONACORSI  SEGUROS DE PERSONAS S.A.</option>
                    <option value="BOSTON COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA">BOSTON COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="CAJA DE PREVISIÓN Y SEGURO MÉDICO DE LA PROVINCIA DE BS.AS">CAJA DE PREVISIÓN Y SEGURO MÉDICO DE LA PROVINCIA DE BS.AS</option>
                    <option value="CAJA DE SEGUROS S.A.">CAJA DE SEGUROS S.A.</option>
                    <option value="CAJA POPULAR DE AHORROS DE LA PROVINCIA DE TUCUMAN">CAJA POPULAR DE AHORROS DE LA PROVINCIA DE TUCUMAN</option>
                    <option value="CALEDONIA ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA">CALEDONIA ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="CAMINOS PROTEGIDOS  COMPAÑÍA DE SEGUROS S.A.">CAMINOS PROTEGIDOS  COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="CARDIF SEGUROS S.A.">CARDIF SEGUROS S.A.</option>
                    <option value="CARUSO COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA">CARUSO COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="CERTEZA COMPAÑIA DE SEGUROS S.A.">CERTEZA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="CESCE ARGENTINA S.A. SEGUROS DE CREDITO Y  GARANTÍAS">CESCE ARGENTINA S.A. SEGUROS DE CREDITO Y  GARANTÍAS</option>
                    <option value="CHUBB SEGUROS ARGENTINA S.A.">CHUBB SEGUROS ARGENTINA S.A.</option>
                    <option value="CNP ASSURANCES COMPAÑIA DE SEGUROS S.A.">CNP ASSURANCES COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="COLON COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA">COLON COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="COMARSEG COMPAÑIA ARGENTINA DE SEGUROS S.A.">COMARSEG COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="COMPAGNIE FRANCAISE D´ASSURANCE POUR LE COMMERCE EXTERIEUR">COMPAGNIE FRANCAISE D´ASSURANCE POUR LE COMMERCE EXTERIEUR (SUCURSAL ARGENTINA)</option>
                    <option value="COMPAÑIA ARGENTINA DE SEGUROS LATITUD SUR SOCIEDAD ANONIMA">COMPAÑIA ARGENTINA DE SEGUROS LATITUD SUR SOCIEDAD ANONIMA</option>
                    <option value="COMPAÑIA ARGENTINA DE SEGUROS VICTORIA SOCIEDAD ANONIMA">COMPAÑIA ARGENTINA DE SEGUROS VICTORIA SOCIEDAD ANONIMA</option>
                    <option value="COMPAÑÍA ASEGURADORA DEL SUR S.A.">COMPAÑÍA ASEGURADORA DEL SUR S.A.</option>
                    <option value="COMPAÑÍA DE SEGUROS EL NORTE SOCIEDAD ANONIMA">COMPAÑÍA DE SEGUROS EL NORTE SOCIEDAD ANONIMA</option>
                    <option value="COMPAÑIA DE SEGUROS EUROAMERICA S.A.">COMPAÑIA DE SEGUROS EUROAMERICA S.A.</option>
                    <option value="COMPAÑIA DE SEGUROS INSUR S.A.">COMPAÑIA DE SEGUROS INSUR S.A.</option>
                    <option value="COMPAÑIA DE SEGUROS LA MERCANTIL ANDINA SOCIEDAD ANONIMA">COMPAÑIA DE SEGUROS LA MERCANTIL ANDINA SOCIEDAD ANONIMA</option>
                    <option value="COMPAÑÍA DE SEGUROS MAÑANA SOCIEDAD ANÓNIMA">COMPAÑÍA DE SEGUROS MAÑANA SOCIEDAD ANÓNIMA</option>
                    <option value="COMPAÑÍA MERCANTIL ASEGURADORA SOCIEDAD ANONIMA ARGENTINA DE SEGUROS">COMPAÑÍA MERCANTIL ASEGURADORA SOCIEDAD ANONIMA ARGENTINA DE SEGUROS</option>
                    <option value="CONFLUENCIA COMPAÑIA DE SEGUROS S.A.">CONFLUENCIA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="COOPERACION MUTUAL PATRONAL SOCIEDAD MUTUAL DE SEGUROS GENERALES">COOPERACION MUTUAL PATRONAL SOCIEDAD MUTUAL DE SEGUROS GENERALES</option>
                    <option value="COOPERATIVA DE SEGUROS LUZ Y FUERZA LIMITADA">COOPERATIVA DE SEGUROS LUZ Y FUERZA LIMITADA</option>
                    <option value="COPAN COOPERATIVA DE SEGUROS LIMITADA">COPAN COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="COSENA SEGUROS S.A.">COSENA SEGUROS S.A.</option>
                    <option value="CREDICOOP COMPAÑIA DE SEGUROS DE RETIRO S.A.">CREDICOOP COMPAÑIA DE SEGUROS DE RETIRO S.A.</option>
                    <option value="CREDITO Y CAUCION S.A. COMPAÑÍA DE SEGUROS">CREDITO Y CAUCION S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="CRUZ SUIZA COMPAÑÍA DE SEGUROS S.A.">CRUZ SUIZA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="DIGNA SEGUROS S.A.">DIGNA SEGUROS S.A.</option>
                    <option value="EDIFICAR SEGUROS SOCIEDAD ANÓNIMA">EDIFICAR SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="EL PROGRESO SEGUROS SOCIEDAD ANONIMA">EL PROGRESO SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="EL SURCO COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA">EL SURCO COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="EQU COMPAÑÍA DE SEGUROS DE PERSONAS S.A.">EQU COMPAÑÍA DE SEGUROS DE PERSONAS S.A.</option>
                    <option value="ESENCIA SEGUROS S.A.">ESENCIA SEGUROS S.A.</option>
                    <option value="EVOLUCIÓN SEGUROS S.A.">EVOLUCIÓN SEGUROS S.A.</option>
                    <option value="EXPERTA SEGUROS">EXPERTA SEGUROS</option>
                    <option value="FEDERACION PATRONAL REASEGUROS S.A.">FEDERACION PATRONAL REASEGUROS S.A.</option>
                    <option value="FEDERADA COMPAÑÍA DE SEGUROS S.A">FEDERADA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="FIANZAS Y CREDITO S. A. COMPAÑIA DE SEGUROS">FIANZAS Y CREDITO S. A. COMPAÑIA DE SEGUROS</option>
                    <option value="GALENO SEGUROS S.A.">GALENO SEGUROS S.A.</option>
                    <option value="GALICIA RETIRO COMPAÑÌA DE SEGUROS SAU">GALICIA RETIRO COMPAÑÌA DE SEGUROS SAU</option>
                    <option value="GALICIA SEGUROS SAU">GALICIA SEGUROS SAU</option>
                    <option value="GARANTÍA MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS">GARANTÍA MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="GESTION COMPAÑÍA ARGENTINA DE SEGUROS S.A.">GESTION COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="HAMBURGO COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA">HAMBURGO COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="HANSEATICA COMPAÑIA  DE SEGUROS SOCIEDAD ANÓNIMA">HANSEATICA COMPAÑIA  DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="HDI SEGUROS S.A.">HDI SEGUROS S.A.</option>
                    <option value="HORIZONTE COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA">HORIZONTE COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="INSTITUTO ASEGURADOR MERCANTIL COMPAÑIA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA IAM">INSTITUTO ASEGURADOR MERCANTIL COMPAÑIA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA IAM</option>
                    <option value="INSTITUTO AUTÁRQUICO PROVINCIAL DEL SEGURO">INSTITUTO AUTÁRQUICO PROVINCIAL DEL SEGURO</option>
                    <option value="INSTITUTO AUTARQUICO PROVINCIAL DEL SEGURO DE ENTRE RIOS SEGURO DE RETIRO SOCIEDAD ANONIMA">INSTITUTO AUTARQUICO PROVINCIAL DEL SEGURO DE ENTRE RIOS SEGURO DE RETIRO SOCIEDAD ANONIMA</option>
                    <option value="INSTITUTO DE SALTA COMPAÑÍA DE SEGUROS DE VIDA SOCIEDAD ANÓNIMA">INSTITUTO DE SALTA COMPAÑÍA DE SEGUROS DE VIDA SOCIEDAD ANÓNIMA</option>
                    <option value="INSTITUTO DE SEGUROS DE JUJUY">INSTITUTO DE SEGUROS DE JUJUY</option>
                    <option value="INSTITUTO DE SEGUROS SOCIEDAD ANÓNIMA">INSTITUTO DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="INTÉGRITY SEGUROS ARGENTINA S.A.">INTÉGRITY SEGUROS ARGENTINA S.A.</option>
                    <option value="IRB BRASIL RESSEGUROS S.A.">IRB BRASIL RESSEGUROS S.A. (SUCURSAL ARGENTINA)</option>
                    <option value="IUNIGO ARGENTINA COMPAÑÍA DE SEGUROS SAU">IUNIGO ARGENTINA COMPAÑÍA DE SEGUROS SAU</option>
                    <option value="JUNCAL COMPAÑÍA DE SEGUROS DE AUTOS Y PATRIMONIALES S.A.">JUNCAL COMPAÑÍA DE SEGUROS DE AUTOS Y PATRIMONIALES S.A.</option>
                    <option value="LA DULCE COOPERATIVA DE SEGUROS LIMITADA">LA DULCE COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="LA EQUIDAD SOCIAL COMPAÑÌA DE SEGUROS S.A.">LA EQUIDAD SOCIAL COMPAÑÌA DE SEGUROS S.A.</option>
                    <option value="LA EQUITATIVA DEL PLATA SOCIEDAD ANONIMA DE SEGUROS">LA EQUITATIVA DEL PLATA SOCIEDAD ANONIMA DE SEGUROS</option>
                    <option value="LA ESTRELLA S.A. COMPAñíA DE SEGUROS DE RETIRO">LA ESTRELLA S.A. COMPAñíA DE SEGUROS DE RETIRO</option>
                    <option value="LA HOLANDO SUDAMERICANA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA">LA HOLANDO SUDAMERICANA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="LA MERIDIONAL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA">LA MERIDIONAL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="LA NUEVA COOPERATIVA DE SEGUROS LIMITADA">LA NUEVA COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="LA PERSEVERANCIA SEGUROS SOCIEDAD ANONIMA">LA PERSEVERANCIA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="LA PREVISORA S.A. SEGUROS DE SEPELIO">LA PREVISORA S.A. SEGUROS DE SEPELIO</option>
                    <option value="LA SEGUNDA COOPERATIVA LIMITADA DE SEGUROS GENERALES">LA SEGUNDA COOPERATIVA LIMITADA DE SEGUROS GENERALES</option>
                    <option value="LA TERRITORIAL VIDA Y SALUD COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA">LA TERRITORIAL VIDA Y SALUD COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="LATIN AMERICAN SEGUROS S.A.">LATIN AMERICAN SEGUROS S.A.</option>
                    <option value="LIBRA COMPAÑIA ARGENTINA DE SEGUROS S.A.">LIBRA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="LIDER MOTOS COMPAÑÍA DE SEGUROS S.A.">LIDER MOTOS COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="LIDERAR COMPAÑIA GENERAL DE SEGUROS S.A.">LIDERAR COMPAÑIA GENERAL DE SEGUROS S.A.</option>
                    <option value="LIFE SEGUROS DE PERSONAS Y PATRIMONIALES S.A.">LIFE SEGUROS DE PERSONAS Y PATRIMONIALES S.A.</option>
                    <option value="MAPFRE ARGENTINA SEGUROS S.A.">MAPFRE ARGENTINA SEGUROS S.A.</option>
                    <option value="METROPOL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA">METROPOL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="METROPOL SOCIEDAD DE SEGUROS MUTUOS">METROPOL SOCIEDAD DE SEGUROS MUTUOS</option>
                    <option value="MISTA SEGUROS DE PERSONAS S.A.">MISTA SEGUROS DE PERSONAS S.A.</option>
                    <option value="MUTUAL DE EMPLEADOS Y OBREROS PETROLEROS PRIVADOS ART MUTUAL">MUTUAL DE EMPLEADOS Y OBREROS PETROLEROS PRIVADOS ART MUTUAL</option>
                    <option value="MUTUAL RIVADAVIA DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS">MUTUAL RIVADAVIA DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="N.S.A. SEGUROS GENERALES S.A.">N.S.A. SEGUROS GENERALES S.A.</option>
                    <option value="NACIÓN SEGUROS S.A.">NACIÓN SEGUROS S.A.</option>
                    <option value="NATIVA COMPAÑIA ARGENTINA DE SEGUROS S.A.">NATIVA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="NIVEL SEGUROS S.A">NIVEL SEGUROS S.A.</option>
                    <option value="NOBLE COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA">NOBLE COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="NRE COMPAÑÍA DE SEGUROS S.A.">NRE COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="OMINT S.A. COMPAÑÍA DE SEGUROS">OMINT S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="OPCIÓN SEGUROS S.A.">OPCIÓN SEGUROS S.A.</option>
                    <option value="ORBIS COMPAÑÍA ARGENTINA DE SEGUROS S.A.">ORBIS COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="ORÍGENES SEGUROS DE RETIRO S.A.">ORÍGENES SEGUROS DE RETIRO S.A.</option>
                    <option value="PACÍFICO COMPAÑÍA DE SEGUROS S.A.">PACÍFICO COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="PARANÁ SOCIEDAD ANONIMA DE SEGUROS">PARANÁ SOCIEDAD ANONIMA DE SEGUROS</option>
                    <option value="PIEVE SEGUROS SOCIEDAD ANONIMA">PIEVE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="PLENARIA SEGUROS S.A.">PLENARIA SEGUROS S.A.</option>
                    <option value="POR VIDA SEGUROS SOCIEDAD ANONIMA">POR VIDA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="PREMIAR COMPAÑÍA ARGENTINA DE SEGUROS S.A.">PREMIAR COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="PREVENCIÓN SEGUROS DE RETIRO SOCIEDAD ANÓNIMA">PREVENCIÓN SEGUROS DE RETIRO SOCIEDAD ANÓNIMA</option>
                    <option value="PRODUCTORES DE FRUTAS ARGENTINAS COOPERATIVA DE SEGUROS LIMITADA">PRODUCTORES DE FRUTAS ARGENTINAS COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="PROTECCIÓN MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS">PROTECCIÓN MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="PROVIDENCIA COMPAÑIA ARGENTINA DE SEGUROS S.A.">PROVIDENCIA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="PROVINCIA SEGUROS SOCIEDAD ANONIMA">PROVINCIA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="PROYECCION SEGUROS DE RETIRO S.A.">PROYECCION SEGUROS DE RETIRO S.A.</option>
                    <option value="PRUDENCIA COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA">PRUDENCIA COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="PRUDENTIAL SEGUROS S.A.">PRUDENTIAL SEGUROS S.A.</option>
                    <option value="PUNTO SUR SOCIEDAD ARGENTINA DE REASEGUROS S.A.">PUNTO SUR SOCIEDAD ARGENTINA DE REASEGUROS S.A.</option>
                    <option value="QUALIA COMPAÑÍA DE SEGUROS S.A.">QUALIA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="RCI COMPAÑÍA DE SEGUROS DE PERSONAS SAU">RCI COMPAÑÍA DE SEGUROS DE PERSONAS SAU</option>
                    <option value="REASEGURADORES ARGENTINOS S.A.">REASEGURADORES ARGENTINOS S.A.</option>
                    <option value="RECONQUISTA ASEGURADORA DE RIESGOS DEL TRABAJO SOCIEDAD ANONIMA">RECONQUISTA ASEGURADORA DE RIESGOS DEL TRABAJO SOCIEDAD ANONIMA</option>
                    <option value="REUNION RE COMPAÑIA DE REASEGUROS S.A.">REUNION RE COMPAÑIA DE REASEGUROS S.A.</option>
                    <option value="RÍO URUGUAY COOPERATIVA DE SEGUROS LIMITADA">RÍO URUGUAY COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="SAN CRISTÓBAL SOCIEDAD MUTUAL DE SEGUROS GENERALES">SAN CRISTÓBAL SOCIEDAD MUTUAL DE SEGUROS GENERALES</option>
                    <option value="SAN GERMAN SEGUROS S.A.">SAN GERMAN SEGUROS S.A.</option>
                    <option value="SAN MARINO COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA">SAN MARINO COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="SAN PATRICIO SEGUROS S.A.">SAN PATRICIO SEGUROS S.A.</option>
                    <option value="SANCOR COOPERATIVA DE SEGUROS LIMITADA">SANCOR COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="SANTA LUCÍA S.A. COMPAÑÍA DE SEGUROS">SANTA LUCÍA S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="SANTÍSIMA TRINIDAD SEGUROS DE VIDA SOCIEDAD ANONIMA">SANTÍSIMA TRINIDAD SEGUROS DE VIDA SOCIEDAD ANONIMA</option>
                    <option value="SCOR GLOBAL P">SCOR GLOBAL P&amp;C SE (SUCURSAL ARGENTINA)</option>
                    <option value="SEGURCOOP COOPERATIVA DE REASEGUROS LIMITADA">SEGURCOOP COOPERATIVA DE REASEGUROS LIMITADA</option>
                    <option value="SEGURCOOP COOPERATIVA DE SEGUROS LIMITADA">SEGURCOOP COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="SEGUROMETAL COOPERATIVA DE SEGUROS LIMITADA">SEGUROMETAL COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="SEGUROS BERNARDINO RIVADAVIA COOPERATIVA LIMITADA">SEGUROS BERNARDINO RIVADAVIA COOPERATIVA LIMITADA</option>
                    <option value="SEGUROS MÉDICOS SOCIEDAD ANONIMA">SEGUROS MÉDICOS SOCIEDAD ANONIMA</option>
                    <option value="SEGUROS SURA S.A">SEGUROS SURA S.A</option>
                    <option value="SENTIR SEGUROS SOCIEDAD ANONIMA">SENTIR SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="SMG COMPAÑIA ARGENTINA DE SEGUROS S.A.">SMG COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="SMSV COMPAÑIA ARGENTINA DE SEGUROS S.A.">SMSV COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="SOL NACIENTE SEGUROS SOCIEDAD ANONIMA">SOL NACIENTE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="SOLVENCIA COMPAÑÍA DE SEGUROS DE RETIRO SOCIEDAD ANÓNIMA.">SOLVENCIA COMPAÑÍA DE SEGUROS DE RETIRO SOCIEDAD ANÓNIMA.</option>
                    <option value="STARR INDEMNITY">STARR INDEMNITY &amp; LIABILITY COMPANY, SUCURSAL ARGENTINA, DE SEGUROS</option>
                    <option value="STELLANTIS INSURANCE COMPAÑIA DE SEGUROS S.A.U.">STELLANTIS INSURANCE COMPAÑIA DE SEGUROS S.A.U.</option>
                    <option value="SUMICLI  ASOCIACION MUTUAL DE SEGUROS">SUMICLI  ASOCIACION MUTUAL DE SEGUROS</option>
                    <option value="SUPERVIELLE SEGUROS S.A.">SUPERVIELLE SEGUROS S.A.</option>
                    <option value="TESTIMONIO COMPAÑÍA DE SEGUROS S.A.">TESTIMONIO COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="TPC COMPAÑIA DE SEGUROS S.A.">TPC COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="TRES PROVINCIAS SEGUROS DE PERSONAS S.A.">TRES PROVINCIAS SEGUROS DE PERSONAS S.A.</option>
                    <option value="TRIUNFO COOPERATIVA DE SEGUROS LIMITADA">TRIUNFO COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="TUTELAR SEGUROS SOCIEDAD ANONIMA">TUTELAR SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="WARRANTY INSURANCE COMPANY ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA">WARRANTY INSURANCE COMPANY ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="WORANZ COMPAÑÍA DE SEGUROS S.A.">WORANZ COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="ZURICH ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA">ZURICH ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                </select>
                {errors.oc_insurance ? <span className="msg-error">{errors.oc_insurance}</span> : ""}
            </div>

            <div className="form-group-1">
                <button onClick={ocGuardar}>Guardar</button>
            </div>            
            
            <div className="form-group-1">
                <h3>Datos de vehículos involucrados</h3>
                <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                >
                    <thead>
                        <tr>
                            {/* <td>
                            <strong>Nombre Conductor</strong>
                            </td>
                            <td>
                            <strong>Apellido Conductor</strong>
                            </td>
                            <td>
                            <strong>DNI Conductor</strong>
                            </td> */}
                            <td>
                            <strong>Patente</strong>
                            </td>
                            <td>
                            <strong>Aseguradora</strong>
                            </td>
                            <td>
                            <strong>Quitar</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            otroAuto.map((auto, index) => {
                                return <RowQuestion4 
                                patente={auto.patente}
                                aseguradora={auto.aseguradora}
                                otroAuto={otroAuto}
                                setDatosFormu={setDatosFormu}
                                datosFormu={datosFormu}
                                key={auto + index} />
                            })
                        }
                    </tbody>
                </table>
            </div>            
                                         
        </div>
    )
}

export default FormQuestion4
