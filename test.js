const Crawler = require("crawler");

let c = new Crawler({
   maxConnections: 10,
   // This will be called for each crawled page
   callback: function (error, res, done) {
      const $ = res.$;
      let $tableList = $("table.tbl").children("tbody").toArray()
      if (error) {
         console.log(error);
      } else {
         console.log($tableList[0].children[0]);
      }
      done();
   }
});

// Queue just one URL, with default callback
c.queue('https://df.nexon.com/df/news/notice');