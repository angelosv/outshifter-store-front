const userExists = require('../controllers/customer');

const express = require("express");

const router = express.Router();


checkAuth = (req, res, next) => {
  next();
};


router.head("/check", userExists);




module.exports = router;
