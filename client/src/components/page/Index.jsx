import React, { useState } from 'react'
import Charlist from './Charlist';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCharList as setCharList_redux } from '../../redux/reducer/charSearch'
function Index() {
  const [charName, setCharName] = useState("");
  const typingCharName = (e) => { setCharName(e.target.value) };
  const dispatch = useDispatch();   
  const fillters = (elements) => {
    if (elements.level === 110) {
       return true;
    }
 }

  const shootApi = async () => {
    await axios.get('/api/char', { params: { charName: charName } }).then(res => {
      let data = res.data
      if (!data.rows) {
        alert("API 서버에 문제가 있습니다.")
      } else {
        let filArr = data.rows;
        let fillArr2 = filArr.filter(fillters)
        dispatch(setCharList_redux(fillArr2))
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
            <h3><span>D</span><span>F</span><span>G</span><span>G</span></h3>
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