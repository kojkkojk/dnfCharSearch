import React from 'react'

function Index() {
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
    </div>
  )
}

export default Index