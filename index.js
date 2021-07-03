let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let http = require("http");

let hostname = "localhost";
let port = 3000;

let app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

//IMPORTING ROUTERS
let dishRouter = require("./routes/dishRouter");
let promoRouter = require("./routes/promoRouter");
let leaderRouter = require("./routes/leaderRouter");

//USING ROUTERS
app.use("/dishes", dishRouter.router);
app.use("/promotions", promoRouter.router);
app.use("/leadership", leaderRouter.router);


app.use(express.static(__dirname + "/public"));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});