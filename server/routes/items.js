const express = require("express");
const router = express.Router();
const axios = require("axios");
const neoplrAPI = require("../configs/configs");

const fillters = (elements) => {
   if (elements.itemTypeDetail !== "소모품") {
         return true;
      } 
}

router.get("/", async (req, res, next) => {
   let itemName = req.query;
   let enCode = encodeURI(itemName.itemNamed);
   let newObj = {}
   try {
      await axios.get(`${neoplrAPI.firstURL}/auction-sold?itemName=${enCode}&wordType=full&wordShort=true&limit=50&apikey=${neoplrAPI.apiKey}`)
         .then((response) => {
            let datas = response.data.rows;
            let filterArr = datas.filter(fillters);
            newObj.rows = filterArr;
            res.send(newObj);
         })
   } catch (error) {
      next(error)
   }
})




module.exports = router;