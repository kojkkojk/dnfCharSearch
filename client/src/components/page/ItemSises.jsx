import React from 'react';
import { useSelector } from 'react-redux';

function ItemSises() {
   const itemSiseList = useSelector((state => state.itemSiseSlice.itemSiseList));
   return (
      <div className='auctionSise'>
         {itemSiseList.length > 0 ? 
         itemSiseList.map((data,index)=>(
            <div className='yobm' key={index}>
               <div className='owdsc'>
                  <span>{(data.soldDate).slice(5,10)}</span>
                  <span>{(data.soldDate).slice(11,16)}</span>
                  <span><img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt={data.itemName} /></span>
               </div>
               <div className='cccs'>
                  <span>{data.itemName}</span>
                  <span>개당 {(data.unitPrice).toLocaleString("ko-KR")}</span>
                  {data.upgrade ? <span>{data.upgrade} 업글</span> : <span></span>}
               </div>
            </div>
         ))
         :""}
      </div>
   )
}

export default ItemSises