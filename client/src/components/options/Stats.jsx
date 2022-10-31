import React from 'react'
import { fillterString } from '../../configs/fillter';

function Stats(props) {
   const list = props.list
   return (
      <div className='stats'>
         {list.length > 0 ?
         list.map((data,index)=>(
            <div className='one_step' key={index}>
               <span>{fillterString(data.name)}</span>
               <span>{data.value}</span>
            </div>
         )):""}
      </div>
   )
}

export default Stats