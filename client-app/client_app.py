import requests

USER_SERVICE_URL = "http://localhost:5001/user/1"
ORDER_SERVICE_URL = "http://localhost:5002/order/101"

user_response = requests.get(USER_SERVICE_URL)
order_response = requests.get(ORDER_SERVICE_URL)

print("User Service Response:")
print(user_response.json())

print("\nOrder Service Response:")
print(order_response.json())
