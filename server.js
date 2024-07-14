const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();


//DB Connection

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "schooldb",

});


db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });


  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});