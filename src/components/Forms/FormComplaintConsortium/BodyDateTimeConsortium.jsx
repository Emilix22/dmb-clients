import React, { useState, useEffect } from "react";
import RowTableConsortium from "./RowTableConsortium";
import imgAllianz from '../../../assets/imgAllianz.png'
import imgATM from '../../../assets/imgATM.png'
import imgFederación_Patronal from '../../../assets/imgFederación_Patronal.png'
import imgHolando_Seguros from '../../../assets/imgHolando_Seguros.png'
import imgMercantil_Andina from '../../../assets/imgMercantil_Andina.png'
import imgVictoria_Seguros from '../../../assets/imgVictoria_Seguros.png'
import imgEXPERTA from '../../../assets/imgEXPERTA.svg'
import imgMapfre from '../../../assets/imgMapfre.webp'

function BodyDateTime({
  datosFormu,
  setDatosFormu,
  errors,
  setErrors,
  expressions,
  validClient,
  setValidClient,
}) {
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL
  const validations = {
    dni: () => {
      if (expressions.dni.test(datosFormu.dni)) {
        setErrors({ ...errors, dni: "" });
      } else {
        setErrors({ ...errors, dni: "Requerido - sólo números - 8 cracteres" });
      }
    },

    date: () => {
      if (expressions.date.test(datosFormu.date)) {
        setErrors({ ...errors, date: "" });
      } else {
        setErrors({ ...errors, date: "Requerido" });
      }
    },

    hour: () => {
      if (expressions.hour.test(datosFormu.hour)) {
        setErrors({ ...errors, hour: "" });
      } else {
        setErrors({ ...errors, hour: "Requerido" });
      }
    },

    minutes: () => {
      if (expressions.minutes.test(datosFormu.minutes)) {
        setErrors({ ...errors, minutes: "" });
      } else {
        setErrors({ ...errors, minutes: "Requerido" });
      }
    },
  };

  const [client, setClient] = useState();

  const [clientId, setClientId] = useState("");

  const [policysClient, setPolicysClient] = useState();

  useEffect(() => {
    const loadClient = async () => {
      const response = await fetch(`${BASE_URL}/api/clientes/dni`, {
        method: "POST",
        body: JSON.stringify({
          dni: datosFormu.dni,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const info = await response.json();
      setClient(info);
    };
    {
      datosFormu.dni.length === 8 ? loadClient() : ""
    }
    
  }, [datosFormu.dni]);

  useEffect(() => {
    const loadPolicy = async () => {
      const response = await fetch(
        `${BASE_URL}/api/polizas/consorcio/porCliente`,
        {
          method: "POST",
          body: JSON.stringify({
            id_client: clientId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const info = await response.json();
      setPolicysClient(info.data);
    };
    loadPolicy();
  }, [clientId]);

  function handleValidar(event) {
    event.preventDefault();
    if (client && !client.error) {
      setValidClient(
        "Hola! "+client.data.nombre +
          " " +
          client.data.apellido +
          ". Por favor ingresá la fecha y hora de cuando ocurrió el siniestro."
      );
      
      setDatosFormu({ ...datosFormu, client_name: client.data.nombre + " " + client.data.apellido, id_client: client.data.id_cliente_persona });

      setErrors({ ...errors, client: "" });
      // console.log(client.data.nombre);
      setClientId(client.data.id_cliente_persona);
    } else {
      setErrors({ ...errors, client: client.error });
      //console.log(client.error);
    }
  }

  const fechaHoy = new Date();
        const fechaHoyFormato = fechaHoy.toLocaleDateString()

        const fechaParaMenosDiez = new Date()
        let menosDiez = fechaParaMenosDiez.setDate(fechaParaMenosDiez.getDate()+10)
        const menosDiezFormato = new Date(menosDiez).toLocaleDateString()


        let año;
        if (fechaHoyFormato.length === 10) {
            año = fechaHoyFormato.slice(6)
        } else if (fechaHoyFormato.length === 9) {
            año = fechaHoyFormato.slice(5)
        } else {
            año = fechaHoyFormato.slice(4)
        }
        //console.log(año)

        let mes;
        if (fechaHoyFormato.length === 10) {
            mes = fechaHoyFormato.slice(3, -5)
        } else if (fechaHoyFormato.slice(1, -7) === "/") {
            mes = fechaHoyFormato.slice(2, -5)
        } else if (fechaHoyFormato.slice(1, -6) === "/") {
            mes = fechaHoyFormato.slice(2, -5)
        } else {
            mes = fechaHoyFormato.slice(3, -5)
        }

        if (mes.length <= 1) {
            mes = "0" + mes
        }

        //console.log(mes)

        let dia = fechaHoyFormato.slice(0, -8)
        if (dia.length <= 1) {
            dia = "0" + dia
        }

        //console.log(dia) 

  return (
    <div className="form-DataTime">
      <div className="form-group-1 form-group-2">
        <label htmlFor="dni">DNI del Asegurado</label>
        <input
          type="text"
          name="dni"
          id="dni"
          placeholder="Ej: 26365256"
          value={datosFormu.dni}
          onChange={(e) => setDatosFormu({ ...datosFormu, dni: e.target.value })}
          onKeyUp={validations.dni}
          onBlur={validations.dni}
        />
        {errors.dni ? <span className="msg-error">{errors.dni}</span> : ""}
        <button className="btn-validation" onClick={handleValidar}>
          Validar DNI
        </button>
        {errors.validClient && validClient === "" ? <span className="msg-error">{errors.validClient}</span> : ""}
        {errors.client ? (
          <span className="msg-error">{errors.client}</span>
        ) : (
          <span className="msg-ok">{validClient}</span>
        )}
      </div>
      <div className="group-datatime">
        <div className="form-group-1 form-group-3">
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            name="date"
            id="date"
            max={año+'-'+mes+'-'+dia}
            value={datosFormu.date}
            onChange={(e) => setDatosFormu({ ...datosFormu, date: e.target.value })}
            onBlur={validations.date}
          />
          {errors.date && datosFormu.date === "" ? <span className="msg-error">{errors.date}</span> : ""}
        </div>
        <div className="form-group-1 form-group-3">
          <label htmlFor="hour">Hora</label>
          <select
            name="hour"
            id="hour"
            value={datosFormu.hour}
            onChange={(e) => setDatosFormu({ ...datosFormu, hour: e.target.value })}
            onBlur={validations.hour}
          >
            <option value=""></option>
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
          </select>
          {errors.hour && datosFormu.hour === "" ? <span className="msg-error">{errors.hour}</span> : ""}
        </div>
        <div className="form-group-1 form-group-3">
          <label htmlFor="minutes">Minutos</label>
          <select
            name="minutes"
            id="minutes"
            value={datosFormu.minutes}
            onChange={(e) =>
              setDatosFormu({ ...datosFormu, minutes: e.target.value })
            }
            onBlur={validations.minutes}
          >
            <option value=""></option>
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
          {errors.minutes && datosFormu.minutes === "" ? (
            <span className="msg-error">{errors.minutes}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      {clientId ? (
        <div className="form-group-1">
          <h3>Seleccioná la póliza en la que ocurrió</h3>
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <td>
                  <strong>Seleccionar</strong>
                </td>
                <td>
                  <strong>N° Póliza</strong>
                </td>
                <td>
                  <strong>Companía</strong>
                </td>
                <td>
                  <strong>Dirección</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {policysClient.map((policy, index) => {
                return (
                  <RowTableConsortium
                    setDatosFormu={setDatosFormu}
                    datosFormu={datosFormu}
                    numero_poliza={policy.numero_poliza}
                    compania={
                      policy.aseguradoras.nombre === 'Allianz' 
                      ? <img style={{width: '80px'}} src={imgAllianz} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'ATM' 
                      ? <img style={{width: '80px'}} src={imgATM} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'Federación Patronal' 
                      ? <img style={{width: '80px'}} src={imgFederación_Patronal} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'Holando Seguros' 
                      ? <img style={{width: '80px'}} src={imgHolando_Seguros} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'Mapfre' 
                      ? <img style={{width: '80px'}} src={imgMapfre} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'Mercantil Andina' 
                      ? <img style={{width: '80px'}} src={imgMercantil_Andina} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'Victoria Seguros' 
                      ? <img style={{width: '80px'}} src={imgVictoria_Seguros} alt="imgCompania" /> 
                      : policy.aseguradoras.nombre === 'EXPERTA' 
                      ? <img style={{width: '80px'}} src={imgEXPERTA} alt="imgCompania" /> 
                      : " "
                    }
                    id_poliza={policy.id_poliza}
                    calle={policy.ubicaciones_riesgos.calle}
                    altura={policy.ubicaciones_riesgos.altura}
                    piso={policy.ubicaciones_riesgos.piso}
                    departamento={policy.ubicaciones_riesgos.departamento}
                    localidad={policy.ubicaciones_riesgos.localidad}
                    key={policy + index}
                  />
                );
              })}
            </tbody>  
          </table>
          {errors.policy && datosFormu.policy === "" ? <span className="msg-error">{errors.policy}</span> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BodyDateTime;
