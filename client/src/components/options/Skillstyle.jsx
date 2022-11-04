import React from 'react'

function Skillstyle(props) {
    const active_Skill = props.active_Skill;
    const passive_Skill = props.passive_Skill;
    const no1levelSkill = (arr)=>{
      let newArr = []
      arr.forEach(element => {
        if(element.level > 1){newArr.push(element)}
      });
      return newArr
    }
    
  return (
    <div className='skills'>
        <div className='activeSkill'>
            <h3>액티브</h3>
            <div>
                {active_Skill.length > 0 ?  
                no1levelSkill(active_Skill).map((data,index)=>(
                    <div className={
                    data.requiredLevel === 50 ||
                    data.requiredLevel === 85 ||
                    data.requiredLevel === 100 ? 
                    "skillBar 각성기" : "skillBar"} key={index}>
                        <span>{data.requiredLevel}</span>
                        <span>{data.name}</span>
                        <span>{data.level}</span>
                    </div>
                ))
                :""}
            </div>
        </div>
        <div className='passiveSkill'>
            <h3>패시브</h3>
            <div>
                {passive_Skill.length > 0 ?  
                no1levelSkill(passive_Skill).map((data,index)=>(
                    <div className='skillBar' key={index}>
                        <span>{data.requiredLevel}</span>
                        <span>{data.name}</span>
                        <span>{data.level}</span>
                    </div>
                ))
                :""}
            </div>
        </div>
    </div>
  )
}

export default Skillstyle