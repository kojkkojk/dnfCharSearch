import React from 'react';
import { serverList } from "../../configs/server";
import { useSelector } from 'react-redux';
import axios from 'axios';

function Charlist() { 
    const charList = useSelector((state => state.charSearch.charList));

    const userDetail = async (serverId, characterId) => {
       axios.get("/char/details", { params: { serverId: serverId, characterId: characterId } }).then(res => {
        //   let datas = res.data;
        //   changeCharData({ ...datas, serverId: serverId })
       }).catch(err => console.log(err))
    }

    return (
        <div className="Charlist">
            <div className="srcn tr">
                {charList.length > 0 ?
                    charList.map((data, index) => (
                        <div className="scon" name={data.characterName} key={index}>
                            <div className="seh_abata">
                                <img alt="char" src={`https://img-api.neople.co.kr/df/servers/${data.serverId}/characters/${data.characterId}?zoom=1`} onClick={()=>{userDetail(data.serverId,data.characterId)}}/>
                            </div>
                            <div className="seh_sever">
                                <span className="sev server">{serverList[data.serverId]}</span>
                                <span className="sev jobs">{data.jobGrowName}</span>
                            </div>
                            <div className="seh_name">
                                <span className="val nick">{data.characterName}</span>
                                <span className="val lv">Lv.{data.level}</span>
                            </div>
                        </div>
                    )) : ""}
            </div>
        </div>
    )
}

export default Charlist