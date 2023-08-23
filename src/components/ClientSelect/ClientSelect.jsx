import React from 'react'
import './ClientSelect.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

function ClientSelect({ruta}) {
    return (
        <div className="select-container">
            <h3>Seleccione Tipo de Cliente</h3>
            <div className='select-body'>
                <div className="select-group-1 select-group-2">
                <Link to={ruta}>
                    <article>
                        <PersonIcon />
                        Persona
                    </article>
                </Link>
                <article>
                    <HomeIcon />
                    Empresa
                </article>
                </div>
            </div>
        </div>
    )
}

export default ClientSelect
