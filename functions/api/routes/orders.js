const orderController = require('../controllers/orders');
const checkIfAuthenticated2 = require('../middlewares/auth-middleware')
const checkUser = require('../middlewares/create-user-middleware')
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



router.post("/new", checkUser, orderController);




module.exports = router;
