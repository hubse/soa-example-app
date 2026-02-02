const express = require("express");
const app = express();

app.get("/order/:id", (req, res) => {
  const orders = {
    101: { orderId: 101, item: "Laptop" },
    102: { orderId: 102, item: "Phone" }
  };

  res.json(orders[req.params.id] || { error: "Order not found" });
});

app.listen(5002, () => {
  console.log("Order Service running on port 5002");
});

