const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

router.get("/", async (req, res, next) => {
   let itemName = req.query;
   let enCode = encodeURI(itemName.itemNamed);
   try {
      await axios.get(`${neoplrAPI.firstURL}/auction-sold?itemName=${enCode}&wordType=front&wordShort=true&limit=20&apikey=${neoplrAPI.apiKey}`)
         .then((response) => {res.send(response.data)})
   } catch (error) {
      next(error)
   }
})




module.exports = router;