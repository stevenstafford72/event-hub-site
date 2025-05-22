const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const eventRoutes = require("./routes/events");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
