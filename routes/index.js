const express = require("express");
const router = express.Router();
const chartController = require("../controllers/chartController");

/* GET home page. */
router.get("/chart", chartController.getAllData);

router.post("/chart", chartController.createNewRecord);

router.get("/bar", chartController.barChartData);

router.get("/pie", chartController.pieChartData);

module.exports = router;
