import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import logoFooter from '../../assets/dmb_lineas.svg'

function Footer() {
    return (
        <footer className='footer' id='footer'>
                <div className='footer-left'>
                    <ul className='list-left'>
                        <img src={logoFooter} alt="logo-footer" />
                        <li className='footer-title'>OFICINA</li>
                        <li>San Martín 439, Piso 11 (C1004AAI)</li>
                        <li>Ciudad Autónoma de Buenos Aires, Argentina</li>
                    </ul>
                </div>
                <div className='footer-center'>
                    <ul className='list-center'>
                        <li className='footer-title'>CONTACTO</li>
                        <li className='footer-subtitle'>Consultas generales y cotizaciones</li>
                        <li>info@dmbconsultores.com.ar</li>
                        <li className='footer-subtitle'>Clientes</li>
                        <li>clientes@dmbconsultores.com.ar</li>
                        <li className='footer-subtitle'>Siniestros</li>
                        <li>siniestros@dmbconsultores.com.ar</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul className='list-right'>
                        <li className='footer-title'>LÍNEA DIRECTA</li>
                        <li className='footer-subtitle'>Teléfonos</li>
                        <li>(011) 5353-6223</li>
                        <li>(011) 5353-6229</li>
                        <li className='footer-subtitle'>Whatsapp</li>
                        <li>(011) 15-6897-8983</li>
                    </ul>
                </div>
            </footer>
    )
}

export default Footer
