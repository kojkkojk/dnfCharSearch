import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { serverList } from "../../configs/server";
import Item from '../options/Item';
import Stats from '../options/Stats';
import Avatar from '../options/Avatar';

function CharInfos() {
  const [searchParams] = useSearchParams();
  const [charStatus0, setCharStatus0] = useState({});
  const [charStatus1, setCharStatus1] = useState([]);
  const [charStatus2, setCharStatus2] = useState([]);
  const [charStatus3, setCharStatus3] = useState([]);
  const [charStatus4, setCharStatus4] = useState([]);
  const [infos_selected, setInfos_selected] = useState("장착 아이템");
  const server = searchParams.get('server');
  const id = searchParams.get('id');
  const info_menusRef = useRef([])
  const userDetail = async (serverId, characterId) => {
    await axios.get("/api/char/details", { params: { serverId: serverId, characterId: characterId } }).then(res => {
      let datas = res.data;
      setCharStatus0(datas.status);
      setCharStatus1(datas.equps)
      setCharStatus2(datas.avatar)
      setCharStatus3(datas.talismans)
      setCharStatus4(datas.creature)
    }).catch(err => console.log(err))
  }
  const selection2 = (arr, list) => {
    arr.forEach(e => e.classList.remove("selected_menu"));
    if (list) list.classList.add("selected_menu");
  }
  useEffect(() => {
    userDetail(server, id)
  }, [searchParams])


  return (
    <div className='charInfos_Page'>
      <div className='tovws'>
        <div className="charInfoSelect">
          <div className="charImg">
            <div className='yposc'>
              <span>{serverList[server]}</span>
              <span>{charStatus0.characterName ? charStatus0.characterName : "loading.."}</span>
            </div>
            <img src={`https://img-api.neople.co.kr/df/servers/${server}/characters/${id}?zoom=2`} alt="char_img" />
          </div>
          <div className="selectBtn">
            <ul>
              <li onClick={() => { setInfos_selected("장착 아이템"); selection2(info_menusRef.current, info_menusRef.current[0]) }}
                className='info_menus selected_menu' ref={elem => (info_menusRef.current[0] = elem)}>장착 아이템</li>
              <li onClick={() => { setInfos_selected("스탯"); selection2(info_menusRef.current, info_menusRef.current[1]) }}
                className='info_menus' ref={elem => (info_menusRef.current[1] = elem)}>스탯</li>
              <li onClick={() => { setInfos_selected("아바타"); selection2(info_menusRef.current, info_menusRef.current[2]) }}
                className='info_menus' ref={elem => (info_menusRef.current[2] = elem)}>아바타</li>
              <li onClick={() => { setInfos_selected("탈리스만"); selection2(info_menusRef.current, info_menusRef.current[3]) }}
                className='info_menus' ref={elem => (info_menusRef.current[3] = elem)}>탈리스만</li>
              <li onClick={() => { setInfos_selected("버프강화"); selection2(info_menusRef.current, info_menusRef.current[4]) }}
                className='info_menus' ref={elem => (info_menusRef.current[4] = elem)}>버프강화</li>
            </ul>
          </div>
        </div>
        <div className="statusWindow">
          <div className="other_spec">
            <div><span>직&nbsp;&nbsp;업</span><span>{charStatus0.jobGrowName ? charStatus0.jobGrowName : ""}</span></div>
            <div><span>모&nbsp;&nbsp;험&nbsp;&nbsp;단</span><span>{charStatus0.adventureName ? charStatus0.adventureName : ""}</span></div>
            <div><span>길&nbsp;&nbsp;드</span><span>{charStatus0.guildName ? charStatus0.guildName : ""}</span></div>
            <div><span>명&nbsp;&nbsp;성</span><span>{charStatus0.status ? charStatus0.status[16].value : ""}</span></div>
            <div><span>나&nbsp;&nbsp;비&nbsp;&nbsp;탕&nbsp;&nbsp;?</span>
            {charStatus4 === null ? <span>크리처 없음</span> : 
            <span>{charStatus4.itemName ? charStatus4.itemName === "순백의 나비 공주" ? "O": "X":""}</span>}
          </div>
          </div>
          <div className='selected_status_views'><h2>{infos_selected}</h2></div>
          <div className='status_views'>
          { infos_selected === "장착 아이템" ? <Item list={charStatus1} /> :
            infos_selected === "스탯" ? <Stats list={charStatus0.status} /> :
            infos_selected === "아바타" ? <Avatar list={charStatus2} /> :
            infos_selected === "탈리스만" ? "탈리스만" :
            infos_selected === "버프강화" ? "버프강화" :
            ""
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharInfos