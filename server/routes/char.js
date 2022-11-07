const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

router.get("/", async (req, res, next) => {
   let charNames = req.query;
   let enCode = encodeURI(charNames.charName);
   try {
      await axios.get(`${neoplrAPI.firstURL}/servers/all/characters?characterName=${enCode}&limit=100&wordType=full&apikey=${neoplrAPI.apiKey}`)
         .then((response) => {res.send(response.data)})
   } catch (error) {
      next(error)
   }
})

router.get("/details", async (req, res, next) => {
   let charData = req.query;
   let obj = {}
   try {
      await Promise.all([
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/status?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.status = res.data),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/equipment?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.equps = res.data.equipment),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/avatar?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.avatar = res.data.avatar),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/creature?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.creature = res.data.creature),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/talisman?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.talismans = res.data.talismans),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/skill/style?apikey=${neoplrAPI.apiKey}`)
            .then(res => obj.skill = res.data.skill),
         axios.get(`${neoplrAPI.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/skill/buff/equip/equipment?apikey=${neoplrAPI.apiKey}`).then(res => obj.buff = res.data.skill.buff),
      ])
   } catch (error) { 
      next(error)
   }
   res.send(obj)
})
module.exports = router;