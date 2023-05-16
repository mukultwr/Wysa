const mysql = require("mysql");

// Configure the database connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "WYSA123",
  database: "wysa",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");
});

exports.saveSleepData = ({ strugglingDuration, bedtime, wakeupTime }) => {
  const query = `INSERT INTO SleepInformation (strugglingDuration, bedtime, wakeupTime) VALUES (?, ?, ?)`;
  const values = [strugglingDuration, bedtime, wakeupTime];

  connection.query(query, values, (err) => {
    if (err) {
      console.error("Error saving sleep data: ", err);
      return;
    }
    console.log("Sleep data saved successfully");
  });
};
