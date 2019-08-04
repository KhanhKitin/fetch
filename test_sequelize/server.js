const express = require("express");
const Data = require("./data");
const app = express();
const connection = require('./database');


const User = require("./models/User");
const Post = require("./models/Post");

User.hasOne(Post);

connection
  .sync({
    // logging: console.log,
    // force: true
  })
  .then(() => {
    console.log("Connection has been established successfully.");
    //  User.bulkCreate(Data);

    app.get('/', (req, res) => {
        // User.findAll().then(user => {
        //   res.json(user);
        // })
        // .catch(err => {
        //   console.log(err);
        //   res.status(404).send(err);
        // })

        // User.destroy({
        //   where: {
        //     name: "hoang khanh"
        //   }
        // }).then(() => {
        //   console.log('done');
        // })
        // .catch(err => {
        //   console.log(err);
        //   res.status(404).send(err);
        // })

        // User.findByPk(2).then(user => {
        //   console.log(user);
        //   res.json(user);
        // })
        // .catch(err => {
        //   console.log(err);
        //   res.status(404).send(err);
        // })
        
        User.findOne({ where: {name: 'phung anh'} }).then(user => {
          res.json(user);
        }).catch(err => {
          res.status(404).send(err);
        })

    });


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
