const axios = require("axios");

async function runApp() {
  const userServiceUrl = "http://localhost:5001/user/1";
  const orderServiceUrl = "http://localhost:5002/order/101";

  const user = await axios.get(userServiceUrl);
  const order = await axios.get(orderServiceUrl);

  console.log("User Service Response:");
  console.log(user.data);

  console.log("\nOrder Service Response:");
  console.log(order.data);
}

runApp();

