import React, { useState } from 'react';
import { fillterString } from '../../configs/fillter';
import Modals from '../designs/Modals'
function Item(props) {

  const list = props.list
  const creature = props.creature

  const lol = (arr)=>{
    let a = "";
    arr.forEach(element => {
      a += `${element.name} +${element.value} `;
    });
    return a
  }
  //itemTypeDetail itemId
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState({})
  function openModal(optins) {
    setSelectItem(optins)
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='itemList'>
      {list.length > 0 ?
        list.map((data, index) => (
          <React.Fragment key={index}>
            <div className='item'>
              <div className='itemImg' 
                onClick={()=>{openModal(data)}}>
                {data.upgradeInfo ? <div className='upgradeTrue'></div> : <></>}
                <img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" />
                <span>{data.slotName}</span>
              </div>
              <div className="itemName">
                <div className="iNames">
                  <div className='opggisgood'>{data.itemName}</div>
                  <div className='fowisnotgood'>
                    {data.upgradeInfo ? <span className='upgradePick'>{data.upgradeInfo.itemName}</span> : <></>}
                    <span className='ech'>
                      {data.enchant ? 
                      <>{data.enchant.status && !data.enchant.explain && !data.enchant.reinforceSkill ?
                        data.enchant.status.length > 0 && data.enchant.status.map((enchant, index) => (
                          <React.Fragment key={index}>{fillterString(enchant.name)} +{enchant.value} </React.Fragment>)) :
                        data.enchant.status && data.enchant.explain && !data.enchant.reinforceSkill ?
                          `${data.enchant.explain} ${fillterString(lol(data.enchant.status))}`:
                          !data.enchant.status && !data.enchant.explain && data.enchant.reinforceSkill ?
                          `${data.enchant.reinforceSkill[0].skills[0].name} +${data.enchant.reinforceSkill[0].skills[0].value} ` : ""}
                      </>
                      :""}
                    </span>
                  </div>
                </div>
                <div className='iLevels'>
                  {!data.growInfo ? <></> : 
                  <>
                    <div className={data.growInfo.total.level >= 240 ? `total_grow_240 total_grow` : `total_grow total_grow_lv`}>
                    {data.growInfo.total.level}
                    </div>
                    <div className='grow_lv'>
                    {data.growInfo.options.map((optLevel, index) => (<span key={index}>{optLevel.level} </span>))}
                    </div>
                  </>}
                </div>
              </div>
              <div className="ref">
                <span className={`${data.amplificationName}`}>
                  {data.reinforce === 0 ? <></> : "+" + data.reinforce}
                  {data.refine === 0 ? <></> : "(" + data.refine + ")"}
                </span>
              </div>
            </div>
          </React.Fragment>
        )) : ""}
        {creature === null ? "" :
        <div className='item'>
          <div className='itemImg'>
            <img src={`https://img-api.neople.co.kr/df/items/${creature["itemId"]}`} alt="아이템" />
            <span>크리처</span>
          </div>
          <div className="itemName">
            <div className="iNames">
              <div className='opggisgood'>{creature.itemName}</div>
              <div className='fowisnotgood'>
                <span className='ech'>{creature.clone.itemId === null || creature.clone.itemId === undefined ? "" : creature.clone.itemName}</span>
              </div>
            </div>
            <div className='iLevels'></div>
          </div>
          <div className="ref">
          </div>
        </div>}
        <Modals 
        modalIsOpen={modalIsOpen} 
        afterOpenModal={afterOpenModal} 
        closeModal={closeModal} 
        options={selectItem}/>
    </div>
  )
}

export default Item