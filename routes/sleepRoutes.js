const express = require("express");
const sleepController = require("../controllers/sleepController");

const router = express.Router();

router.get("/struggling-duration", sleepController.getStrugglingDurationScreen);
router.post("/bedtime", sleepController.postBedtimeScreen);
router.post("/wakeup-time", sleepController.postWakeupTimeScreen);

module.exports = router;
