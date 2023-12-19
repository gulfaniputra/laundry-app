const laundryData = [
  {
    order: "1",
    id: "621ACY",
    weight: "2",
    price: "35000",
    status: "Ready to pickup",
    pickupBy: "Tomorrow",
  },
  {
    order: "2",
    id: "836BWF",
    weight: "7",
    price: "50000",
    status: "Washing in progress",
    pickupBy: "Pending",
  },
];

function simulateLoginState() {
  laundryData.forEach((data) => {
    let laundryOrderNumber = document.createElement("h3");
    laundryOrderNumber.innerHTML = "Order: " + data.order;
    document.getElementById("contents").append(laundryOrderNumber);

    let laundryOrderId = document.createElement("p");
    laundryOrderId.innerHTML = "ID: " + data.id;
    document.getElementById("contents").append(laundryOrderId);

    let laundryOrderWeight = document.createElement("p");
    laundryOrderWeight.innerHTML = "Weight: " + data.weight;
    document.getElementById("contents").append(laundryOrderWeight);

    let laundryOrderPrice = document.createElement("p");
    laundryOrderPrice.innerHTML = "Price: " + data.price;
    document.getElementById("contents").append(laundryOrderPrice);

    let laundryOrderStatus = document.createElement("p");
    laundryOrderStatus.innerHTML = "Status: " + data.status;
    document.getElementById("contents").append(laundryOrderStatus);

    let laundryOrderPickupBy = document.createElement("p");
    laundryOrderPickupBy.innerHTML = "Pickup by: " + data.pickupBy;
    document.getElementById("contents").append(laundryOrderPickupBy);
  });
}

simulateLoginState();
