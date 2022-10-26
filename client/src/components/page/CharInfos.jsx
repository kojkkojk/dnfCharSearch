import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import axios from 'axios';

function CharInfos() {
    const { id } = useParams();
    const charInfo = useSelector((state => state.charSearch.charInfo));
    const userDetail = async (serverId, characterId) => {
       axios.get("/api/char/details", { params: { serverId: serverId, characterId: characterId } }).then(res => {
          let datas = res.data;
          console.log(datas);
       }).catch(err => console.log(err))
    }
    
  return (
    <div>
        #{id}번째 포스트
    </div>
  )
}

export default CharInfos