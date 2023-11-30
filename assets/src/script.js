const orderOneData = {
  order: "1",
  id: "621ACY",
  weight: "2",
  price: "35000",
  status: "Ready to pickup",
  pickupBy: "Tomorrow",
};

const orderTwoData = {
  order: "2",
  id: "836BWF",
  weight: "7",
  price: "50000",
  status: "Washing in progress",
  pickupBy: "Pending",
};

document.getElementById("button").onclick = function () {
  document.getElementById("orderOneOrder").textContent = orderOneData.order;
  document.getElementById("orderOneId").textContent = orderOneData.id;
  document.getElementById("orderOneWeight").textContent = orderOneData.weight;
  document.getElementById("orderOnePrice").textContent = orderOneData.price;
  document.getElementById("orderOneStatus").textContent = orderOneData.status;
  document.getElementById("orderOnePickupBy").textContent =
    orderOneData.pickupBy;
  document.getElementById("orderTwoOrder").textContent = orderTwoData.order;
  document.getElementById("orderTwoOrder").textContent = orderTwoData.order;
  document.getElementById("orderTwoId").textContent = orderTwoData.id;
  document.getElementById("orderTwoWeight").textContent = orderTwoData.weight;
  document.getElementById("orderTwoPrice").textContent = orderTwoData.price;
  document.getElementById("orderTwoStatus").textContent = orderTwoData.status;
  document.getElementById("orderTwoPickupBy").textContent =
    orderTwoData.pickupBy;
};
