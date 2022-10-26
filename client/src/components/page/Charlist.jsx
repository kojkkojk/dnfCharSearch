import React from 'react';
import { serverList } from "../../configs/server";
import { useSelector, useDispatch } from 'react-redux';
import { setCharInfos } from '../../redux/reducer/charSearch';
import { useNavigate } from "react-router-dom";

function Charlist() {
    const charList = useSelector((state => state.charSearch.charList));
    const dispatch = useDispatch();
    const navigate = useNavigate();

return (
    <div className="Charlist">
        <div className="srcn tr">
            {charList.length > 0 ?
                charList.map((data, index) => (
                    <div className="scon" name={data.characterName} key={index}>
                        <div className="seh_abata">
                            {/* <Link to={`/status/${data.characterId}`}> */}
                            <img alt="char" src={`https://img-api.neople.co.kr/df/servers/${data.serverId}/characters/${data.characterId}?zoom=1`}
                            onClick={()=>{
                                dispatch(setCharInfos({server:data.serverId,charId:data.characterId}))
                                navigate(`/status/${data.characterName}`);
                            }}
                            />
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