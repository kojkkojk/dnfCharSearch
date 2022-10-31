// let a = "화속성강화 30"

// const fillterString = (txt)=>{
//    let a = txt.replace("속성강화","속강");
//    let a2 = a.replace("물리 크리티컬","물크");
//    let a3 = a2.replace("마법 크리티컬","마크");
//    let a4 = a3.replace("물리 공격력","물공");
//    let a5 = a4.replace("마법 공격력","마공");
//    let a6 = a5.replace("독립 공격력","독공");
//    let a7 = a6.replace("모든 속성 강화","모속강");
//    return a7
// }

// console.log(fillterString(a));


let fc = [
     {name: "HP", value: 115974},
     {name: "MP", value: 107504},
     {name: "물리 방어율", value: 21.8},
     {name: "마법 방어율", value: 30.8},
     {name: "힘", value: 2825},
     {name: "지능", value: 3984},
     {name: "체력", value: 2939},
     {name: "정신력", value: 3349},
     {name: "물리 공격", value: 2259},
     {name: "마법 공격", value: 2739},
     {name: "물리 크리티컬", value: 42},
     {name: "마법 크리티컬", value: 100.7},
     {name: "독립 공격", value: 2618},
     {name: "공격 속도", value: -3},
     {name: "캐스팅 속도", value: 75.6},
     {name: "이동 속도", value: 29.4},
     {name: "모험가 명성", value: 30029},
     {name: "적중률", value: 51},
     {name: "회피율", value: 10.5},
     {name: "HP 회복량", value: 1147},
     {name: "MP 회복량", value: 18957},
     {name: "경직도", value: 0},
     {name: "히트리커버리", value: 699},
     {name: "화속성 강화", value: 250},
     {name: "화속성 저항", value: 21},
     {name: "수속성 강화", value: 248},
     {name: "수속성 저항", value: 11},
     {name: "명속성 강화", value: 248},
     {name: "명속성 저항", value: 11},
     {name: "암속성 강화", value: 250},
     {name: "암속성 저항", value: 11},
     {name: "물리 방어", value: 27893},
     {name: "마법 방어", value: 44445},
     {name: "피해 증가", value: 138275},
     {name: "버프력", value: 0},
     {name: "데미지 증가", value: 0},
     {name: "크리티컬 데미지 증가", value: 0},
     {name: "추가 데미지 증가", value: 0},
     {name: "모든 공격력 증가", value: 0},
     {name: "스킬 공격력 증가", value: 0},
     {name: "물리 공격력 증가", value: 0},
     {name: "마법 공격력 증가", value: 0},
     {name: "독립 공격력 증가", value: 0},
     {name: "힘 증가", value: 0},
     {name: "지능 증가", value: 0},
     {name: "지속피해", value: 0},
     {name: "쿨타임 감소", value: 0}
   ]

 const sds = (arr)=>{      
   let a = ""
   for (let i = 0; i < 16; i++) {
      a += `<span>${arr[i].name}</span>`;
   }
   return a
}

console.log(sds(fc));