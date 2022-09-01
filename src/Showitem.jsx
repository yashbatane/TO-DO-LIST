import React from 'react'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Showitem = (props) => {
  return (
    <>
      <div className="Showitembox mx-5 py-1 row">
        <div className='col-12'>
          <div style={{ float: "left" }}>{props.data}</div>
          <div style={{ float: "right" }}><ModeEditIcon className="editsign" onClick={() => props.edit(props.id)} /><DeleteOutlineTwoToneIcon onClick={() => props.remove(props.id)} className='removesign' /></div>
        </div>
      </div>

    </>

  )
}

export default Showitem;
