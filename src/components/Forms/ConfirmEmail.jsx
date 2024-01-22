import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './ConfirmEmail.css'
import imgEmail from "../../assets/email.png";
import Footer from '../Footer/Footer'

function ConfirmEmail() {

    const [client, setClient] = useState({data: {email: "Cargando..."}})
    const {dni} = useParams();

    dni.length === 8 ?
    useEffect(() => {
    const loadClient = async () => {
        const response = await fetch("https://dmb-back.onrender.com/api/clientes/dni", {
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
        const response = await fetch("https://dmb-back.onrender.com/api/clientes/cuit", {
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
            <p>Recibimos tu denuncia! Te enviamos una copia del formulario al siguiente mail: <strong>{client.data.email}</strong>. Si este no es su mail, contáctanos <Link to={"https://wa.me/5491136388857?text=Hola"}>aqui</Link> para que actualicemos tu información.</p>
            <img className="graph" src={imgEmail} alt="fotomail" />
            <Link to="/"><button className="buttonEmail">Volver al inicio</button></Link>
            <Footer />
        </div>
    )
}

export default ConfirmEmail
