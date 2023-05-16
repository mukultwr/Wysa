const database = require("../database");

exports.getStrugglingDurationScreen = (req, res) => {
  const options = ["Less than 2 weeks", "2 to 8 weeks", "More than 8 weeks"];

  res.json({
    message:
      "That's a great goal. How long have you been struggling with your sleep?",
    options,
  });
};

exports.postBedtimeScreen = (req, res) => {
  const strugglingDuration = req.body.strugglingDuration;

  // Save the data to the database
  database.saveSleepData({ strugglingDuration });

  res.json({
    message: "What time do you get out of bed to start your day?",
  });
};

exports.postWakeupTimeScreen = (req, res) => {
  const { strugglingDuration, bedtime } = req.body;

  // Save the data to the database
  database.saveSleepData({ strugglingDuration, bedtime });

  res.json({
    message: "Thank you for sharing your sleep information.",
  });
};
