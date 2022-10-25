const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

router.get("/",(req,res)=>{
   let charNames = req.query;
   // let enCode = encodeURI(charNames.charName);
   let enCode = encodeURI("하믄랑");
   console.log(charNames);
   axios.get(`${neoplrAPI.firstURL}/servers/all/characters?characterName=${enCode}&limit=100&wordType=full&apikey=${neoplrAPI.apiKey}`)
   .then((response)=>{
      console.log(response.data);
   })
})
module.exports = router;