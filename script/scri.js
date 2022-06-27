const express = require("express");
const app = express();
const port = 3000;
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

con.query(datos(), function (err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    //alert("su texto se creó con exito!");
});

con.end();

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

function datos(){ 
    //app.get('/larenota/script/', function (req, res) {
    //    var titulo = req.query.texttitle || '';	
    //});
    var titulo = document.getElementById("texttitle").value;
    var texto = document.getElementById("textarea1").value;
    var fecha = document.getElementById("fecha").value;
    console.log(titulo);
    console.log(texto);
    console.log(fecha);
    var sql = "INSERT INTO notas (titulo, descripcion, fecha) VALUES ('"+ titulo +"', '"+ texto +"', '"+ fecha +"')";
    console.log(sql);
    return(sql)
}