import React from 'react'

function Buff(props) {
   const list = props.list
  return (
    <div>
      {list.equipment ? 
      list.equipment.length > 0 ? 
      list.equipment.map((data,index)=>(
         <div className='item' key={index}>
           <div className='itemImg'>
             <img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" />
             <span>{data.slotName}</span>
           </div>
           <div className="itemName">
             <div className="iNames">
               <div className='opggisgood'>{data.itemName}</div>
             </div>
           </div>
         </div>
      ))
      :"" :""}
    </div>
  )
}

export default Buff