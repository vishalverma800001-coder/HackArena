function showSection(sectionId, button) {

  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.classList.remove("active-section");
  });

  const selectedSection = document.getElementById(sectionId);

  if (selectedSection) {
    selectedSection.classList.add("active-section");
  }

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  const titles = {
    dashboard: "Smart Logistics Dashboard",
    orders: "Order Management",
    agents: "Delivery Agents",
    tracking: "Live Delivery Tracking",
    analytics: "Analytics"
  };

  document.getElementById("pageTitle").textContent =
    titles[sectionId] || "Smart Logistics Dashboard";
}


function refreshData() {

  const total = document.getElementById("totalOrders");
  const transit = document.getElementById("transitOrders");
  const delivered = document.getElementById("deliveredOrders");
  const delayed = document.getElementById("delayedOrders");

  total.textContent = "1,248";
  transit.textContent = "342";
  delivered.textContent = "824";
  delayed.textContent = "28";

  alert("Dashboard data refreshed successfully!");
}


function searchOrders() {

  const input = document
    .getElementById("orderSearch")
    .value
    .toLowerCase();

  const rows = document.querySelectorAll("#ordersTable tbody tr");

  rows.forEach(row => {

    const text = row.textContent.toLowerCase();

    if (text.includes(input)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

  });
}


function addOrder() {

  alert(
    "Order creation module will be connected to the backend in the next stage."
  );

}
