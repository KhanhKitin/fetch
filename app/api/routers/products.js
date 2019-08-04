const express = require('express');
const router = express.Router();
const auth = require('../../auth');
const verifyToken = auth.verify;
const jwt = require('jsonwebtoken');

router.post("/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: "post created...",
          authData
        });
      }
    });
  });

module.exports = router;