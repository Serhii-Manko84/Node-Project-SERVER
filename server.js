const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const projectRoutes = require("./routes/projectRoutes");
const customerRoutes = require("./routes/customerRoutes");

server.use("/", projectRoutes);
server.use("/customers", customerRoutes);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
