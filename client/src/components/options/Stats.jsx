import React from 'react'
import { fillterString } from '../../configs/fillter';

function Stats(props) {
   const list = props.list
   return (
      <div className='stats'>
         <div className='one_step'>
            <span>{fillterString(list[0].name)}</span>
            <span>{list[0].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[1].name)}</span>
            <span>{list[1].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[2].name)}</span>
            <span>{list[2].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[3].name)}</span>
            <span>{list[3].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[31].name)}</span>
            <span>{list[31].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[32].name)}</span>
            <span>{list[32].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[4].name)}</span>
            <span>{list[4].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[5].name)}</span>
            <span>{list[5].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[6].name)}</span>
            <span>{list[6].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[7].name)}</span>
            <span>{list[7].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[8].name)}</span>
            <span>{list[8].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[9].name)}</span>
            <span>{list[9].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[10].name)}</span>
            <span>{list[10].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[11].name)}</span>
            <span>{list[11].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[12].name)}</span>
            <span>{list[12].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[15].name)}</span>
            <span>{list[15].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[17].name)}</span>
            <span>{list[17].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[14].name)}</span>
            <span>{list[14].value}%</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[23].name)}</span>
            <span>{list[23].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[24].name)}</span>
            <span>{list[24].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[25].name)}</span>
            <span>{list[25].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[26].name)}</span>
            <span>{list[26].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[27].name)}</span>
            <span>{list[27].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[28].name)}</span>
            <span>{list[28].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[29].name)}</span>
            <span>{list[29].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[30].name)}</span>
            <span>{list[30].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[33].name)}</span>
            <span>{list[33].value}</span>
         </div>
         <div className='one_step'>
            <span>{fillterString(list[34].name)}</span>
            <span>{list[34].value}</span>
         </div>
      </div>
   )
}

export default Stats