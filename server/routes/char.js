const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

router.get("/", async (req, res, next) => {
   let charNames = req.query;
   let enCode = encodeURI(charNames.charName);
   try {
      await axios.get(`${neoplrAPI.firstURL}/servers/all/characters?characterName=${enCode}&limit=100&wordType=full&apikey=${neoplrAPI.apiKey}`)
         .then((response) => {
            res.send(response.data);
         })
   } catch (error) {
      next(error)
   }
})

router.get("/details", async (req, res, next) => {
   let charData = req.query;
   let obj = {}
   try {      
      await Promise.all([
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/equipment?apikey=${neoplrAPI.apiKey}`)
            .then((response) => { obj.equps = response.data.equipment}),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/status?apikey=${neoplrAPI.apiKey}`).then((res)=>{
           obj.status = res.data
         })
      ])
   } catch (error) {
      next(error)
   }
   console.log(obj);
})
module.exports = router;