import React from 'react'

function Avatar(props) {
   const list = props.list
   return (
      <div className='Avatar'>
         {list.length > 0 ? list.map((data, index) => (
            <div className='avatars' key={index}>
               <div className='avatarsImg'>
                  <img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt="info"/>
                  <span>{(data.slotName).replace("아바타", "")}</span>
               </div>
               <div className='avatarsName'>
                  <div className="aNames">
                     {data.clone["itemName"] !== null ?
                        <>
                           <div className='avatarNames1'>{data.itemName}</div>
                           <div className='avatarNames1'>{data.clone["itemName"]}</div>
                        </> :
                        <div className='avatarNames2'>{data.itemName}</div>}
                  </div>
               </div>
               <div className='emblemst'>
                  {data.emblems.length > 0 ? 
                  data.emblems.map((emblem,index)=>(
                     <span key={index} className={emblem.itemName}>{emblem.itemName}</span>
                  )): ""}
               </div>
               <div className='avatarsA'>
                  <span>{data.optionAbility}</span>
               </div>
            </div>
         )) : ""}
      </div>
   )
}

export default Avatar