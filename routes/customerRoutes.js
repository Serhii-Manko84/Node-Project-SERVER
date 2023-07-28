const express = require("express");
const { Customer } = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error("Error  customers data", error);
    res.status(500).json({ error: "Error  customers data" });
  }
});

router.post("/", async (req, res) => {
  let customer = new Customer({
    customer: req.body.customer,
    customerName: req.body.customerName,
  });
  try {
    const docCustomer = await customer.save();
    console.log(docCustomer);
    res.json(docCustomer);
  } catch (error) {
    console.error("Error save customers data", error);
    res.status(500).json({ error: "Error save  customers data" });
  }
});

module.exports = router;
