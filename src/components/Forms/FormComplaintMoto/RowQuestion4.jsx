import React from 'react'
import "../FormComplaintCar/Form.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function RowQuestion4(props) {

    const deleteRow = (event) => {
            
        const autoToDelete = (element) => element.patente === props.patente
        let autoIndex = props.otroAuto.findIndex(autoToDelete)
        props.otroAuto.splice(autoIndex, 1)
        props.setDatosFormu({ ...props.datosFormu, otroAuto: JSON.stringify(props.otroAuto)})
        
    }

    return (
        <tr className="rowTable">
            <td>{props.patente}</td>
            <td>{props.aseguradora}</td>
            <td onClick={deleteRow}>{<DeleteForeverIcon className='icon-tabla' />}</td>
        </tr>
    )
}

export default RowQuestion4
