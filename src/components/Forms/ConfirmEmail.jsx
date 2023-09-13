import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './ConfirmEmail.css'
import imgEmail from "../../assets/email.png";
import Footer from '../Footer/Footer'

function ConfirmEmail() {

    const [client, setClient] = useState({data: {email: "ningun email registrado..."}})
    const {dni} = useParams();

    dni.length === 8 ?
    useEffect(() => {
    const loadClient = async () => {
        const response = await fetch("http://localhost:3000/api/clientes/dni", {
          method: "POST",
          body: JSON.stringify({
            dni: dni,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const info = await response.json();
        setClient(info);
      };
      loadClient()
      
    }, []) 
    : useEffect(() => {
      const loadClient = async () => {
        const response = await fetch("http://localhost:3000/api/clientes/cuit", {
          method: "POST",
          body: JSON.stringify({
            cuit: dni,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const info = await response.json();
        setClient(info);
      };
      loadClient()
      
    }, []);


    return (
        <div className="body-confirmEmail">
            <p>Fué envíada una copia del resumen de su denuncia al siguiente Email: <strong>{client.data.email}</strong>. Si este no es su email, por favor comuníquese con nosotros para actualizar su información de contacto.</p>
            <img className="graph" src={imgEmail} alt="fotomail" />
            <Link to="/"><button className="buttonEmail">Volver al inicio</button></Link>
            <Footer />
        </div>
    )
}

export default ConfirmEmail
