const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');
const { check } = require("express-validator");


router.get('/register', authController.register);

router.post('/register', [check("email").isEmail(), check("password").isLength({ min: 5 })], authController.postRegister);

router.get('/login', authController.login);

router.post('/login', [check("email").isEmail(), check("password").isLength({ min: 5 })], authController.postLogin);

router.get('/reset-password', authController.resetPassword);

router.post('/reset-password', check("email").isEmail(), authController.postResetPassword);

router.get('/reset/:token', authController.reset);


module.exports = router;
