const orderController = require('../controllers/orders');
const checkIfAuthenticated = require('../middlewares/auth-middleware')

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



router.post("/new", checkIfAuthenticated, orderController);




module.exports = router;
