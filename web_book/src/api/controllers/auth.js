const bcrypt = require("bcryptjs");
const User = require("../../models/User")();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { validationResult } = require("express-validator");

// register

module.exports.register = (req, res, next) => {
  res.status(200).json({ message: "trang dang ky tai khoan" });
};

module.exports.postRegister = async (req, res, next) => {
  const { email, username, password, role } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    res.json({
      message: "tai khoan da ton tai"
    });
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    User.create({
      role_id: role,
      username: username,
      password: hash,
      email: email
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};


// login

module.exports.login = (req, res, next) => {
  res.status(200).json({message: "trang dang nhap"});
}

module.exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = await User.findOne({ where: { email: email } });
  if(!user){
    res.json({
      status: false,
      message: "error !!"
    });
  }
  const comparePassword = await bcrypt.compareSync(password, user.password);
  if (comparePassword) {
    jwt.sign(
      {
        email: user.email,
        username: user.username,
        id: user.user_id
      },
      "secretkey",
      (err, token) => {
        res.status(201).json({
          status: true,
          message: "dang nhap thanh cong",
          token
        });
      }
    );
  } else {
    res.status(201).json({
      status: false,
      message: "mat khau khong chinh xac !!"
    });
  }
} 

// reset password

module.exports.resetPassword = (req, res, next) => {
  res.status(200).json({message: "trang reset mat khau"});
}

module.exports.postResetPassword = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const email = req.body.email
  const token = await jwt.sign({data: 'resetpass'}, 'secretkey', { expiresIn: 60 });
  const user = await User.findOne({ where: { email: email } });
  if(!user){
    console.log("khong co tai khoan voi dia chi email ban nhap");
    return res.redirect("/reset-password");
  }
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testcode2998@gmail.com",
      pass: "khongcomatkhau"
    }
  });
  var mailOptions = {
    from: "testcode2998@gmail.com",
    to:    "khanhkiitin@gmail.com",
    subject: "Password reset",
    html:
    ` <p>You requested a password reset</p>
      <p><a href="http://localhost:3000/reset/${token}">click to here</a></p> `
  };
  transporter.sendMail(mailOptions, function(error) {
    if(error){
      console.log(error);
    }
  });
  res.status(201).json({message: 'thanh cong'});
}

module.exports.reset = (req, res, next) => {
  jwt.verify(req.params.token, 'secretkey', function(err, decoded) {
    if(err) {
      console.log(err);
      res.send({message: 'token het han'});
    }
    else{
      res.send({message: 'trang doi mat khau'});
    }
  });
}