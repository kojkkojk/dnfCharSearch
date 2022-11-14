const express = require("express");
const app = express();
const port = 5050;
const http = require('http').createServer(app);
let charRouter = require("./routes/char");
let itemRouter = require("./routes/items")


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/char",charRouter);
app.use("/api/item",itemRouter);

http.listen(port, () => {console.log('listening on ' + port)}); 