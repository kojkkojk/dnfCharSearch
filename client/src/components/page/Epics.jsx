import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setSiseList as setSiseList_redux} from '../../redux/reducer/itemSiseSlice';

function Epics() {
  //itemNamed
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("")
  const typingItemName = (e) => { setItemName(e.target.value) };
  const shootApi = async () => {
    await axios.get('/api/item', { params: { itemNamed: itemName } }).then(res => {
      let data = res.data
      if (!data.rows) {
        alert("API 서버에 문제가 있습니다.")
      } else {
        let filArr = data.rows;
        dispatch(setSiseList_redux(filArr))
      }
    }).catch(err => console.log(err))
  }

  const check = () => {
    if (itemName.length === 0) {
      alert("아이템을 검색하세요!")
    } else if (itemName.length !== 0) {
      shootApi()
      setItemName("")
    }
  }

  const onKeyEnter = (e) => {
    if (e.key === 'Enter' && itemName.length === 0) {
      alert("아이템을 검색하세요!")
    } else if (e.key === 'Enter' && itemName.length !== 0) {
      shootApi()
      setItemName("")
    }
  }

  return (
    <div className='auicirnmis'>
      <div className="auctionTxt">
        <div><span>시</span><span>세</span><span>검</span><span>색</span></div>
        <ul>
          <li>아이템 시세를 검색합니다.</li>
          <li>아이템은 단축어로도 검색이 가능합니다.</li>
          <li>Ex&#41; 투함포, 무골베, 검공아...</li>
        </ul>
      </div>
      <div className="inputBx">
          <input type="text" placeholder='경매장 시세 검색' onKeyDown={onKeyEnter} onChange={typingItemName} value={itemName} />
          <button onClick={check}>검색</button>
      </div>
      <div className='seght'>
      </div>
    </div>
  )
}

export default Epics