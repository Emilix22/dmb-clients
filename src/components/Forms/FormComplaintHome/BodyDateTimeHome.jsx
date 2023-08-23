import React, { useState, useEffect } from "react";
import "./FormHome.css"; //verrrrrr
import RowTableHome from "./RowTableHome";

function BodyDateTime({
  datosFormu,
  setDatosFormu,
  errors,
  setErrors,
  expressions,
  validClient,
  setValidClient,
}) {
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
      const response = await fetch("http://localhost:3000/api/clientes/dni", {
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
        "http://localhost:3000/api/polizas/hogar/porCliente",
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
    if (!client.error) {
      setValidClient(
        client.data.nombre +
          " " +
          client.data.apellido +
          " por favor ingrese fecha y hora del siniestro"
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
            value={datosFormu.date}
            onChange={(e) => setDatosFormu({ ...datosFormu, date: e.target.value })}
            onBlur={validations.date}
          />
          {errors.date ? <span className="msg-error">{errors.date}</span> : ""}
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
          {errors.hour ? <span className="msg-error">{errors.hour}</span> : ""}
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
          {errors.minutes ? (
            <span className="msg-error">{errors.minutes}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      {clientId ? (
        <div className="form-group-1">
          <h3>Seleccione Póliza</h3>
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
                  <strong>Dirección</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {policysClient.map((policy, index) => {
                return (
                  <RowTableHome
                    setDatosFormu={setDatosFormu}
                    datosFormu={datosFormu}
                    numero_poliza={policy.numero_poliza}
                    calle={policy.hogares.calle}
                    altura={policy.hogares.altura}
                    piso={policy.hogares.piso}
                    departamento={policy.hogares.departamento}
                    localidad={policy.hogares.localidad}
                    key={policy + index}
                  />
                );
              })}
            </tbody>  
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BodyDateTime;
