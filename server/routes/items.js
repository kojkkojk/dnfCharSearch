const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

const filltered = (array) => {
   let sent = ""
   if (array.length < 15) {
      for (let i = 0; i < array.length; i++) {
         if (i === array.length - 1) {
            sent = sent + array[i].itemId;
         } else {
            sent = sent + array[i].itemId + ",";
         }
      }
   } else if (array.length >= 15) {
      for (let i = 0; i < 15; i++) {
         if (i === 14) {
            sent = sent + array[i].itemId;
         } else {
            sent = sent + array[i].itemId + ",";
         }
      }
   }
   return sent
}

router.get("/", async (req, res, next) => {
   let itemName = req.query;
   let enCode = encodeURI(itemName.itemNamed);
   try {
      await axios.get(`${neoplrAPI.firstURL}/auction-sold?itemName=${enCode}&wordType=front&wordShort=true&limit=30&apikey=${neoplrAPI.apiKey}`)
         .then((response) => { res.send(response.data) })
   } catch (error) {
      next(error)
   }
})

router.get("/equips", async (req, res, next) => {
   let eqicItems = req.query;
   let enCode = encodeURI(eqicItems.itemNamed);
   try {
      await axios.get(`${neoplrAPI.firstURL}/items?itemName=${enCode}&wordType=full&q=minLevel:105,rarity:에픽&limit=30&apikey=${neoplrAPI.apiKey}`).then((response)=>{
         const euips = response.data.rows;       
         axios.get(`${neoplrAPI.firstURL}/multi/items?itemIds=${filltered(euips)}&apikey=${neoplrAPI.apiKey}`).then((res2)=>{
            res.send(res2.data)  
         }) 
      })
   } catch (error) {
      next(error)
   }
})


module.exports = router;