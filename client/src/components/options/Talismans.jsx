import React from 'react'

function Talismans(props) {
    const list = props.list
  return (
    <div className='talisman_views'>
        {list.length > 0 ? 
        list.map((data,index)=>(
            <div key={index} className="ttttttt">
                <div className='talisman'>
                    <img src={`https://img-api.neople.co.kr/df/items/${data.talisman["itemId"]}`} alt="탈리스만" />
                    <span>{data.talisman["itemName"]}</span>
                </div>
                <div className="runes">
                    {data.runes.length > 0 ?
                    data.runes.map((runed,index)=>( 
                    <span className={(runed.itemName).substring(4, 8)} key={index}>{runed.itemName}</span>))
                    : <span></span>}
                </div>
            </div>
        )) : "" }
    </div>
  )
}

export default Talismans