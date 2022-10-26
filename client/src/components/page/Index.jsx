import React, { useState } from 'react'
import Charlist from './Charlist';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCharList as setCharList_redux } from '../../redux/reducer/charSearch'
function Index() {
  const [charName, setCharName] = useState("");
  const typingCharName = (e) => { setCharName(e.target.value) };
  const dispatch = useDispatch();

  const shootApi = async () => {
    await axios.get('/char', { params: { charName: charName } }).then(res => {
      let data = res.data
      if (!data.rows) {
        alert("API 서버에 문제가 있습니다.")
      } else {
        dispatch(setCharList_redux(data.rows))
      }
    }).catch(err => console.log(err))
  }

  const check = () => {
    if (charName.length === 0) {
      alert("캐릭터 명을 입력하세요!")
    } else if (charName.length !== 0) {
      shootApi()
      setCharName("")
    }
  }
  const onKeyEnter = (e) => {
    if (e.key === 'Enter' && charName.length === 0) {
      alert("캐릭터 명을 입력하세요!")
    } else if (e.key === 'Enter' && charName.length !== 0) {
      shootApi()
      setCharName("")
    }
  }

  return (
    <div className='index_page'>
      <div className='searchBox'>
        <div className="banners">
          <div className="bannerIMG" style={{ backgroundImage: "url(https://developers.neople.co.kr/img/svisual_df.jpg)" }}>
            <h3>A/DC.GG</h3>
          </div>
        </div>
        <div className="inputBx">
          <input type="text" placeholder='캐릭터 닉네임' onChange={typingCharName} onKeyDown={onKeyEnter} value={charName} />
          <button onClick={check}>검색</button>
        </div>
      </div>
      <Charlist />
    </div>
  )
}

export default Index