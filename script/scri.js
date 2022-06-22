const express = require("express");
const app = express();
const port = 3000;
const ruta = __dirname + "./index.html";
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "larenota",
});

con.connect();

con.query("SELECT * FROM notas", function (err, res) {
    if (err) throw err;
    console.log(res);
});

con.end();

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});