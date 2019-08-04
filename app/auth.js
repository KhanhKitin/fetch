const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const beaerHeader = req.headers["authorization"];
  //check if bearer is underfined
  if (typeof beaerHeader !== "undefined") {
    //split at the space
    const bearer = beaerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[0]; // do chua cong bear nen mang la [1];
    //set the token
    req.token = bearerToken;
    //Next miidleware
    next();
  } else {
    res.sendStatus(403);
    console.log("truy cap thai bai vi chua dang nhap");
  }
};
