const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_CONNECT_URI, PORT = 5000 } = process.env;

mongoose
  .connect(MONGODB_CONNECT_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.log("Database connection error:", error.message);
    process.exit(1);
  });

const projectSchema = new mongoose.Schema({
  customer: String,
  projectNumber: String,
});

const Project = mongoose.model("Projects", projectSchema);

const customerSchema = new mongoose.Schema({
  customer: String,
  customerName: String,
});

const Customer = mongoose.model("Customers", customerSchema);

module.exports = { Project, Customer };
