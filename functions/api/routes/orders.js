const orderController = require('../controllers/orders');
const testing = require('../controllers/orders')

const express = require("express");

const router = express.Router();


checkAuth = (req, res, next) => {
  next();
};

router.get("/", checkAuth, (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched"
  });
});



router.post("/new", orderController);




module.exports = router;
