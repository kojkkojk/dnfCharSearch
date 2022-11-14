import React from 'react';
import { useSelector } from 'react-redux';

function ItemSises() {
   const itemSiseList = useSelector((state => state.itemSiseSlice.itemSiseList));
   return (
      <div className='auctionSise'>
         {itemSiseList.length > 0 ? 
         itemSiseList.map((data,index)=>(
            <div className='yobm owdsc cccs' key={index}>
               <div>
                  <span>시세 기준: {(data.soldDate).slice(5,16)}</span>
                  <img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt={data.itemName} />
               </div>
               <div>
               {data.itemName}
               {(data.unitPrice).toLocaleString("ko-KR")}
               </div>
            </div>
         ))
         :"b"}
      </div>
   )
}

export default ItemSises