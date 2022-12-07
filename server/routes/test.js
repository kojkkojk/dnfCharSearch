const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio")
const iconv = require("iconv-lite");

const url = "https://df.nexon.com/df/news/update";

router.get("/", (req, res) => {
   let arr = []
   axios.get(url, { responseType: 'arraybuffer', responseEncoding: 'binary' }).then((resq) => {
      let newArr = []
      const content = iconv.decode(resq.data, 'euc-kr');
      const $ = cheerio.load(content)
      $(".update_con .grd ul li").map(function (i, element) {
         arr[i] = {
            'date': $(element).find('dl .date').text(),
            'title': $(element).find('dl dt a').text(),
            'link': url + String($(element).find('dl dt a').attr("href")),
            'img': "https:" + String($(element).find('p a img').attr('src'))
         }
      });
      newArr = arr
      res.send(newArr)
   })
})

module.exports = router;