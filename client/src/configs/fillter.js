export const fillterString = (txt)=>{
   let a = txt.replace("속성강화","속강");
   let a2 = a.replace("물리 크리티컬 히트","물크");
   let a3 = a2.replace("마법 크리티컬 히트","마크");
   let a4 = a3.replace("물리 공격력","물공");
   let a5 = a4.replace("마법 공격력","마공");
   let a6 = a5.replace("독립 공격력","독공");
   let a7 = a6.replace("모든 속성 강화","모속강");
   return a7
}