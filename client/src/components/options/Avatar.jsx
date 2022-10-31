import React from 'react'

function Avatar(props) {
   const list = props.list
   return (
      <div className='Avatar'>
         {list.length > 0 ? list.map((data, index) => (
            <div className='item' key={index}>
               <div className='itemImg'>
                  <img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt="info" />
                  <span>{(data.slotName).replace("아바타", "")}</span>
               </div>
               <div className='itemName'>
                  <div className="iNames">
                     <div className='opggisgood'>
                        {data.clone["itemName"] !== null ?
                           <>
                              <span className='avatarNames1'>{data.itemName}</span>
                              <span className='avatarNames1' style={{ fontSize: "10pt" }}>{data.clone["itemName"]}</span>
                           </> :
                           <span className='avatarNames2'>{data.itemName}</span>}
                     </div>
                  </div>
                     <div className='fowisnotgood'>{data.optionAbility}</div>
               </div>
            </div>
         )) : ""}
      </div>
   )
}

export default Avatar