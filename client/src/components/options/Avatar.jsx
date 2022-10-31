import React from 'react'

function Avatar(props) {
   const list = props.list
   return (
      <div className='Avatar'>
         {list.length > 0 ? list.map((data, index) => (
            <div className='item2' key={index}>
               <div className='equipTem'>
                  <img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt="info" height={"100%"} />
                  <span>{data.slotName}</span>
               </div>
               <div className='avatarName'>
                  <span className='avatarNames'>
                  {data.clone["itemName"] !== null ?
                     <><span className='avatarNames1'>{data.itemName}</span>
                     <span className='avatarNames1' style={{ fontSize: "10pt" }}>{data.clone["itemName"]}</span>
                     </> :
                     <span className='avatarNames2'>{data.itemName}</span>}
                  </span>
                  <span>{data.optionAbility}</span>
               </div>
            </div>
         )) : ""}
      </div>
   )
}

export default Avatar