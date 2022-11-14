import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setSiseList as setSiseList_redux} from '../../redux/reducer/itemSiseSlice';
import ItemSises from './ItemSises';

function Auction() {
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
    <div>
      <div className="inputBx">
          <input type="text" placeholder='아이템 시세 검색' onChange={typingItemName} value={itemName} />
          <button onClick={check}>검색</button>
      </div>
      <div className='seght'>
        <ItemSises/>
      </div>
    </div>
  )
}

export default Auction