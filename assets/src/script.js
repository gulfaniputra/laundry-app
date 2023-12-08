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
  laundryData.forEach(function (data) {
    let laundryOrder = document.createElement("h3");
    laundryOrder.innerHTML = "Order: " + data.order;
    document.getElementById("contents").append(laundryOrder);

    laundryData.forEach(function (data) {
      let laundryOrder = document.createElement("p");
      laundryOrder.innerHTML = "ID: " + data.id;
      document.getElementById("contents").append(laundryOrder);
    });

    laundryData.forEach(function (data) {
      let laundryOrder = document.createElement("p");
      laundryOrder.innerHTML = "Weight: " + data.weight;
      document.getElementById("contents").append(laundryOrder);
    });

    laundryData.forEach(function (data) {
      let laundryOrder = document.createElement("p");
      laundryOrder.innerHTML = "Price: " + data.price;
      document.getElementById("contents").append(laundryOrder);
    });

    laundryData.forEach(function (data) {
      let laundryOrder = document.createElement("p");
      laundryOrder.innerHTML = "Status: " + data.status;
      document.getElementById("contents").append(laundryOrder);
    });

    laundryData.forEach(function (data) {
      let laundryOrder = document.createElement("p");
      laundryOrder.innerHTML = "Pickup by: " + data.pickupBy;
      document.getElementById("contents").append(laundryOrder);
    });
  });
}

simulateLoginState();
