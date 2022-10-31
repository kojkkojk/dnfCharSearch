import React from 'react';
import { fillterString } from '../../configs/fillter';
function Item(props) {
  const list = props.list
  const lol = (arr)=>{
    let a = "";
    arr.forEach(element => {
      a += `${element.name} +${element.value} `;
    });
    return a
  }
  return (
    <div className='itemList'>
      {list.length > 0 ?
        list.map((data, index) => (
          <React.Fragment key={index}>
            <div className='item'>
              <div className='itemImg'>
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
                    <div className={
                      data.growInfo.options[0].level + data.growInfo.options[1].level + data.growInfo.options[2].level + data.growInfo.options[3].level >= 240 ?
                      `total_grow_240 total_grow` : `total_grow total_grow_lv`}>
                    {data.growInfo.options[0].level + data.growInfo.options[1].level + data.growInfo.options[2].level + data.growInfo.options[3].level}
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
    </div>
  )
}

export default Item