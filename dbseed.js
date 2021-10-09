const express = require("express");
const app = express();

// set up database connection

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "vegandonut-instance-1.ce0vo4o1urft.us-east-2.rds.amazonaws.com",
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
      res.send(result);
    });
});
app.listen(3000);
