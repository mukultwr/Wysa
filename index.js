const express = require("express");
const sleepRoutes = require("./routes/sleepRoutes");

const app = express();

app.use(express.json());

app.use("/api/sleep", sleepRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
