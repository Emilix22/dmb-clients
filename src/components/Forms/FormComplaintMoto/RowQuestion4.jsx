import React from 'react'
import "../FormComplaintCar/Form.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function RowQuestion4(props) {
    return (
        <tr className="rowTable">
            <td>{props.patente}</td>
            <td>{props.aseguradora}</td>
            <td>{<ModeEditIcon className='icon-tabla' />}</td>
            <td>{<DeleteForeverIcon className='icon-tabla' />}</td>
        </tr>
    )
}

export default RowQuestion4
