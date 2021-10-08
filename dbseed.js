const mysql = require("mysql");

const con = mysql.createConnection({
  host: "vegandonut-instance-1.ce0vo4o1urft.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "vegandonut",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.end();
});

let express = require("express");
let app = newexpress();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "paradisedonutcompany.cluster-c2ov7unnnal8.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "vegandonut",
    database: "vegandonuts",
    port: 3306,
  },
});
app.get("/", (req, res) => {
  knex
    .select()
    .from("flavor")
    .then((result) => {
      console.log(result);
      let donutNameList = [];
      let imgList = [];
      let descriptionList = [];
      let priceList = [];
      let typeList = [];
      for (let i = 0; i < result.length; i++) {
        donutNameList.append(result[i].donutName);
        imgList.append(result[i].img);
        descriptionList.append(result[i].description);
        priceList.append(result[i].price);
        typeList.append(result[i].type);
      }
      res.send(donutNameList, imgList, descriptionList, priceList, typeList);
    });
});
app.listen(3000);
