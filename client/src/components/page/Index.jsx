import React, { useState } from 'react'
import Charlist from './Charlist';

function Index() {
  const [charList] = useState(
      [
          { name: "하믄랑", server: "바칼", job: "眞런처", fame:38833, level: 110, adv: "중붕이", id: "bff6ab2eca65fd9840e4a85a4882b200", img: "https://img-api.neople.co.kr/df/servers/bakal/characters/bff6ab2eca65fd9840e4a85a4882b200?zoom=1&amp;temp=2080" },
          { name: "PD하믄랑", server: "바칼", job: "眞베가본드", fame:36888, level: 110, adv: "중붕이", id: "737ebb0cb6d5c6cefb60ecb3ae6807b0", img: "https://img-api.neople.co.kr/df/servers/bakal/characters/737ebb0cb6d5c6cefb60ecb3ae6807b0?zoom=1&amp;temp=2080" },
          { name: "goosioves", server: "바칼", job: "眞런처", fame:35537, level: 110, adv: "중붕이", id: "beee972e5361cdb64d5eb9b23629dc8e", img: "https://img-api.neople.co.kr/df/servers/bakal/characters/beee972e5361cdb64d5eb9b23629dc8e?zoom=1&amp;temp=2080" }
      ]
  )
  return (
    <div className='index_page'>
      <div className='searchBox'>
        <div className="banners">
          <div className="bannerIMG" style={{backgroundImage:"url(https://developers.neople.co.kr/img/svisual_df.jpg)"}}>
            <h3>A/DC.GG</h3>
          </div>
        </div>
        <div className="inputBx">
          <input type="text" placeholder='캐릭터 닉네임'/>
          <button>검색</button>
        </div>
      </div>
      <Charlist charList={charList}/>
    </div>
  )
}

export default Index