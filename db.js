const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("db connection");
}

main().catch((error) => console.log(error));

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

module.exports = { main, Project, Customer };
