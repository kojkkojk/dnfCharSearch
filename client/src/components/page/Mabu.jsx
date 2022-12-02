import React, { useState } from 'react';
import {
   accessory_armlet,
   accessory_earring,
   accessory_bojo,
   accessory_stone,
   armors_belt,
   armors_sanghai,
   armors_shoes,
   armors_shoulder,
   weapon} from '../../configs/babus'

function Mabu() {
   const [berils, setBerils] = useState([]);
   const [avg, setAvg] = useState([]);
   const [end, setEnd] = useState([]);
   const [selectBox, setSelectBox] = useState("선택 부위")
   const callApi =  (params) => {
      setBerils(params.gasungbi)
      setAvg(params.avg)
      setEnd(params.end)
   }
   return (
      <div className="containers">
         <div className='fecoodemmivihswwd'>
         <div className="charInfo">
            <div className="equips">
               <div className="armors">
                  <div className="armor" onClick={(e) => { setSelectBox(e.target.innerText); callApi(armors_shoulder) }}>어깨</div>
                  <div className="armor" onClick={(e) => { setSelectBox(e.target.innerText); callApi(armors_sanghai) }}>상의</div>
                  <div className="armor" onClick={(e) => { setSelectBox(e.target.innerText); callApi(armors_sanghai) }}>하의</div>
                  <div className="armor" onClick={(e) => { setSelectBox(e.target.innerText); callApi(armors_belt) }}>벨트</div>
                  <div className="armor" onClick={(e) => { setSelectBox(e.target.innerText); callApi(armors_shoes) }}>신발</div>
               </div>
               <div className="accessory">
                  <div className="armor" onClick={(e) => { callApi(accessory_earring); setSelectBox(e.target.innerText); }}>귀걸이</div>
                  <div className="armor" onClick={(e) => { callApi(accessory_stone); setSelectBox(e.target.innerText); }}>법석</div>
                  <div className="armor" onClick={(e) => { callApi(accessory_bojo); setSelectBox(e.target.innerText); }}>보장</div>
                  <div className="armor" onClick={(e) => { callApi(accessory_armlet); setSelectBox(e.target.innerText); }}>반지</div>
                  <div className="armor" onClick={(e) => { callApi(accessory_armlet); setSelectBox(e.target.innerText); }}>팔찌</div>
                  <div className="armor" onClick={(e) => { callApi(accessory_armlet); setSelectBox(e.target.innerText); }}>목걸이</div>
                  <div className="armor" onClick={(e) => { callApi(weapon); setSelectBox(e.target.innerText); }}>무기</div>
               </div>
            </div>
            <div className="charImgBx">
               <img src={"https://img-api.neople.co.kr/df/servers/anton/characters/7384cd7715bdd5450db216e2e034df85?zoom=2"} alt="chars" height={"100%"} />
            </div>
            <div className="textt">
               <ul>
                  <li>장비 부위를 클릭하면 해당 부위의 마법 부여를 확인할 수 있습니다.</li>
                  <li>바칼 레이드 카드와 보주의 이미지는 추가예정입니다.</li>
               </ul>
            </div>
         </div>
         <div className="cardInfos">
            <h1>{selectBox} 마부</h1>
            <div className="mabus">
               <h2>종결</h2>
               {end.length > 0 ?
                  end.map((data, index) => (
                     <div key={index}>
                        <span><img src={`https://img-api.neople.co.kr/df/items/${data.img}`} alt="ddolddol3" width={"100%"} /></span>
                        <span>{data.name}</span>
                        <span>{data.options}</span>
                     </div>
                  ))
                  : ""}
            </div>
            <div className="mabus">
               <h2>준종결</h2>
               {avg.length > 0 ?
                  avg.map((data, index) => (
                     <div key={index}>
                        <span><img src={`https://img-api.neople.co.kr/df/items/${data.img}`} alt="ddolddol3" width={"100%"} /></span>
                        <span>{data.name}</span>
                        <span>{data.options}</span>
                     </div>
                  ))
                  : ""}
            </div>
            <div className="mabus">
               <h2>가성비</h2>
               {berils.length > 0 ?
                  berils.map((data, index) => (
                     <div key={index}>
                        <span><img src={`https://img-api.neople.co.kr/df/items/${data.img}`} alt="ddolddol3" width={"100%"} /></span>
                        <span>{data.name}</span>
                        <span>{data.options}</span>
                     </div>
                  ))
                  : ""}
            </div>
         </div>
         </div>
      </div>
   )
}

export default Mabu