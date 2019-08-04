const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../config");
const path = require("path");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const async = require("async");

router.get("/register", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../public/register.html"));
});

router.post("/register", (req, res, next) => {
  const { email, username, password } = req.body;
  const sql = "SELECT * FROM user WHERE email = ?";

  connection.query(sql, [email], (error, results, fields) => {
    if (results.length > 0) {
      res.json({
        message: "tai khoan da ton tai"
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const sql1 =
        "INSERT INTO user (username, password, email ) VALUES ('" +
        username +
        "','" +
        hash +
        "','" +
        email +
        "')";
      connection.query(sql1, function(err, result, field) {
        if (err) {
          res.json({
            status: false,
            message: "error !!"
          });
        } else {
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "kitintest1998@gmail.com",
              pass: "khongcomatkhau"
            }
          });
          var mailOptions = {
            from: "kitintest1998@gmail.com",
            to: email,
            subject: "Hoang Quoc Khanh",
            text: "xac minh tai khoan!",
            html:
              '<a href="http://localhost:3000/user/login"><p>click to here</p></a>'
          };

          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          res.json({
            message: "Vao mail de xac minh tai khoan"
          });
          // res.redirect("http://localhost:3000/user/login");
          // res.json({
          //   status: true,
          //   data: result,
          //   message: "sucessfully"
          // });
        }
      });
    }
  });
});

router.get("/login", (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, "../../public/index.html"));
});

router.post("/login", (req, res, next) => {
  const emailLogin = req.body.email;
  const passwordLogin = req.body.password;

  connection.query(
    "SELECT * FROM user WHERE email = ?",
    [emailLogin],
    (error, results, fields) => {
      if (error) {
        res.status(404).json({
          message: 'User not found',
          success: false,
        });
      } else {
        if (results.length > 0) {
          const comparePassword = bcrypt.compareSync(
            passwordLogin,
            results[0].password
          );
          if (comparePassword) {
            jwt.sign(
              {
                email: results[0].email,
                username: results[0].username,
                id: results[0].user_id
              },
              "secretkey",
              (err, token) => {
                res.json({
                  status: true,
                  message: "dang nhap thanh cong",
                  // user: results[0],
                  token
                });
              }
            );
          } else {
            res.json({
              status: false,
              message: "mat khau khong chinh xac !!"
            });
          }
        } else {
          res.json({
            status: false,
            message: "tai khoan khong ton tai"
          });
        }
      }
    }
  );
});

router.get("/logout", (req, res, next) => {
  res.status(200).json({
    message: "dang xuat thanh cong"
  });
});

router.post("/update", (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  let sql =
    "UPDATE user SET username='" +
    req.body.username +
    "', password='" +
    hash +
    "' WHERE id =" +
    req.body.id;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json({
      message: "update thanh cong"
    });
  });
});

router.post("/delete", (req, res) => {
  let sql = "DELETE FROM user WHERE id=" + req.body.id + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json({
      message: "delete thanh cong"
    });
  });
});

router.get("/reset-password", (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, "../../public/reset.html"));
});

router.post("/reset-password", (req, res, next) => {

  async.waterfall(
    [
      function(done) {
        // crypto.randomBytes(20, function(err, buf) {
        //   var token = buf.toString("hex");
        //   done(err, token);
        // });
       jwt.sign({
          data: 'resetpass'
        }, 'secretkey', { expiresIn: 20 }, (err, token) => done(err,token));
      },
      function(token, done) {
        connection.query(
          "SELECT * FROM user WHERE email = ?",
          [req.body.email],
          (err, results, fields) => {
            if (results.length < 0) {
              req.flash("error", "No account with that email address exists.");
              return res.redirect("/reset-password");
            }
             done(err, token, results[0]);
             console.log(results[0]);
          }
        );
      },
      function(token, user, done) {
        // console.log(token);
        // console.log(user);
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "testcode2998@gmail.com",
            pass: "khongcomatkhau"
          }
        });
        var mailOptions = {
          from: "testcode2998@gmail.com",
          to:    user.email,
          subject: "Password reset",
          html:
          ` <p>You requested a password reset</p>
            <p><a href="http://localhost:3000/user/reset/${token}">click to here</a></p> `
        };
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            done(err, 'done');
          }
        });
      }
    ],
    function(err) {
      if (err) return next(err);
      res.redirect("/forgot");
    }
  );
  res.send({message: 'thanh cong'})
});

router.get("/reset/:token", function(req, res) {
  jwt.verify(req.params.token, 'secretkey', function(err, decoded) {
    if (err) {
      console.log(err);
      res.send({message: 'token het han'});
    }
    else{
      res.send({message: 'trang doi mat khau'});
    }
    
  });
  
});

module.exports = router;
