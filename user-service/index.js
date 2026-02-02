const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const users = {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" }
  };

  res.json(users[req.params.id] || { error: "User not found" });
});

app.listen(5001, () => {
  console.log("User Service running on port 5001");
});

