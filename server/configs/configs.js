require("dotenv").config(); // 모듈 불러오기

module.exports = {
   apiKey:process.env.apiKey,
   firstURL:"https://api.neople.co.kr/df",
   serverName:{
      anton: "안톤",
      bakal: "바칼",
      cain: "카인",
      casillas: "카시야스",
      diregie: "디레지에",
      hilder: "힐더",
      prey: "프레이",
      siroco: "시로코"
   }
}