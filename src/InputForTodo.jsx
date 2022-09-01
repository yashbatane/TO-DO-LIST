import React from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';



const InputForTodo = (props) => {
  return (
    <div className=''>
      <textarea type="text" placeholder='Add Items....' value={props.data} className='py-2 px-sm-4 px-md-5 mb-4' onChange={props.Change} /><AddCircleOutlineRoundedIcon onClick={() => props.name(props.data)} className='addsign' />
    </div>
  )
}

export default InputForTodo;