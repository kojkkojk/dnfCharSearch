import React, { useState } from 'react'

function Charlist(props) {
    const [charList, setCharList] = useState(props.charList)
    return (
        <div className="Charlist">
            <div className="srcn tr">
                {charList.length > 0 ?
                charList.map((data,index)=>(                    
                <div className="scon" name={data.name} key={index}>
                    <div className="seh_abata">
                        <img alt="char" src={`${data.img}`} />
                    </div>
                    <div className="seh_sever">
                        <span className="sev server">{data.server}</span>
                        <span className="sev jobs">{data.job}</span>
                    </div>
                    <div className="seh_name">
                        <div className="name">
                            <span className="introd adv">{data.adv}</span>
                            <span className="introd nick">{data.name}</span>
                        </div>
                        <div className="level">
                            <span className="val lv">{data.level}</span>
                            <span className="val fame">{data.fame}</span>
                        </div>
                    </div>
                </div>
                ))    
                : ""}
            </div>
        </div>
    )
}

export default Charlist