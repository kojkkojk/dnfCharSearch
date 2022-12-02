const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio")

const url = "https://df.nexon.com/df/news/update";
const url2 = "http://localhost:8888/";


router.get("/", (req, res) => {
   const getHtml = async () => {
      try {
         return await axios.get(url2)
      } catch (error) {
         if (error) throw error
      }
   }
   getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const data = $('.grd > ul > li > p').text();
      console.log(data);
      return data
   }).then(data => {
      // for (let i = 0; i < data.length; i++) {
      //    console.log(data[i].attribs.alt);
      // }
   })
   res.send("hi")
})

module.exports = router;