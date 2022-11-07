import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { serverList } from "../../configs/server";
import Item from '../options/Item';
import Stats from '../options/Stats';
import Avatar from '../options/Avatar';
import Talismans from '../options/Talismans';
import Skillstyle from '../options/Skillstyle';
import Buff from '../options/Buff';

function CharInfos() {
  const [searchParams] = useSearchParams();
  const [charStatus0, setCharStatus0] = useState({});
  const [charStatus1, setCharStatus1] = useState([]);
  const [charStatus2, setCharStatus2] = useState([]);
  const [charStatus3, setCharStatus3] = useState([]);
  const [charStatus4, setCharStatus4] = useState([]);
  const [charStatus5, setCharStatus5] = useState([]);
  const [charStatus6, setCharStatus6] = useState({});
  const [infos_selected, setInfos_selected] = useState("장착 아이템");
  const server = searchParams.get('server');
  const id = searchParams.get('id');
  const info_menusRef = useRef([])
  const userDetail = async (serverId, characterId) => {
    await axios.get("/api/char/details", { params: { serverId: serverId, characterId: characterId } }).then(res => {
      let datas = res.data;
      setCharStatus0(datas.status);
      setCharStatus1(datas.equps);
      setCharStatus2(datas.avatar);
      setCharStatus3(datas.talismans);
      setCharStatus4(datas.creature);
      setCharStatus5(datas.skill)
      setCharStatus6(datas.buff)
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
              <li onClick={() => { setInfos_selected("스킬트리"); selection2(info_menusRef.current, info_menusRef.current[5]) }}
                className='info_menus' ref={elem => (info_menusRef.current[5] = elem)}>스킬트리</li>
            </ul>
          </div>
        </div>
        <div className="statusWindow">
          <div className="other_spec">
            <div><span>직&nbsp;&nbsp;업</span><span>{charStatus0.jobGrowName ? charStatus0.jobGrowName : ""}</span></div>
            <div><span>모&nbsp;&nbsp;험&nbsp;&nbsp;단</span><span>{charStatus0.adventureName ? charStatus0.adventureName : ""}</span></div>
            <div><span>길&nbsp;&nbsp;드</span><span>{charStatus0.guildName ? charStatus0.guildName : ""}</span></div>
            <div><span>명&nbsp;&nbsp;성</span><span>{charStatus0.status ? charStatus0.status[16].value : ""}</span></div>
            <div><span>자&nbsp;&nbsp;버&nbsp;&nbsp;프</span><span>{charStatus6.skillInfo ? `${charStatus6.skillInfo.name} Lv.${charStatus6.skillInfo.option.level}` : ""}</span></div>
          </div>
          <div className='selected_status_views'><h2>{infos_selected}</h2></div>
          <div className='status_views'>
            {infos_selected === "장착 아이템" ? <Item list={charStatus1} /> :
            infos_selected === "스탯" ? <Stats list={charStatus0.status} /> :
            infos_selected === "아바타" ? <Avatar list={charStatus2} /> :
            infos_selected === "탈리스만" ? <Talismans list={charStatus3} /> :
            infos_selected === "버프강화" ? <Buff list={charStatus6}/> : 
            infos_selected === "스킬트리" ? <Skillstyle passive_Skill={charStatus5.style.passive} active_Skill={charStatus5.style.active} /> :             
            "" }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharInfos