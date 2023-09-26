import React from 'react'
import RowQuestion4 from './RowQuestion4';
let otroAuto = [];


function FormQuestion4({datosFormu, setDatosFormu, errors, setErrors, expressions, formData}) {
    
    

    const ocGuardar = (event) => {
        event.preventDefault();
        otroAuto.push({patente: datosFormu.other_car.oc_patent, aseguradora: datosFormu.other_car.oc_insurance})
        // formData.append('oc_patent'+contador, datosFormu.other_car.oc_patent)
        // setDatosFormu({ ...datosFormu, other_car : {
        //     ...datosFormu.other_car,
        //     oc_patent: ""
        //     } })
        
        setDatosFormu({ ...datosFormu, other_car : {
            ...datosFormu.other_car, oc_patent: ""
        }})
        // setDatosFormu({ ...datosFormu, other_car : {
        //     ...datosFormu.other_car,
        //     oc_insurance: ""
        // }})
        otroAuto.map((auto, index) => {
            formData.append('oc_patent'+index, auto.patente)
            formData.append('oc_insurance'+index, auto.aseguradora)

        })
        

    }
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
                    <option value="0864">0864 - ACE AMERICAN INSURANCE COMPANY (SUCURSAL ARGENTINA)</option>
                    <option value="0755">0755 - AFIANZADORA LATINOAMERICANA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0389">0389 - AGROSALTA COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0329">0329 - ALBA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0036">0036 - ALLIANZ ARGENTINA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0202">0202 - AMERICAN HOME ASSURANCE COMPANY (SUCURSAL ARGENTINA)</option>
                    <option value="0959">0959 - ANDINA ART S.A.</option>
                    <option value="0246">0246 - ANTARTIDA COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0844">0844 - ANTICIPAR COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0241">0241 - ARGOS COMPAÑÍA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="0962">0962 - ART MUTUAL DE EMPLEADOS MECANICOS Y AFINES DEL TRANSPORTE AUTOMOTOR SAN FRANCISCO </option>
                    <option value="0932">0932 - ART MUTUAL RURAL DE SEGUROS DE RIESGOS DEL TRABAJO</option>
                    <option value="0937">0937 - ASEGURADORA DE BIENES Y SERVICIOS S.A.</option>
                    <option value="0297">0297 - ASEGURADORA DE CREDITOS Y GARANTIAS SOCIEDAD ANONIMA</option>
                    <option value="0857">0857 - ASEGURADORA DEL FINISTERRE COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0831">0831 - ASEGURADORES ARGENTINOS COMPAÑIA DE REASEGUROS S.A.</option>
                    <option value="0415">0415 - ASEGURADORES DE CAUCIONES SOCIEDAD ANONIMA COMPAÑIA DE SEGUROS</option>
                    <option value="0199">0199 - ASOCIACION MUTUAL DAN</option>
                    <option value="0620">0620 - ASOCIART S.A. ASEGURADORA DE RIESGOS DEL TRABAJO</option>
                    <option value="0771">0771 - ASSEKURANSA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0209">0209 - ASSURANT ARGENTINA COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0540">0540 - ASV ARGENTINA SALUD, VIDA Y PATRIMONIALES COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0812">0812 - ATM COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0396">0396 - BBVA SEGUROS ARGENTINA S.A.</option>
                    <option value="0555">0555 - BENEFICIO S.A. COMPAÑIA DE SEGUROS</option>
                    <option value="0121">0121 - BERKLEY INTERNATIONAL SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0696">0696 - BHN SEGUROS GENERALES S.A.</option>
                    <option value="0695">0695 - BHN VIDA S.A.</option>
                    <option value="0573">0573 - BONACORSI  SEGUROS DE PERSONAS S.A.</option>
                    <option value="0032">0032 - BOSTON COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0721">0721 - CAJA DE PREVISIÓN Y SEGURO MÉDICO DE LA PROVINCIA DE BS.AS</option>
                    <option value="0501">0501 - CAJA DE SEGUROS S.A.</option>
                    <option value="0259">0259 - CAJA POPULAR DE AHORROS DE LA PROVINCIA DE TUCUMAN</option>
                    <option value="0057">0057 - CALEDONIA ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0007">0007 - CAMINOS PROTEGIDOS  COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0671">0671 - CARDIF SEGUROS S.A.</option>
                    <option value="0406">0406 - CARUSO COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0491">0491 - CERTEZA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0404">0404 - CESCE ARGENTINA S.A. SEGUROS DE CREDITO Y  GARANTÍAS</option>
                    <option value="0275">0275 - CHUBB SEGUROS ARGENTINA S.A.</option>
                    <option value="0576">0576 - CNP ASSURANCES COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0861">0861 - COLON COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0809">0809 - COMARSEG COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0686">0686 - COMPAGNIE FRANCAISE D´ASSURANCE POUR LE COMMERCE EXTERIEUR (SUCURSAL ARGENTINA)</option>
                    <option value="0412">0412 - COMPAÑIA ARGENTINA DE SEGUROS LATITUD SUR SOCIEDAD ANONIMA</option>
                    <option value="0064">0064 - COMPAÑIA ARGENTINA DE SEGUROS VICTORIA SOCIEDAD ANONIMA</option>
                    <option value="0830">0830 - COMPAÑÍA ASEGURADORA DEL SUR S.A.</option>
                    <option value="0141">0141 - COMPAÑÍA DE SEGUROS EL NORTE SOCIEDAD ANONIMA</option>
                    <option value="0227">0227 - COMPAÑIA DE SEGUROS EUROAMERICA S.A.</option>
                    <option value="0780">0780 - COMPAÑIA DE SEGUROS INSUR S.A.</option>
                    <option value="0116">0116 - COMPAÑIA DE SEGUROS LA MERCANTIL ANDINA SOCIEDAD ANONIMA</option>
                    <option value="0432">0432 - COMPAÑÍA DE SEGUROS MAÑANA SOCIEDAD ANÓNIMA</option>
                    <option value="0136">0136 - COMPAÑÍA MERCANTIL ASEGURADORA SOCIEDAD ANONIMA ARGENTINA DE SEGUROS</option>
                    <option value="0821">0821 - CONFLUENCIA COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0196">0196 - COOPERACION MUTUAL PATRONAL SOCIEDAD MUTUAL DE SEGUROS GENERALES</option>
                    <option value="0388">0388 - COOPERATIVA DE SEGUROS LUZ Y FUERZA LIMITADA</option>
                    <option value="0248">0248 - COPAN COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0725">0725 - COSENA SEGUROS S.A.</option>
                    <option value="0604">0604 - CREDICOOP COMPAÑIA DE SEGUROS DE RETIRO S.A.</option>
                    <option value="0656">0656 - CREDITO Y CAUCION S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="0553">0553 - CRUZ SUIZA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0872">0872 - DIGNA SEGUROS S.A.</option>
                    <option value="0080">0080 - EDIFICAR SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0716">0716 - EL PROGRESO SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0006">0006 - EL SURCO COMPAÑÍA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0965">0965 - EQU COMPAÑÍA DE SEGUROS DE PERSONAS S.A.</option>
                    <option value="0933">0933 - ESENCIA SEGUROS S.A.</option>
                    <option value="0236">0236 - EVOLUCIÓN SEGUROS S.A.</option>
                    <option value="0880">0880 - EXPERTA SEGUROS</option>
                    <option value="0836">0836 - FEDERACION PATRONAL REASEGUROS S.A.</option>
                    <option value="0874">0874 - FEDERADA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0253">0253 - FIANZAS Y CREDITO S. A. COMPAÑIA DE SEGUROS</option>
                    <option value="0878">0878 - GALENO SEGUROS S.A.</option>
                    <option value="0426">0426 - GALICIA RETIRO COMPAÑÌA DE SEGUROS SAU</option>
                    <option value="0589">0589 - GALICIA SEGUROS SAU</option>
                    <option value="0681">0681 - GARANTÍA MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="0882">0882 - GESTION COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0333">0333 - HAMBURGO COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0778">0778 - HANSEATICA COMPAÑIA  DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0335">0335 - HDI SEGUROS S.A.</option>
                    <option value="0261">0261 - HORIZONTE COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="0381">0381 - INSTITUTO ASEGURADOR MERCANTIL COMPAÑIA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA IAM</option>
                    <option value="0254">0254 - INSTITUTO AUTÁRQUICO PROVINCIAL DEL SEGURO</option>
                    <option value="0437">0437 - INSTITUTO AUTARQUICO PROVINCIAL DEL SEGURO DE ENTRE RIOS SEGURO DE RETIRO SOCIEDAD ANONIMA</option>
                    <option value="0661">0661 - INSTITUTO DE SALTA COMPAÑÍA DE SEGUROS DE VIDA SOCIEDAD ANÓNIMA</option>
                    <option value="0822">0822 - INSTITUTO DE SEGUROS DE JUJUY</option>
                    <option value="0728">0728 - INSTITUTO DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0720">0720 - INTÉGRITY SEGUROS ARGENTINA S.A.</option>
                    <option value="0827">0827 - IRB BRASIL RESSEGUROS S.A. (SUCURSAL ARGENTINA)</option>
                    <option value="0823">0823 - IUNIGO ARGENTINA COMPAÑÍA DE SEGUROS SAU</option>
                    <option value="0312">0312 - JUNCAL COMPAÑÍA DE SEGUROS DE AUTOS Y PATRIMONIALES S.A.</option>
                    <option value="0158">0158 - LA DULCE COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0944">0944 - LA EQUIDAD SOCIAL COMPAÑÌA DE SEGUROS S.A.</option>
                    <option value="0044">0044 - LA EQUITATIVA DEL PLATA SOCIEDAD ANONIMA DE SEGUROS</option>
                    <option value="0419">0419 - LA ESTRELLA S.A. COMPAñíA DE SEGUROS DE RETIRO</option>
                    <option value="0079">0079 - LA HOLANDO SUDAMERICANA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0244">0244 - LA MERIDIONAL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0163">0163 - LA NUEVA COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0157">0157 - LA PERSEVERANCIA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0591">0591 - LA PREVISORA S.A. SEGUROS DE SEPELIO</option>
                    <option value="0317">0317 - LA SEGUNDA COOPERATIVA LIMITADA DE SEGUROS GENERALES</option>
                    <option value="0596">0596 - LA TERRITORIAL VIDA Y SALUD COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0855">0855 - LATIN AMERICAN SEGUROS S.A.</option>
                    <option value="0852">0852 - LIBRA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0858">0858 - LIDER MOTOS COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0352">0352 - LIDERAR COMPAÑIA GENERAL DE SEGUROS S.A.</option>
                    <option value="0251">0251 - LIFE SEGUROS DE PERSONAS Y PATRIMONIALES S.A.</option>
                    <option value="0213">0213 - MAPFRE ARGENTINA SEGUROS S.A.</option>
                    <option value="0334">0334 - METROPOL COMPAÑÍA ARGENTINA DE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0682">0682 - METROPOL SOCIEDAD DE SEGUROS MUTUOS</option>
                    <option value="0632">0632 - MISTA SEGUROS DE PERSONAS S.A.</option>
                    <option value="0890">0890 - MUTUAL DE EMPLEADOS Y OBREROS PETROLEROS PRIVADOS ART MUTUAL</option>
                    <option value="0678">0678 - MUTUAL RIVADAVIA DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="0845">0845 - N.S.A. SEGUROS GENERALES S.A.</option>
                    <option value="0515">0515 - NACIÓN SEGUROS S.A.</option>
                    <option value="0247">0247 - NATIVA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0662">0662 - NIVEL SEGUROS S.A.</option>
                    <option value="0744">0744 - NOBLE COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0868">0868 - NRE COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0894">0894 - OMINT S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="0869">0869 - OPCIÓN SEGUROS S.A.</option>
                    <option value="0293">0293 - ORBIS COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0423">0423 - ORÍGENES SEGUROS DE RETIRO S.A.</option>
                    <option value="0895">0895 - PACÍFICO COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0330">0330 - PARANÁ SOCIEDAD ANONIMA DE SEGUROS</option>
                    <option value="0643">0643 - PIEVE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0546">0546 - PLENARIA SEGUROS S.A.</option>
                    <option value="0820">0820 - POR VIDA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0931">0931 - PREMIAR COMPAÑÍA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0930">0930 - PREVENCIÓN SEGUROS DE RETIRO SOCIEDAD ANÓNIMA</option>
                    <option value="0348">0348 - PRODUCTORES DE FRUTAS ARGENTINAS COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0679">0679 - PROTECCIÓN MUTUAL DE SEGUROS DEL TRANSPORTE PÚBLICO DE PASAJEROS</option>
                    <option value="0528">0528 - PROVIDENCIA COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0499">0499 - PROVINCIA SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0484">0484 - PROYECCION SEGUROS DE RETIRO S.A.</option>
                    <option value="0040">0040 - PRUDENCIA COMPAÑIA ARGENTINA DE SEGUROS GENERALES SOCIEDAD ANÓNIMA</option>
                    <option value="0694">0694 - PRUDENTIAL SEGUROS S.A.</option>
                    <option value="0860">0860 - PUNTO SUR SOCIEDAD ARGENTINA DE REASEGUROS S.A.</option>
                    <option value="0879">0879 - QUALIA COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0964">0964 - RCI COMPAÑÍA DE SEGUROS DE PERSONAS SAU</option>
                    <option value="0846">0846 - REASEGURADORES ARGENTINOS S.A.</option>
                    <option value="0440">0440 - RECONQUISTA ASEGURADORA DE RIESGOS DEL TRABAJO SOCIEDAD ANONIMA</option>
                    <option value="0833">0833 - REUNION RE COMPAÑIA DE REASEGUROS S.A.</option>
                    <option value="0360">0360 - RÍO URUGUAY COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0192">0192 - SAN CRISTÓBAL SOCIEDAD MUTUAL DE SEGUROS GENERALES</option>
                    <option value="0847">0847 - SAN GERMAN SEGUROS S.A.</option>
                    <option value="0926">0926 - SAN MARINO COMPAÑÍA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0500">0500 - SAN PATRICIO SEGUROS S.A.</option>
                    <option value="0224">0224 - SANCOR COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0498">0498 - SANTA LUCÍA S.A. COMPAÑÍA DE SEGUROS</option>
                    <option value="0438">0438 - SANTÍSIMA TRINIDAD SEGUROS DE VIDA SOCIEDAD ANONIMA</option>
                    <option value="0850">0850 - SCOR GLOBAL P&amp;C SE (SUCURSAL ARGENTINA)</option>
                    <option value="0848">0848 - SEGURCOOP COOPERATIVA DE REASEGUROS LIMITADA</option>
                    <option value="0216">0216 - SEGURCOOP COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0286">0286 - SEGUROMETAL COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0222">0222 - SEGUROS BERNARDINO RIVADAVIA COOPERATIVA LIMITADA</option>
                    <option value="0749">0749 - SEGUROS MÉDICOS SOCIEDAD ANONIMA</option>
                    <option value="0025">0025 - SEGUROS SURA S.A</option>
                    <option value="0413">0413 - SENTIR SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0002">0002 - SMG COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0747">0747 - SMSV COMPAÑIA ARGENTINA DE SEGUROS S.A.</option>
                    <option value="0574">0574 - SOL NACIENTE SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0922">0922 - SOLVENCIA COMPAÑÍA DE SEGUROS DE RETIRO SOCIEDAD ANÓNIMA.</option>
                    <option value="0829">0829 - STARR INDEMNITY &amp; LIABILITY COMPANY, SUCURSAL ARGENTINA, DE SEGUROS</option>
                    <option value="0888">0888 - STELLANTIS INSURANCE COMPAÑIA DE SEGUROS S.A.U.</option>
                    <option value="0665">0665 - SUMICLI  ASOCIACION MUTUAL DE SEGUROS</option>
                    <option value="0595">0595 - SUPERVIELLE SEGUROS S.A.</option>
                    <option value="0579">0579 - TESTIMONIO COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0741">0741 - TPC COMPAÑIA DE SEGUROS S.A.</option>
                    <option value="0578">0578 - TRES PROVINCIAS SEGUROS DE PERSONAS S.A.</option>
                    <option value="0402">0402 - TRIUNFO COOPERATIVA DE SEGUROS LIMITADA</option>
                    <option value="0841">0841 - TUTELAR SEGUROS SOCIEDAD ANONIMA</option>
                    <option value="0229">0229 - WARRANTY INSURANCE COMPANY ARGENTINA DE SEGUROS SOCIEDAD ANÓNIMA</option>
                    <option value="0867">0867 - WORANZ COMPAÑÍA DE SEGUROS S.A.</option>
                    <option value="0228">0228 - ZURICH ARGENTINA COMPAÑIA DE SEGUROS SOCIEDAD ANONIMA</option>
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
                            <strong>Editar</strong>
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
