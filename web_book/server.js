const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./src/database/connection");
const routerAuth = require('./src/api/routes/auth');
const routerAdmin = require('./src/api/routes/admin');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connection
  .sync({
    // force: true
  })
  .then(() => {
    console.log("Connection has been established successfully.");
    app.use('/admin', routerAdmin);
    app.use(routerAuth);

    app.listen(3000, err => {
      if (err) {
        console.log(err);
      }
      console.log("app listening on port 3000");
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
