import React from 'react'

function Item(props) {
  const list = props.list
  return (
    <div className='itemList'>
      {list.length > 0 ?
        list.map((data, index) => (
          <React.Fragment key={index}>
            <div className='item'>
              <div className='itemName itemImg'>
                <img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" />
                <span>{data.slotName}</span>
              </div>
              <div className="ddds">
                <div className={`nava`}>
                  <span>{data.itemName}</span>
                  <span className='ech'>
                    {data.enchant ? <>{data.enchant.status && !data.enchant.explain && !data.enchant.reinforceSkill ?
                    data.enchant.status.length > 0 && data.enchant.status.map((enchant, index) => (
                      <React.Fragment key={index}>{enchant.name} {enchant.value} </React.Fragment>)) :
                    !data.enchant.status && data.enchant.explain && !data.enchant.reinforceSkill ?
                      `${data.enchant.explain}` : !data.enchant.status && !data.enchant.explain && data.enchant.reinforceSkill ?
                        `${data.enchant.reinforceSkill[0].skills[0].name} +${data.enchant.reinforceSkill[0].skills[0].value} ` : ""
                  }</> : ""}
                  </span>
                </div>
                <div className='havana'>
                  {!data.growInfo ? <></> : <span className='ech2'> {data.growInfo.options.map((optLevel, index) => (
                    <React.Fragment key={index}>{optLevel.level} </React.Fragment>))}
                    ({data.growInfo.options[0].level + data.growInfo.options[1].level + data.growInfo.options[2].level + data.growInfo.options[3].level})
                  </span>}
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