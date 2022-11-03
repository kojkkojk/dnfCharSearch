import React from 'react'

function Skillstyle(props) {
    const active_Skill = props.active_Skill;
    const passive_Skill = props.passive_Skill;
  return (
    <div className='skills'>
        <div className='activeSkill'>
            <h3>액티브</h3>
            <div>
                {active_Skill.length > 0 ?  
                active_Skill.map((data,index)=>(
                    <div key={index}>
                        {data.name} / {data.level}
                    </div>
                ))
                :""}
            </div>
        </div>
        <div className='passiveSkill'>
            <h3>패시브</h3>
            <div>
                {passive_Skill.length > 0 ?  
                passive_Skill.map((data,index)=>(
                    <div key={index}>
                        {data.name} / {data.level}
                    </div>
                ))
                :""}
            </div>
        </div>
    </div>
  )
}

export default Skillstyle