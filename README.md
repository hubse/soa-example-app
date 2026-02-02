# SOA Demo Application

This is a simple demonstration of a Service-Oriented Architecture (SOA) application built with Node.js. The application consists of three services: a client app and two microservices (user-service and order-service). 

Services are language-agnostic
Any client can use them as long as it understands the protocol (usually HTTP + JSON).

                ┌─────────────┐
                │ User Service│
                └──────┬──────┘
                       │ HTTP / JSON
   ┌──────────┬────────┼─────────┬──────────┐
   │          │        │         │          │
 Web App   Mobile App  Java App  Python App  IoT Device


## App Architecture

The application follows a basic SOA pattern where:

- **Client App**: A consumer application based on different language that interacts with the service to fetch data.
- **User Service**: A microservice that provides user information.
- **Order Service**: A microservice that provides order information.

## Services

### Client App (`client-app/`)
- **Purpose**: Demonstrates how a client can consume multiple services.
- **Dependencies**: `axios` for HTTP requests.
- **Functionality**: Fetches user data from the user-service and order data from the order-service, then logs the responses.

### User Service (`user-service/`)
- **Port**: 5001
- **Framework**: Express.js
- **Endpoint**: `GET /user/:id`
  - Returns user data for the given ID.
  - Example: `GET /user/1` returns `{"id": 1, "name": "Alice"}`
- **Sample Data**:
  - ID 1: Alice
  - ID 2: Bob

### Order Service (`order-service/`)
- **Port**: 5002
- **Framework**: Express.js
- **Endpoint**: `GET /order/:id`
  - Returns order data for the given ID.
  - Example: `GET /order/101` returns `{"orderId": 101, "item": "Laptop"}`
- **Sample Data**:
  - ID 101: Laptop
  - ID 102: Phone

## Setup and Running the Application

1. **Prerequisites**:
   - Node.js installed on your system.

2. **Install Dependencies**:
   - Navigate to each service directory and run `npm install`:
     ```
     cd client-app && npm install
     cd ../user-service && npm install
     cd ../order-service && npm install
     ```

3. **Start the Services**:
   - Start the user-service:
     ```
     cd user-service && node index.js
     ```
     (Runs on port 5001)

   - Start the order-service:
     ```
     cd order-service && node index.js
     ```
     (Runs on port 5002)

   - Run the client app:
     ```
     cd client-app && node index.js
     ```
     (Fetches data from the services and logs to console)

4. **Testing the Services**:
   - User Service: `curl http://localhost:5001/user/1`
   - Order Service: `curl http://localhost:5002/order/101`

## Notes

- This is a basic demo and does not include error handling, authentication, or production-ready features.
- The services use in-memory data for simplicity.
- Ensure the services are running before executing the client app.

## License

ISC
