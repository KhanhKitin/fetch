const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const multer  = require('multer')
const { body } = require("express-validator");

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    }
})
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
const upload = multer({storage: fileStorage, fileFilter: fileFilter})


router.get('/books', adminController.books);

router.post('/books',  upload.single('image'), adminController.postBooks);

router.get('/books/:id');

router.put('/books/:id');

router.delete('books/:id');

module.exports = router;