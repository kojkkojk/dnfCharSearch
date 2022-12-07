const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");

let url = "https://df.nexon.com/df/news/update"
let arr = []
let newArr = []
function getData() {
   axios.get(url).then((res) => {
      const $ = cheerio.load(res.data);
      // console.log($.html());
      $(".update_con .grd ul li").map(function (i, element) {
         arr[i] = {
            'date': $(element).find('dl .date').text(),
            'title': encodeURI($(element).find('dl dt a').text()),
            'link': url + String($(element).find('dl dt a').attr("href")),
            'img': "https:" + String($(element).find('p a img').attr('src'))
         }
      });
      newArr = arr
      console.log(newArr);
   })
}

const getHtml = () => {
   try {
      return axios.get(url, { responseType: 'arraybuffer', responseEncoding: 'binary' })
   } catch (error) {
      if (error) throw error
   }
}
getHtml().then(html => {
   const content = iconv.decode(html.data, 'euc-kr');
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
   console.log(newArr);
})

// getData()